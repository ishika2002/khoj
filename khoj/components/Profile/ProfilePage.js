import { NavigationContainer, TabActions } from "@react-navigation/native"
import {Text, View, Image, StyleSheet, Dimensions, ScrollView, FlatList, TouchableOpacity} from "react-native"
import Layout from "../Layout"
import { useState } from "react"
import Icon from 'react-native-vector-icons/AntDesign'
import ProfileImage from "./ProfileImage"

export default function ProfilePage({navigation}){
    const postsImages = [
        "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/limestone-rock-phang-nga-1-Beautiful-limestone-rock-in-the-ocean.jpg",
        "https://www.opodo.co.uk/blog/wp-content/uploads/sites/12/2016/04/regaleira-portugal.jpg",
        "https://www.revv.co.in/blogs/wp-content/uploads/2021/06/Unakoti-Hill.jpg",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harpers-ferry-west-virginia-royalty-free-image-1660073165.jpg?crop=0.699xw:1.00xh;0.128xw,0&resize=640:*",
        "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/11/Chembra-Lake-in-Meppadi.jpg",
        "https://im.indiatimes.in/media/content/2015/Sep/shivagange_cliff_1443524577_725x725.jpg",
        "https://qph.cf2.quoracdn.net/main-qimg-467ede38ba6e9e18b41ad836c0ac9483-lq",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCre2qyl9Xwm1p-SRFeZ81lTzEgj8HIjjy-g&usqp=CAU"
    ]

    const starredImages = [
        "https://www.swantour.com/blogs/wp-content/uploads/2019/04/Unexplored-Places-in-Delhi.jpg",
        "https://www.revv.co.in/blogs/wp-content/uploads/2020/03/unexplored-places-to-visit-in-delhi-1280x720.jpg",
        "https://qph.cf2.quoracdn.net/main-qimg-53e29f2f0cb078fa348b0ee7a9e03c82-lq",
        "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2017/12/05190911/HARPER-NINE-CHAMBERED-1.jpg?w=1200&h=628&fill=blur&fit=fill",
    ]

    const [postVisible, setPostVisible] = useState(true);
    return (
        <Layout>
            <ScrollView width="100%" height="100%" nestedScrollEnabled={true}>
                <View height={60} style={{justifyContent: 'center', marginHorizontal: 10, flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity style={{position: 'absolute', left: 10}}>
                        <Icon name="left" size={20} color="#1c315e"/>
                    </TouchableOpacity>
                    <Image source={require('../../assets/Khoj_Logo.png')} style={{width: '60%', height:'70%', marginTop: 5}}/>
                </View>
                <View style={styles.profileheader}>
                    <View style={{alignItems: 'center'}}>
                        <ProfileImage source="https://images.unsplash.com/photo-1526045612212-70caf35c14df"/>
                        <Text 
                            style={{paddingTop: 10, fontFamily: 'NunitoBlack', fontSize: 20, color: '#1c315e' }}
                        >the_khoji</Text>
                        <Text style={{padding: 10, color: '#1c315e', fontFamily: 'Nunito-Medium'}}>Unnati Gupta</Text>
                    </View>
                    <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate("Edit")}>
                        <Text style={{color: "#E8C4C4", fontFamily: 'Nunito-Medium'}}>Edit Profile</Text>
                    </TouchableOpacity>
                    <View style={styles.briefDetails}>
                        <View style={{alignItems: 'center'}}>
                            <Text style={styles.number}>88</Text>
                            <Text style={{color: "#1c315e", fontFamily: 'Nunito-Medium'}}>Posts</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Text style={styles.number}>9</Text>
                            <Text style={{color: "#1c315e"}}>Streaks</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.tab, {marginHorizontal: 10}]}>
                    <View style={styles.tab}>
                            <TouchableOpacity style={[styles.tabButton, !postVisible ? {opacity: 0.5, color: '#fff'} : null]} onPress={() => postVisible & setPostVisible(true)}>
                                <Text style={{fontFamily: 'Nunito-Medium'}}>Posts</Text>
                                <View style={styles.divider}></View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.tabButton, postVisible ? {opacity: 0.5, color: '#fff'} : null]} onPress={() => postVisible & setPostVisible(false)}>
                                <Text style={{fontFamily: 'Nunito-Medium'}}>Starred</Text>
                                <View style={styles.divider}></View>
                            </TouchableOpacity>
                    </View>
                </View>
                <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', marginHorizontal: 3}}>
        
                    {postVisible ? <FlatList 
                        numColumns={3}
                        data={postsImages}
                        scrollEnabled={false}
                        renderItem={({item}) => {
                            return (
                                <Image 
                                    source={{uri: item}} 
                                    style={styles.images}
                                />
                            )
                        }}
                    /> : <FlatList 
                    numColumns={3}
                    data={starredImages}
                    scrollEnabled={false}
                    renderItem={({item}) => {
                        return (
                            <Image 
                                source={{uri: item}} 
                                style={styles.images}
                            />
                        )
                    }}
                />
                    }
        
                </ScrollView>
            </ScrollView>
        </Layout>
    )
}

const styles = StyleSheet.create({
    profileheader: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Dimensions.get('window').height/2,
        backgroundColor: '#E8C4C4',
        paddingVertical: 40
    },
    editButton: {
        paddingVertical: 10,
        margin: 5,
        paddingHorizontal: 40,
        borderRadius: 20,
        backgroundColor: '#1c315e',
    },
    briefDetails: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingVertical: 10
    },
    number: {
        fontSize: 20,
        fontFamily: 'NunitoBlack',
        color: '#1c315e'
    },
    tab: {
        height: Dimensions.get('window').height/12,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 8
    },
    tabButton: {
        color: '#E8C4C4',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
    },
    divider: {
        borderBottomColor: '#000',
        borderWidth: 1,
        width: '90%',
        margin: 10
    },
    images: {
        height: (Dimensions.get('window').width-20)/3,
        width: (Dimensions.get('window').width-20)/3,
        margin: 2
    }
})