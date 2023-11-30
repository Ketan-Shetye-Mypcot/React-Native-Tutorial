import React, {useState, useEffect} from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import dynamicLinks from '@react-native-firebase/dynamic-links'

const Home = ()=>{
  const navigation = useNavigation();
  const [deepLink,setDeepLink] =useState('')
  console.log(deepLink)
  const buildDeepLink=async()=>{
    const link = await dynamicLinks().buildLink({
      link: 'https://ketanshetye.netlify.app/',
      domainUriPrefix: 'https://deeplinklearnketan.page.link',
      androidPackageName: 'com.testapp',
      // iosBundleId: 'com.example.ios', // Replace with your iOS bundle ID
      socialMetaTagParameters: {
        ogTitle: 'This is Test App Link',
        ogDescription: 'This link leads to login page of Test App'
        // ogImage:
      },
      analytics: {
        campaign: 'banner'
      },
    });
    setDeepLink(link);
  }

  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center',rowGap:59}}>
      <Text style={{alignSelf:'center',fontSize:30,fontWeight:'bold',color:'black'}}>
        Home
      </Text> 
      <Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold',color:'black'}}>
        {deepLink}
      </Text> 
      <View style={{width:'50%',alignSelf:'center'}}>
      <Button title='Generate Deep Link' onPress={buildDeepLink}/>
      </View>
      <View style={{width:'50%',alignSelf:'center'}}>
      <Button title='Register' onPress={()=>{navigation.navigate('Register')}}/>
      </View>
     </View>
  );
}

export default Home