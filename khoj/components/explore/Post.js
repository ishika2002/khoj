import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';

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

const Post = ({post}) => {
  return (
    <View style={{marginBottom: 30}}>
        <Divider width={1} orientation='vertical' />
        <PostHeader post={post} />
        <PostImage post={post} />
        <View style={{marginHorizontal: 15, marginTop: 10}}>
            <PostFooter post={post}/>
            <Likes post={post} />
            <Heading post={post} />
            <MoreInfo  post={post} />
        </View>
    </View>
  )
}

const PostHeader = ({post}) => (
    <View style={styles.outer}>
        <TouchableOpacity style={styles.inner}>
            <Image source={post.profile_photo} style={styles.image}/>
            <Text style={styles.username}>{post.user}</Text>
        </TouchableOpacity>
    </View>
)

const PostImage = ({post}) => (
    <View style={styles.postImage}>
        <Divider width={1} orientation='vertical' />
        <Image 
            source={post.imageURL}
            style={{height:'100%', width:'100%'}} 
        />
    </View>
)

const PostFooter = ({post}) => (
    <View style={{flexDirection:'row', height:25, justifyContent:'space-between'}}>
        <View>
            <TouchableOpacity style={styles.tag}>
                <Text style={styles.name}>{post.tag}</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.footerIconContainer}>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
        </View>
    </View>
)

const Icon =({imgStyle, imgUrl}) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={imgUrl} />
    </TouchableOpacity>
)

const Likes =({post}) => (
    <View style={{flexDirection:'row', marginTop: 10, justifyContent:'flex-start', marginLeft: 4}}>
        <Text style={{fontWeight:'500', fontSize:13}}>{post.likes} likes</Text>
    </View>
)

const Heading =({post}) => (
    <View style={{marginTop: 5}}>
        <Text style={styles.heading}>{post.heading}</Text>
    </View>
)

const MoreInfo =({post}) => (
    <TouchableOpacity>
        <Text style={{marginLeft: 4, color:'gray', fontSize: 13}}>More info...</Text>
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
        fontWeight: '700',
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
        fontWeight:'500',
    },
    heading:{
        marginLeft: 4,
        fontWeight: '600',
        fontSize: 18,
    },
  });

export default Post