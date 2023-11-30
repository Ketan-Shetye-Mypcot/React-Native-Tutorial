import React, {useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const Login = (props)=>{
    
    
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center',rowGap:59}}>
      <Text style={{alignSelf:'center',fontSize:30,fontWeight:'bold',color:'black'}}>
        Login
      </Text> 
      <View style={{width:'50%',alignSelf:'center'}}>
      <Button title='Sign In'/>
      </View>
     </View>
  );
}

export default Login