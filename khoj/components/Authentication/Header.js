import { Text, StyleSheet, View } from "react-native"

export default function Header(props){
    return (
        <View style={{padding: 10}}>
            <Text style={styles.heading}>{props.heading}</Text>
            <Text style={styles.subheading}>Welcome to KHOJ!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 50,
        color: '#1c315e',
        textAlign: 'center',
        fontFamily: 'NunitoBlack'
    },
    subheading: {
        fontSize: 20,
        color: '#c15454',
        textAlign: 'center',
    },
})