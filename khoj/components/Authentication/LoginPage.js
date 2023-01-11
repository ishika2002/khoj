import {Text, TextInput, View, StyleSheet, TouchableOpacity, Image} from "react-native"
import Layout from "../Layout";
import Header from "./Header";
import AuthButton from "./AuthButton";
import InputBox from './InputBox'
import GoogleAuth from './GoogleAuth'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

export default function LoginPage({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            navigation.navigate("Explore", {user:user})
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

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
            <View width='90%'>
                <Header heading="LOGIN"/>
                <View>
                    <InputBox>
                        <TextInput placeholder="Email ID"  onChangeText={(email) => setEmail(email)}/>
                    </InputBox>
                    <InputBox>
                        <TextInput placeholder="Password" secureTextEntry={true} onChangeText={(password) => setPassword(password)}/>
                    </InputBox>
                    <AuthButton buttonName="Login" navigateOption={navigation} onClick={submit}/>
                </View>

                <GoogleAuth navigate="Signup" text="Don't have an account?" linkName="Sign Up!" navigateOption={navigation} otherOptionText="or Sign In with"/>
            </View>
        </Layout>
    );
}
