import React from 'react';
import { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  Dimensions,
  View,
  Text
} from 'react-native';

const width = Dimensions.get('window').width
let errorShown = false
const InputTextBox = (props) => {
  const [focusColor, setFocusColor] = useState("#eee")
  if(props.showErrorMsg){
    errorShown=true
  }
  return (
    <View >
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={(text) => props.executeFunction(text)}
        onFocus={() => {
          setFocusColor('#1cb273')
        }}
        onBlur={() => {
          setFocusColor('#eee')
        }}
        style={[styles.input, { borderColor: focusColor }]}
      />
      {
        props.showErrorMsg ?
        <Text style={styles.errorMsg}>{props.errorMsg}</Text> :
        null
      }
      </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'center',
    borderRadius: 8,
    marginBottom : errorShown ? 0 : null
  },
  errorMsg: {
    color: 'red',
    paddingLeft: 8,
    marginTop: 0,
    fontSize: 15
  },
});

export default InputTextBox;
