import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { useEffect } from "react";

export default function StartPage({navigation}) {
  // useEffect(() => {
  //     setTimeout(() => {
  //       // navigation.navigate('Login')
  //       Alert.alert("Alert Shows After 5 Seconds of Delay.")
  //     }, 5000)
  // })
    return (
        <Image source={require('../assets/KhojLogo.png')} />
    );
  }