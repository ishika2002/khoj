import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
// import FormikPostUploader from './FormikPostUploader';
import PostUploader from './PostUploader';

const AddNewPost = () => {
  return (
    <View style={styles.container}>
        <Header />
        {/* <FormikPostUploader /> */}
        <PostUploader />
    </View>
  )
}

const Header = () => (
    <View style={styles.headerContainer}>
        <TouchableOpacity>
            <Image source={require('../../assets/back.png')} style={{width: 20, height: 20}}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>NEW POST</Text>
        <Text></Text>
    </View>
)

const styles = StyleSheet.create({
  container:{
      marginHorizontal: 10,
      marginTop: 10,
  },
  headerContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText:{
     color:'white',
     fontWeight:'700',
     fontSize:20,
     marginRight: 15,
  },
});

export default AddNewPost