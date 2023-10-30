
import {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,Pressable
} from 'react-native';

const WordButton = (props)=>{
    return(
        <View>
            <Pressable onPress={()=>{props.executeFunction()}}><Text style={{color:'#1cb273',fontWeight:'bold',fontSize:14}}>{props.title}</Text></Pressable>
        </View>
    )
}

export default WordButton