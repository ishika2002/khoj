import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { TAGS } from '../../data/tagsData';

const Tags = () => {
  return (
    <View style={{marginBottom: 20}}>
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        >
            {TAGS.map((tag, index)=>(
                <TouchableOpacity style={styles.tag}>
                    <Text style={styles.name}>{tag.tagName}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    tag:{
        backgroundColor:'#2B3A55',
        paddingBottom:5,
        paddingTop:5,
        paddingLeft:10,
        paddingRight:10,
        marginLeft:5,
        marginRight:5,
        marginTop:10,
        borderRadius:10,
    },
    name:{
        color:'white',
    },
  });

export default Tags