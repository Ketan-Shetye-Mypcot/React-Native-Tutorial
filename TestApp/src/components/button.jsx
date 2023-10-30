import React from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  Dimensions
} from 'react-native';

const width = Dimensions.get('window').width

const Button = (props)=>{
    return(
        <View>
            <Pressable style={styles.btnStyle} onPress={()=>{props.excuteFunction()}}>
                <Text style={styles.btnText}>{props.title.toUpperCase()}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    btnText:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    },
    btnStyle:{
        backgroundColor:'#1cb273',
        paddingVertical:10,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
    }
  });

export default Button;