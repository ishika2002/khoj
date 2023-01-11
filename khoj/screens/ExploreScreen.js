import { View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/explore/Header';
import Tags from '../components/explore/Tags';
import Post from '../components/explore/Post';
import { POSTS } from '../data/posts';
import BottomTab from '../components/explore/BottomTab';
import FontContainer from '../components/FontContainer';
import { auth } from "../firebase"
import { onAuthStateChanged } from 'firebase/auth';

const ExploreScreen = ({navigation}) => {

  onAuthStateChanged(auth, (user) => {
    if(user){
      console.log(user.email," signed in")
    }else{
      console.log("signed out")
    }
  })

  return (
    <FontContainer>
    <SafeAreaView style={styles.container}>
      <Header navigateOption={navigation}/>
      <Tags />
      <ScrollView>
        {POSTS.map((post, index) => (
          // console.log(post.user)
          <Post post={post} key={index} navigateOption={navigation}/>
        ))}
      </ScrollView>
      <BottomTab navigateOption={navigation}/>
    </SafeAreaView>
    </FontContainer>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor: '#F2E5E5',
  },
});

export default ExploreScreen