import React, {useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const Register = (props)=>{
    
    
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center',rowGap:59}}>
      <Text style={{alignSelf:'center',fontSize:30,fontWeight:'bold',color:'black'}}>
        Register
      </Text> 
      <View style={{width:'50%',alignSelf:'center'}}>
      <Button title='Login' onPress={()=>{props.navigation.navigate('Login')}}/>
      </View>
     </View>
  );
}

export default Register