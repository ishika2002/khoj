import { Text, StyleSheet, TouchableOpacity } from "react-native"

export default function AuthButton(props){
    return (
        <TouchableOpacity style={styles.authbutton}>
            <Text style={styles.buttonContent}>{props.buttonName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    authbutton: {
        backgroundColor: '#ce7777',
        borderColor: '#c15454',
        margin: 10,
        padding: 15,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    buttonContent: {
        color: '#f2e5e5',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 16
    },
})