import { View,Text,Pressable,Dimensions,ImageBackground,ScrollView,Image } from "react-native";
import FastImage from "react-native-fast-image";
import {useState,useEffect} from 'react'
const WINDOW_WIDTH= Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const OrderSucess=()=>{
    const onMyOrdersPress=()=>{
        console.warn('helo')
    }
    return(
        <View style={{backgroundColor:'white',flex:1,justifyContent:'center',alignItems:'center',rowGap:50}}>
            <View style={{width:'80%',height:'40%'}}>
                <FastImage source={require('../assets/Isolation_Mode.png')} resizeMode="center" style={{width:'100%',height:'100%'}}/>
            </View>
            <View style={{rowGap:20}}>
            <View>
                <Text style={{color:'black',fontSize:22,fontFamily:'HindMadurai-SemiBold'}}>
                    Order Placed Successfully
                </Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <View><Text style={{color:'#5B5B5A',fontWeight:'600',fontFamily:'HindMadurai-Regular'}}>Thank you</Text></View>
                <View><Text style={{color:'#5B5B5A',fontWeight:'600',fontFamily:'HindMadurai-Regular'}}>Your order has been placed Successfully</Text></View>
            </View>
            <View style={{flexDirection:'row',columnGap:5,justifyContent:'center'}}>
                <View><Text style={{color:'black',fontWeight:500,fontSize:18,fontFamily:'HindMadurai-Mediium'}}>Your Order Id :</Text></View>
                <View><Text style={{color:'black',fontWeight:'bold',fontSize:18,fontFamily:'HindMadurai-SemiBold'}}>Trolley2135</Text></View>
            </View>
            </View>
            <View style={{position:'absolute',bottom:0,width:'100%',height:(WINDOW_HEIGHT*10)/100,backgroundColor:'white',justifyContent:'center'}}>
                <Pressable style={{backgroundColor:'#EBA500',margin:'2%',padding:'2%',justifyContent:'center',alignItems:'center',borderRadius:10}} onPress={()=>onMyOrdersPress()}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:23,fontFamily:'HindMadurai-SemiBold'}}>
                        My Orders
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}
export default OrderSucess