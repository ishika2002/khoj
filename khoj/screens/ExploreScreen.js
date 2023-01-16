import { View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/explore/Header';
import Tags from '../components/explore/Tags';
import Post from '../components/explore/Post';
import { POSTS } from '../data/posts';
import BottomTab from '../components/explore/BottomTab';
import FontContainer from '../components/FontContainer';
import { auth, database } from "../firebase"
import { onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, onValue, orderByChild} from "firebase/database";

const ExploreScreen = ({navigation}) => {

  const [posts, setPosts] = useState([]);
  const [uid, setUid] = useState('');  

  onAuthStateChanged(auth, (user) => {
    if(user){
      setUid(user.uid);
    //   const postDetails = ref(database, 'posts');
    //   onValue(postDetails, (snapshot) => {
    //     const data = snapshot.val();
    //     console.log(data)
    //     setPosts([...posts,data])
    // })
    }else{
      console.log("signed out")
    }
  })

  useEffect(() => {
    const postDetails = ref(database, 'posts');
    onValue(postDetails, (snapshot) => {
        const data = snapshot.val();
        const allPosts = []
        for(const item in data){
            var obj = data[item];
            obj["key"] = item;
            allPosts.push(data[item])
        }
        setPosts(allPosts)
    })
  }, [])

  const filterPosts = (tagName) => {
    const postDetails = tagName==='All' ? ref(database, 'posts') : ref(database, tagName);
    onValue(postDetails, (snapshot) => {
        const data = snapshot.val();
        const allPosts = []
        for(const item in data){
            var obj = data[item];
            obj["key"] = item;
            allPosts.unshift(data[item])
        }
        setPosts(allPosts)
    })
  }

  return (
    <FontContainer>
    <SafeAreaView style={styles.container}>
      <Header navigateOption={navigation}/>
      <Tags filterPosts={filterPosts}/>
      {posts !== null && <FlatList
        numColumns={1}
        data={posts}
        extraData={posts}
        inverted={true}
        renderItem={({item}) => {
          return (
            <Post post={item} navigateOption={navigation}/>
          )
      }}
      />}
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