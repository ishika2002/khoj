import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, {useState} from 'react';
import { Divider } from 'react-native-elements';

const BottomTab = () => {
  return (
    <View>
        <Divider width={1} orientation='vertical' />
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={require('../../assets/add.png')} style={styles.icon}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: '#2B3A55',
        justifyContent: 'center',
        paddingTop:8,
        paddingBottom:8,
    },
    icon:{
        width: 25,
        height: 25,
    },
});

export default BottomTab