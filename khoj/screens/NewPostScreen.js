import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddNewPost from '../components/newPost/AddNewPost';
import FontContainer from '../components/FontContainer';

const NewPostScreen = ({navigation}) => {
  return (
    <FontContainer>
    <SafeAreaView style={{backgroundColor:'#2B3A55', flex: 1}}>
      <AddNewPost navigateOption={navigation}/>
    </SafeAreaView>
    </FontContainer>
  )
}

export default NewPostScreen