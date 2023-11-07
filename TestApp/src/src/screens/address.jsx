

import { View,Text,Pressable,Dimensions,ImageBackground,ScrollView,Image } from "react-native";
import {useState} from 'react'
import Add from "../components/add";

import AddressCard from "../components/address-card";

const WINDOW_WIDTH= Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const Address=(props)=>{
    const address = 'C6/7, Vivina Co Op Hsg Ltd, Ma Rd, Andheri(w) Mumbai, Maharashtra'
    const onApplyPress=()=>{
        props.navigation.navigate('CheckOut',{params:{address}})
    }
    const onAddPress=()=>{
        props.navigation.navigate('AddAddress')
    }
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
            <View>
                <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>Select Address</Text>
            </View>
            <AddressCard isAddressCardPressed={true} isDefault={true}/>
            <AddressCard isAddressCardPressed={false} isDefault={false}/>
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