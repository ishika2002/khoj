import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, {useEffect, useState} from 'react';
import { Divider } from 'react-native-elements';
import { auth, database } from "../../firebase"
import { onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, child, push, update, onValue, set, remove } from "firebase/database";

const postFooterIcons = [
    {
        name:'Like',
        imageUrl:require('../../assets/heart.png'),
        likedImageUrl:require('../../assets/filledHeart.png'),
    },
    {
        name:'Comment',
        imageUrl:require('../../assets/comment.png'),
    },
    {
        name:'Save',
        imageUrl:require('../../assets/star.png'),
        savedImageUrl:require('../../assets/filledStar.png'),
    },
]

const Post = ({post, navigateOption}) => {

    const [username, setUsername] = useState('');
    const [profileUrl, setProfileUrl] = useState('');
    const [uid, setuid] = useState('');
    const [starred, setStarred] = useState(false);

    onAuthStateChanged(auth, (user) => {
        if(user){

            const userDetails = ref(database, 'users/' + post.author);
            onValue(userDetails, (snapshot) => {
            const data = snapshot.val();

            setuid(user.uid);
            setUsername(data.username);
            setProfileUrl(data.profileUrl);
        
            });
        }else{
          console.log("signed out")
        }
      })

      const starPost = () => {
        if(!starred){
            set(ref(database, 'users/' + uid + '/starred/' + post.key), true)
            console.log(post.key )
            setStarred(true)
        }else{
            remove(ref(database, 'users/' + uid + '/starred/' + post.key))
            setStarred(false)
        }
      }

      useEffect(() => {
        
        const starredDetails = ref(database, 'users/' + uid + '/starred/' + post.key);
        onValue(starredDetails, (snapshot) => {
            const data=snapshot.val();
            
            if(data!==null){
                setStarred(true)
            }
        })
      }, [uid])


  return (
    <View style={{marginBottom: 30}}>
        <Divider width={1} orientation='vertical' />
        <PostHeader username={username} profileUrl={profileUrl}/>
        <PostImage post={post} />
        <View style={{marginHorizontal: 15, marginTop: 10}}>
            <PostFooter post={post} navigateOption={navigateOption} starPost={starPost} starred={starred}/>
            <Likes post={post} />
            <Heading post={post} />
            <MoreInfo  post={post} navigateOption={navigateOption}/>
        </View>
    </View>
  )
}

const PostHeader = ({username, profileUrl}) => (
    <View style={styles.outer}>
        <TouchableOpacity style={styles.inner}>
            <Image source={{uri: profileUrl}} style={styles.image}/>
            <Text style={[styles.username, {fontFamily:'Nunito-XBold'}]}>{username}</Text>
        </TouchableOpacity>
    </View>
)

const PostImage = ({post}) => (
    <View style={styles.postImage}>
        <Divider width={1} orientation='vertical' />
        <Image 
            source={{uri: post.imageUrl}}
            style={{height:'100%', width:'100%'}} 
        />
    </View>
)

const PostFooter = ({post, navigateOption, starPost, starred}) => (
    <View style={{flexDirection:'row', height:25, justifyContent:'space-between'}}>
        <View>
            <TouchableOpacity style={styles.tag}>
                <Text style={styles.name}>{post.tag}</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.footerIconContainer}>
            <TouchableOpacity>
                <Image style={styles.footerIcon} source={postFooterIcons[0].imageUrl} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateOption.navigate("Commment Section")}>
                <Image style={styles.footerIcon} source={postFooterIcons[1].imageUrl} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => starPost()}>
                <Image style={styles.footerIcon} source={!starred ? postFooterIcons[2].imageUrl : postFooterIcons[2].savedImageUrl} />
            </TouchableOpacity>
        </View>
    </View>
)

const Likes =({post}) => (
    <View style={{flexDirection:'row', marginTop: 10, justifyContent:'flex-start', marginLeft: 4}}>
        <Text style={{fontFamily:'Nunito-Bold', fontSize:13}}>{post.likes} likes</Text>
    </View>
)

const Heading =({post}) => (
    <View style={{marginTop: 5}}>
        <Text style={styles.heading}>{post.heading}</Text>
    </View>
)

const MoreInfo =({post, navigateOption}) => (
    <TouchableOpacity onPress={() => {
        navigateOption.navigate('More Info', {
          postId:post.key,
        });
      }}>
        <Text style={{marginLeft: 4, color:'gray', fontSize: 13, fontFamily:'Nunito-Medium'}}>More info...</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    outer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center',
    },
    inner:{
        flexDirection:'row',
        alignItems:'center',
    },
    image:{
        width:35,
        height:35,
        borderRadius:50,
        marginLeft:6,
        borderWidth:1.6,
        borderColor:'#E8C4C4',
    },
    username:{
        color:'#2B3A55',
        marginLeft: 5,
    },
    postImage:{
        width:'100%', 
        height:450, 
    },
    footerIcon:{
        width:25,
        height:25,
    },
    footerIconContainer:{
        flexDirection:'row',
        width:'30%',
        justifyContent:'space-between',
    },
    tag:{
        backgroundColor:'#2B3A55',
        paddingBottom:5,
        paddingTop:5,
        paddingLeft:10,
        paddingRight:10,
        borderRadius:10,
        height:30,
    },
    name:{
        color:'white',
        fontSize:13,
        // fontWeight:'500',
        fontFamily:'Nunito-Bold',
    },
    heading:{
        marginLeft: 4,
        // fontWeight: '600',
        fontSize: 18,
        fontFamily:'Nunito-XBold',
    },
  });

export default Post