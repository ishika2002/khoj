import { View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/explore/Header';
import Tags from '../components/explore/Tags';
import Post from '../components/explore/Post';
import { POSTS } from '../data/posts';
import BottomTab from '../components/explore/BottomTab';

const ExploreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Tags />
      <ScrollView>
        {POSTS.map((post, index) => (
          // console.log(post.user)
          <Post post={post} key={index}/>
        ))}
      </ScrollView>
      <BottomTab />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor: '#F2E5E5',
  },
});

export default ExploreScreen