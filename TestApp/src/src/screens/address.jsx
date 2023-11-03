

import { View,Text,Pressable,Dimensions,ImageBackground,ScrollView,Image } from "react-native";
import {useState} from 'react'
import Add from "../components/add";

const WINDOW_WIDTH= Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const Address=(props)=>{
    const onApplyPress=()=>{
        console.warn('hello')
    }
    const onAddPress=()=>{
        props.navigation.navigate('AddAddress')
    }
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
            <ScrollView showsVerticalScrollIndicator={false}>

            </ScrollView>
            <Pressable style={{backgroundColor:'#EBA500',width:50,height:50,borderRadius:25,justifyContent:'center',alignItems:'center',position:'absolute',right:15,bottom:(WINDOW_HEIGHT*10)/100}} onPress={()=>onAddPress()}>
                <Add/>
            </Pressable>
            <View style={{position:'absolute',bottom:0,width:'100%',height:(WINDOW_HEIGHT*10)/100,backgroundColor:'white',justifyContent:'center'}}>
                    <Pressable style={{backgroundColor:'#EBA500',margin:'2%',padding:'2%',justifyContent:'center',alignItems:'center',borderRadius:10}} onPress={()=>onApplyPress()}>
                        <Text style={{color:'white',fontWeight:'bold',fontSize:23}}>
                            Apply
                        </Text>
                    </Pressable>
                </View>
        </View>
    )
}
export default Address