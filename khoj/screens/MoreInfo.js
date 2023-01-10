import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider } from 'react-native-elements';
import FontContainer from '../components/FontContainer';

const MoreInfo = ({navigation}) => {
  return (
    <FontContainer>
    <SafeAreaView style={{backgroundColor:'#2B3A55', flex: 1}}>
        <ScrollView>
            <View style={styles.container}>
                <Header navigateOption={navigation}/>
                <View style={styles.outer}>
                    <Image source={require('../assets/park.jpg')} style={{width: 350, height: 350}}/>
                    <Heading />
                    <Divider width={1} orientation='vertical' />
                    <Description />
                    <View style={{flexDirection:'row', marginTop:30}}>
                        <Text style={{fontFamily:'Nunito-Bold', fontSize:13, color:'white'}}>Location: </Text>
                        <Location />
                    </View>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
    </FontContainer>
  )
}

const Header = ({navigateOption}) => (
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigateOption.navigate("Explore")}>
            <Image source={require('../assets/back.png')} style={{width: 20, height: 20}}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>MORE INFO</Text>
        <Text></Text>
    </View>
)

const Heading =() => (
    <View style={{marginTop: 5}}>
        <Text style={styles.heading}>Perfect picnic spot - Sunder Nursery</Text>
    </View>
)

const Description =() => (
    <View style={{marginTop: 5}}>
        <Text style={styles.description}>On a winter afternoon, under the sun sitting along with your friends and revisiting all old memories for all this whats better place than Sunder Nursery</Text>
    </View>
)

const Location =() => (
    <View>
        <Text style={styles.location}>Near Jor Bagh metro station</Text>
    </View>
)

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
    },
    headerContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft:10,
    },
    headerText:{
       color:'white',
       fontSize:20,
       marginRight: 15,
       fontFamily:'NunitoBlack',
    },
    outer:{
        margin:20,
        marginTop:40,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    heading:{
        fontFamily:'Nunito-XBold',
        fontSize: 20,
        color:'white',
        marginTop:20,
        marginBottom:20,
        textAlign:'center',
    },
    description:{
        fontFamily:'Nunito-Light',
        fontSize: 13,
        color:'white',
    },
    location:{
        fontFamily:'Nunito-Light',
        fontSize: 13,
        color:'white',
    },
  });

export default MoreInfo