import { StyleSheet, Image } from "react-native"

export default function ProfileImage(props){
    return (
        <Image source={{uri: props.source}} style={styles.profileImg} alt="profile pic"/>
    )
}

const styles = StyleSheet.create({
    profileImg: {
        width: 120, 
        height: 120, 
        borderRadius: 60,
        borderColor: '#CE7777',
        borderWidth: 5
    },
})