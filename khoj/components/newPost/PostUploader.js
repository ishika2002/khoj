import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Button, Divider } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import DropdownComponent from './DropdownComponent';
import { auth, database } from "../../firebase"
import { onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, child, push, update, onValue } from "firebase/database";

const PostUploader = (props) => {

    const placeHolderImg = require('../../assets/placeHolder.png');

    const [postImage, setPostImage] = useState(null);
    const [uid, setUid] = useState('');
    const [tag, setTag] = useState('');
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    let postCount;

    const userDetails = ref(database, 'users/' + uid);
        onValue(userDetails, (snapshot) => {
            const data = snapshot.val();
            postCount = data.postCount;
        });

    onAuthStateChanged(auth, (user) => {
        if(user){
          setUid(user.uid)
        }else{
          console.log("signed out")
        }
    })

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);

      setPostImage(result.assets[0].uri);
    };

    const newPost = () => {
        const newPostKey = push(child(ref(database), 'posts')).key;
        update(ref(database, 'users/' + uid + '/posts/' + newPostKey), {
          imageUrl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/limestone-rock-phang-nga-1-Beautiful-limestone-rock-in-the-ocean.jpg',
          tag: tag,
          likes: 0,
          heading: heading,
          description: description,
          location: location,
          comments: [],
      }).then(()=> {
        update(ref(database, 'users/' + uid),{
            postCount: postCount+1
        })
      }).then(() => {
        update(ref(database, tag + '/' + newPostKey), {
            imageUrl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/limestone-rock-phang-nga-1-Beautiful-limestone-rock-in-the-ocean.jpg',
            tag: tag,
            likes: 0,
            heading: heading,
            description: description,
            location: location,
            comments: [],
            author: uid
        })
      }).then(() => {
        update(ref(database, 'posts/' + newPostKey), {
            imageUrl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/limestone-rock-phang-nga-1-Beautiful-limestone-rock-in-the-ocean.jpg',
            tag: tag,
            likes: 0,
            heading: heading,
            description: description,
            location: location,
            comments: [],
            author: uid
        })
      });;
        props.navigateOption.navigate("Profile");
      }

  return (
    <View>
    <ScrollView style={{height:'89%'}}>
        <View style={styles.outer}>
                <TouchableOpacity onPress={pickImage}>
                    <Image source={postImage ? {uri: postImage} : placeHolderImg} style={styles.photo}/>
                </TouchableOpacity>
                <View style={styles.inner}>
                    <TextInput 
                    style={{color: 'white', fontSize: 20, marginBottom:10, fontFamily:'Nunito-Medium'}}
                    placeholder='Write a heading' 
                    placeholderTextColor='gray'
                    multiline={true}
                    maxLength={100}
                    onChangeText={(heading) => setHeading(heading)}
                    />

                    <Divider width={1} orientation='vertical' />

                    <TextInput 
                    style={{color: 'white', marginTop:5, fontFamily:'Nunito-Medium'}}
                    placeholder='Add location' 
                    placeholderTextColor='gray'
                    multiline={true}
                    maxLength={1100}
                    onChangeText={(location) => setLocation(location)}
                    />

                </View>
            </View>
            <View style={{ marginTop:20 }}>
                <Divider width={1} orientation='vertical' />
                    <DropdownComponent setTag={(tag) => setTag(tag)}/>
    
                <Divider width={1} orientation='vertical' />
                    <TextInput 
                    style={styles.lowerFields}
                    placeholder='Add the description...' 
                    placeholderTextColor='gray'
                    multiline={true}
                    maxLength={1200}
                    numberOfLines={35}
                    textAlignVertical='top'
                    onChangeText={(description) => setDescription(description)}
                    />
            </View>
    </ScrollView>
    <View style={styles.buttonOuter}>
        <TouchableOpacity onPress={newPost} style={styles.button}><Text style={{fontFamily:'Nunito-Medium', color:'white'}}>Share</Text></TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    outer:{
        margin:20,
        marginTop:40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    inner:{
        flex:1,
        marginLeft:20,
    },
    photo:{
        width: 140, 
        height: 140,
        borderRadius:5,
        elevation:5,
        borderColor:'white',
        borderWidth:1,
    },
    lowerFields:{
        color:'white',
        marginLeft:20,
        marginRight:10,
        marginTop:12,
        marginBottom:12,
        fontFamily:'Nunito-Medium',
    },
    button:{
        backgroundColor:'#CE7777',
        borderRadius:10,
        padding:15,
        alignItems:'center',
    },
    buttonOuter:{
        justifyContent:'flex-end',
    },
  });

export default PostUploader