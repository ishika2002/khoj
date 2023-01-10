import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
        <View style={styles.container}>
          <View style={styles.header1}>

          </View>
          <View style={styles.header2}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>
            <TouchableOpacity>
              <Image style={styles.profile} source={require('../../assets/profile.png')}/>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      width:'100%',
      height:60,
      flexDirection: 'row',
      backgroundColor: '#F2E5E5',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 5,
  },
  header1:{
      flex:1,
  },
  header2:{
      flex:2,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems: 'center',
  },
  logo:{
      width:400,
      height:200,
      flex:0.5,
      paddingLeft:'25%',
  },
  profile:{
      width:60,
      height:30,
  },
});

export default Header