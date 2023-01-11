import {Text, TextInput, View} from "react-native"
import {useState} from "react"
import Layout from "../Layout"
import Header from "./Header"
import AuthButton from "./AuthButton"
import InputBox from "./InputBox"
import GoogleAuth from "./GoogleAuth"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from '../../firebase'

export default function SignupPage({navigation}){
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const submit = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            updateProfile(userCredentials.user, {
                displayName: name
            })
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <Layout>
            <View width="90%">
                <Header heading="SIGN UP"/>
                <View>
                    <InputBox>
                        <TextInput placeholder="Username" onChangeText={(username) => setUsername(username)}/>
                    </InputBox>
                    <InputBox>
                        <TextInput placeholder="Name" onChangeText={(name) => setName(name)}/>
                    </InputBox>
                    <InputBox>
                        <TextInput placeholder="Email ID" onChangeText={(email) => setEmail(email)}/>
                    </InputBox>
                    <InputBox>
                        <TextInput placeholder="Password" secureTextEntry={true} onChangeText={(password) => setPassword(password)}/>
                    </InputBox>
                    <AuthButton buttonName="Sign Up" navigateOption={navigation} onClick={submit}/>
                </View>

                <GoogleAuth navigate="Login" text="Already have an account?" linkName="Login!" navigateOption={navigation} otherOptionText="or Sign Up with"/>
            </View>
        </Layout>
    )
}