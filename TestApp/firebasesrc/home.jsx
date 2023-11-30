import React, {useState, useEffect} from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = (props)=>{
  
 
  const navigation = useNavigation()
    
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center',rowGap:59}}>
      <Text style={{alignSelf:'center',fontSize:30,fontWeight:'bold',color:'black'}}>
        Home
      </Text> 
      <View style={{width:'50%',alignSelf:'center'}}>
      <Button title='Register' onPress={()=>{navigation.navigate('Register')}}/>
      </View>
     </View>
  );
}

export default Home