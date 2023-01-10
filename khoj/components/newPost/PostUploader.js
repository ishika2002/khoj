import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Button, Divider } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import DropdownComponent from './DropdownComponent';

const PostUploader = () => {

    const placeHolderImg = require('../../assets/placeHolder.png');

    const handleSubmit = () => {
        console.log('Hello');
    }

    const [postImage, setPostImage] = useState(null);

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

  return (
    <ScrollView>
        <View style={styles.outer}>
                <TouchableOpacity onPress={pickImage}>
                    <Image source={postImage ? {uri: postImage} : placeHolderImg} style={styles.photo}/>
                    {/* {postImage && <Image source={{ uri: postImage }} style={{ width: 200, height: 200 }} />} */}
                </TouchableOpacity>
                <View style={styles.inner}>
                    <TextInput 
                    style={{color: 'white', fontSize: 20, marginBottom:10}}
                    placeholder='Write a heading' 
                    placeholderTextColor='gray'
                    multiline={true}
                    maxLength={200}
                    // onChangeText={handleChange('heading')}
                    // onBlur={handleBlur('heading')}
                    // value={values.heading}
                    />

                    <Divider width={1} orientation='vertical' />

                    <TextInput 
                    style={{color: 'white', marginTop:5}}
                    placeholder='Add the description...' 
                    placeholderTextColor='gray'
                    multiline={true}
                    maxLength={1100}
                    // onChangeText={handleChange('description')}
                    // onBlur={handleBlur('description')}
                    // value={values.description}
                    />
                </View>
            </View>
            <View style={{ marginTop:20 }}>
                <Divider width={1} orientation='vertical' />
                <TextInput 
                    style={styles.lowerFields}
                    placeholder='Add location' 
                    placeholderTextColor='gray'
                    multiline={true}
                    maxLength={1100}
                    // onChangeText={handleChange('location')}
                    // onBlur={handleBlur('location')}
                    // value={values.location}
                    />
    
                <Divider width={1} orientation='vertical' />
                    {/* <TextInput 
                    style={styles.lowerFields}
                    placeholder='Select the tag' 
                    placeholderTextColor='gray'
                    // onChangeText={handleChange('tag')}
                    // onBlur={handleBlur('tag')}
                    // value={values.tag}
                    /> */}
                    <DropdownComponent />
                {/* <Divider width={1} orientation='vertical' /> */}

                <View style={styles.button}>
                    <Button onPress={handleSubmit} title='Share' />
                    {/* <TouchableOpacity onPress={handleSubmit}  disabled={!isValid}><Text>Share</Text></TouchableOpacity> */}
                </View>
            </View>
    </ScrollView>
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
    },
    button:{
        marginTop:340,
        marginBottom:50,
    },
  });

export default PostUploader