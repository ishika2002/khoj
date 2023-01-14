import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { TAGS } from '../../data/tagsData';

const DropdownComponent = ({setTag}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'white' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        containerStyle={{backgroundColor:'#2B3A55', fontFamily:'Nunito-Medium'}}
        itemContainerStyle={{margin:3, height:55, fontFamily:'Nunito-Medium'}}
        itemTextStyle={{color:'white', fontSize:14, fontFamily:'Nunito-Medium'}}
        activeColor='#475b80'
        data={TAGS}
        search
        maxHeight={300}
        labelField="tagName"
        valueField="value"
        placeholder={!isFocus ? 'Select the tag' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
          setTag(item.tagName)
        }}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor:'#2B3A55',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
    color:'gray',
    fontFamily:'Nunito-Medium',
  },
  selectedTextStyle: {
    fontSize: 14,
    color:'white',
    marginLeft:5,
    fontFamily:'Nunito-Medium',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
    color:'white',
    fontFamily:'Nunito-Medium',
  },
});