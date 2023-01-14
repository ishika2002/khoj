import {View, StyleSheet, TextInput, Text, Image, TouchableOpacity} from 'react-native'
import Layout from '../Layout';
import ProfileImage from './ProfileImage';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { auth, database } from "../../firebase"
import { onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, child, push, update, onValue } from "firebase/database";

export default function EditPage({navigation}) {

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [uid, setUid] = useState('');

    let oldName, oldUsername

    const userDetails = ref(database, 'users/' + uid);
            onValue(userDetails, (snapshot) => {
            const data = snapshot.val();
            oldName=data.name;
            oldUsername=data.username;
            });

    onAuthStateChanged(auth, (user) => {
        if(user){
          setUid(user.uid);
        }else{
          console.log("signed out")
        }
      })

      const saveChanges = () => {
        update(ref(database, 'users/' + uid), {
          name: name.length!==0 ? name : oldName,
          username: username.length!==0 ? username : oldUsername,
      });
        navigation.navigate("Profile");
      }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    // console.log(result);

    // if (!result.canceled) {
    //   setImage(result.assets[0].uri);
    // }
    setImage(result.assets[0].uri);
  };

    return (
        <Layout>
            <View style={styles.editBox}>
                <Text style={styles.title}>EDIT PROFILE</Text>
                <View style={{opacity: 0.6, alignItems: 'center'}}>
                    <ProfileImage source={image}/>
                    <TouchableOpacity onPress={pickImage}>
                        <Text style={{textDecorationLine: 'underline', padding: 10, fontFamily: 'Nunito-Medium'}}>Change Profile Photo</Text>
                    </TouchableOpacity>
                </View>
                <TextInput style={styles.textBox} placeholder={oldName} onChangeText={(name) => setName(name)}/>
                <TextInput style={styles.textBox} placeholder={oldUsername} onChangeText={(username) => setUsername(username)}/>
                <TouchableOpacity style={[styles.textBox, styles.savebutton]} onPress={saveChanges}>
                    <Text style={{color:'#F2E5E5', fontFamily: 'Nunito-Medium'}}>Save Changes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.textBox, {borderColor: '#CE7777', alignItems: 'center'}]} onPress={()=>navigation.navigate("Profile")}>
                    <Text style={{color:'#CE7777', fontFamily: 'Nunito-Medium'}}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </Layout>
    );
  }

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontFamily: 'NunitoBlack',
        color: '#1c315e',
        padding: 20
    },
    editBox: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    textBox: {
        border: '#000',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
        width: '80%',
        padding: 20,
        margin: 10,
        borderColor: '#CE7777'
    },
    savebutton: {
        backgroundColor: '#CE7777', 
        borderColor: '#CE7777',
        alignItems: 'center',
        padding: 30
    },
  });