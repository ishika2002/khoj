import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider } from 'react-native-elements';
import { POSTS } from '../data/posts';
import FontContainer from '../components/FontContainer';
import { auth } from "../firebase"
import { onAuthStateChanged } from 'firebase/auth';

const CommentSection = ({navigation}) => {

    onAuthStateChanged(auth, (user) => {
        if(user){
          console.log(user.email," signed in")
        }else{
          console.log("signed out")
        }
      })

    return (
        <FontContainer>
        <SafeAreaView style={{backgroundColor:'#F2E5E5', flex: 1}}>
            <View style={styles.container}>
                <Header navigateOption={navigation}/>
                <ScrollView style={{margin:20}}>
                    <Comments />
                </ScrollView>
            </View>
            <View style={{justifyContent:'flex-end', backgroundColor:'#2B3A55'}}>
                <View style={{marginLeft:20, marginRight:20, marginBottom:15, marginTop:15, justifyContent:'space-between', alignItems:'center', flexDirection:'row'}}>
                    <TextInput 
                        style={{color: 'white', width:'85%', fontFamily:'Nunito-Medium'}}
                        placeholder='Write a comment...' 
                        placeholderTextColor='gray'
                        multiline={true}
                        maxLength={200}
                        // onChangeText={handleChange('heading')}
                        // onBlur={handleBlur('heading')}
                        // value={values.heading}
                    />
                    <TouchableOpacity><Text style={{color:'#E8C4C4', fontFamily:'Nunito-Bold'}}>Post</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
        </FontContainer>
      )
}

const Header = ({navigateOption}) => (
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigateOption.navigate("Explore")}>
            <Image source={require('../assets/backBlue.png')} style={{width: 20, height: 20}}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>COMMENTS</Text>
        <Text></Text>
    </View>
)

const Comments = () => (
    <>
    {POSTS[0].comments.map((comment, index) => (
        <View key={index} style={{marginTop:10}}>
            <View style={{flexDirection:'row', marginBottom:10}}>
                <View>
                    <Image source={comment.profileUrl} style={{margin:10, width: 50, height: 50, backgroundColor:'white', borderRadius:50}}/>
                </View>
                <View style={{marginTop:5, marginLeft:10, }}>
                    <Text style={{color:'#2B3A55', marginBottom:10, marginTop:5, fontSize:15}}>
                        <Text style={{fontFamily:'Nunito-XBold'}}>{comment.user}</Text>
                    </Text>
                    <Text style={{color:'#2B3A55', marginBottom:15, fontSize:12, fontFamily:'Nunito-Medium'}}>{comment.comment}</Text>
                </View>
            </View>
            <Divider width={1} orientation='vertical'/>
        </View>
    ))}
    </>
)

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        flex:1,
    },
    headerContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft:10,
    },
    headerText:{
       color:'#2B3A55',
    //    fontWeight:'700',
       fontSize:20,
       marginRight: 15,
       fontFamily:'NunitoBlack'
    },
    outer:{
        margin:20,
        marginTop:40,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
  });


export default CommentSection