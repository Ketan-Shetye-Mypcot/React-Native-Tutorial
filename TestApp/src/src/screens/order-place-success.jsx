import { View,Text,Pressable,Dimensions,ImageBackground,ScrollView,Image } from "react-native";
import {useState,useEffect} from 'react'
const WINDOW_WIDTH= Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const OrderSucess=()=>{
    const onMyOrdersPress=()=>{
        console.warn('helo')
    }
    return(
        <View style={{backgroundColor:'white',flex:1,justifyContent:'center',alignItems:'center'}}>
            <View></View>
            <View>
                <Text style={{color:'black',fontWeight:'bold',fontSize:22}}>
                    Order Placed Successfully
                </Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <View><Text style={{color:'#5B5B5A',fontWeight:'600'}}>Thank you</Text></View>
                <View><Text style={{color:'#5B5B5A',fontWeight:'600'}}>Your order has been placed Successfully</Text></View>
            </View>
            <View style={{flexDirection:'row',columnGap:5}}>
                <View><Text style={{color:'black',fontWeight:500,fontSize:18}}>Your Order Id :</Text></View>
                <View><Text style={{color:'black',fontWeight:'bold',fontSize:18}}>Trolley2135</Text></View>
            </View>
            <View style={{position:'absolute',bottom:0,width:'100%',height:(WINDOW_HEIGHT*10)/100,backgroundColor:'white',justifyContent:'center'}}>
                <Pressable style={{backgroundColor:'#EBA500',margin:'2%',padding:'2%',justifyContent:'center',alignItems:'center',borderRadius:10}} onPress={()=>onMyOrdersPress()}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:23}}>
                        My Orders
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}
export default OrderSucess