import {Text, TextInput, View, StyleSheet, TouchableOpacity, Image} from "react-native"
import Layout from "../Layout";
import Header from "./Header";
import AuthButton from "./AuthButton";
import InputBox from './InputBox'
import GoogleAuth from './GoogleAuth'

export default function LoginPage({navigation}) {

    const validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
          console.log("Email is Not Correct");
          return false;
        }
        else {
          console.log("Email is Correct");
          return true;
        }
      }
    return (
        <Layout >
            <View width='100%'>
                <Header heading="LOGIN"/>
                <View>
                    <InputBox>
                        <TextInput placeholder="Email ID"  onChangeText={(text) => validate(text)}/>
                    </InputBox>
                    <InputBox>
                        <TextInput placeholder="Password" secureTextEntry={true}/>
                    </InputBox>
                    <AuthButton buttonName="Login" />
                </View>

                <GoogleAuth navigate="Signup" text="Don't have an account?" linkName="Sign Up!" navigateOption={navigation} otherOptionText="or Sign In with"/>
            </View>
        </Layout>
    );
}
