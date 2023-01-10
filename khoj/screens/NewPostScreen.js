import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddNewPost from '../components/newPost/AddNewPost';

const NewPostScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:'#2B3A55', flex: 1}}>
      <AddNewPost />
    </SafeAreaView>
  )
}

export default NewPostScreen