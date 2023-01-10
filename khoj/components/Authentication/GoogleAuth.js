import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native"

export default function AuthButton(props){

    const navigate = () => {
        props.navigateOption.navigate(props.navigate)
    }

    return (
        <View>
            <View style={{flexDirection:"row", paddingTop: 20, alignItems: 'center'}}>
                <View style={styles.divider}></View>
                <View><Text style={{color: '#1c315e', textAlign: 'center', paddingHorizontal: 10}}> {props.otherOptionText} </Text></View>
                <View style={styles.divider}></View>
            </View>

            <View>
                <TouchableOpacity style={styles.googlebutton}>
                    <Image source={require('../../assets/google.png')} style={{width: 40, height: 40}}/>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:"row", alignItems: 'center', justifyContent: 'center'}}>
                <View>
                    <Text style={{color: '#1c315e', textAlign: 'center'}}> {props.text} </Text>
                </View>
                <View>
                    <Text 
                        style={{color: '#c15454', textAlign: 'center', textDecorationLine: 'underline'}}
                        onPress={() => navigate()}
                    >
                        {props.linkName}</Text>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    divider: {
        flex:1, 
        height: 1,  
        backgroundColor: '#1c315e'
    },
    googlebutton: {
        backgroundColor: 'rgba(43, 58, 85, 0.2)',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 30
    }
})