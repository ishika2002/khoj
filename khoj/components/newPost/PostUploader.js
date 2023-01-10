import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Button, Divider } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import DropdownComponent from './DropdownComponent';

const PostUploader = (props) => {

    const placeHolderImg = require('../../assets/placeHolder.png');

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
    <View>
    <ScrollView style={{height:'89%'}}>
        <View style={styles.outer}>
                <TouchableOpacity onPress={pickImage}>
                    <Image source={postImage ? {uri: postImage} : placeHolderImg} style={styles.photo}/>
                    {/* {postImage && <Image source={{ uri: postImage }} style={{ width: 200, height: 200 }} />} */}
                </TouchableOpacity>
                <View style={styles.inner}>
                    <TextInput 
                    style={{color: 'white', fontSize: 20, marginBottom:10, fontFamily:'Nunito-Medium'}}
                    placeholder='Write a heading' 
                    placeholderTextColor='gray'
                    multiline={true}
                    maxLength={100}
                    // onChangeText={handleChange('heading')}
                    // onBlur={handleBlur('heading')}
                    // value={values.heading}
                    />

                    <Divider width={1} orientation='vertical' />

                    <TextInput 
                    style={{color: 'white', marginTop:5, fontFamily:'Nunito-Medium'}}
                    placeholder='Add location' 
                    placeholderTextColor='gray'
                    multiline={true}
                    maxLength={1100}
                    // onChangeText={handleChange('location')}
                    // onBlur={handleBlur('location')}
                    // value={values.location}
                    />

                </View>
            </View>
            <View style={{ marginTop:20 }}>
                <Divider width={1} orientation='vertical' />
                    <DropdownComponent />
    
                <Divider width={1} orientation='vertical' />
                    {/* <TextInput 
                    style={styles.lowerFields}
                    placeholder='Select the tag' 
                    placeholderTextColor='gray'
                    // onChangeText={handleChange('tag')}
                    // onBlur={handleBlur('tag')}
                    // value={values.tag}
                    /> */}
                    <TextInput 
                    style={styles.lowerFields}
                    placeholder='Add the description...' 
                    placeholderTextColor='gray'
                    multiline={true}
                    maxLength={1200}
                    numberOfLines={35}
                    textAlignVertical='top'
                    // onChangeText={handleChange('description')}
                    // onBlur={handleBlur('description')}
                    // value={values.description}
                    />
                    
                {/* <Divider width={1} orientation='vertical' /> */}
            </View>
    </ScrollView>
    <View style={styles.buttonOuter}>
        {/* <Button onPress={() => props.navigateOption.navigate("Explore")} title='Share' /> */}
        <TouchableOpacity onPress={() => props.navigateOption.navigate("Explore")} style={styles.button}><Text style={{fontFamily:'Nunito-Medium', color:'white'}}>Share</Text></TouchableOpacity>
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