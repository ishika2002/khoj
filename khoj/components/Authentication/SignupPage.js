import {Text, TextInput, View} from "react-native"
import Layout from "../Layout"
import Header from "./Header"
import AuthButton from "./AuthButton"
import InputBox from "./InputBox"
import GoogleAuth from "./GoogleAuth"

export default function SignupPage({navigation}){
    return (
        <Layout>
            <View width="90%">
                <Header heading="SIGN UP"/>
                <View>
                    <InputBox>
                        <TextInput placeholder="Username"/>
                    </InputBox>
                    <InputBox>
                        <TextInput placeholder="Name"/>
                    </InputBox>
                    <InputBox>
                        <TextInput placeholder="Email ID"/>
                    </InputBox>
                    <InputBox>
                        <TextInput placeholder="Password" secureTextEntry={true}/>
                    </InputBox>
                    <AuthButton buttonName="Sign Up" navigateOption={navigation}/>
                </View>

                <GoogleAuth navigate="Login" text="Already have an account?" linkName="Login!" navigateOption={navigation} otherOptionText="or Sign Up with"/>
            </View>
        </Layout>
    )
}