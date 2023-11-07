

import { View,Text,Pressable,Dimensions,ImageBackground,ScrollView,Image } from "react-native";
import {useState} from 'react'
import Add from "../components/add";
import Pen from "../components/pen";
import Bin from "../components/bin";

const WINDOW_WIDTH= Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const AddressCard=(props)=>{
    
    return(
        <View>
            {
                props.isAddressCardPressed ?

            <Pressable style={{borderColor:'#79A400',borderWidth:1,borderRadius:15,width:(WINDOW_WIDTH*96)/100,height:(WINDOW_HEIGHT*25)/100,justifyContent:'space-around',padding:'2.5%',margin:'2%'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{justifyContent:'center'}}><Text style={{color:'black',fontWeight:'400',fontSize:18}}>Home</Text></View>
                    <View style={{justifyContent:'center'}}><Pen/></View>
                </View>
                <View>
                    <Text style={{color:'#5D5D5D'}}>+249 12345678</Text>
                </View>
                <View>
                    <Text style={{color:'#5D5D5D'}}>C6/7, Vivina Co Op Hsg Ltd, Ma Rd, Andheri(w) Mumbai, Maharashtra</Text>
                </View>
                {
                props.isDefault ?
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{backgroundColor:'#F8FAF2',padding:10,borderRadius:13,width:'25%',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#79A400',fontWeight:'400'}}>Default</Text>
                </View>
                <View style={{justifyContent:'center'}}>
                    <Bin/>
                </View>
            </View>:
            <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
            <View style={{justifyContent:'center'}}>
                <Bin/>
            </View>
            </View>
            }
            </Pressable>:
            <Pressable style={{borderRadius:15,width:(WINDOW_WIDTH*96)/100,height:(WINDOW_HEIGHT*25)/100,justifyContent:'space-around',padding:'2.5%',margin:'2%',elevation:10,shadowColor:'#F8F8F8'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{justifyContent:'center'}}><Text style={{color:'black',fontWeight:'400',fontSize:18}}>Work</Text></View>
                <View style={{justifyContent:'center'}}><Pen/></View>
            </View>
            <View>
                <Text style={{color:'#5D5D5D'}}>+249 12345678</Text>
            </View>
            <View>
                <Text style={{color:'#5D5D5D'}}>C6/7, Vivina Co Op Hsg Ltd, Ma Rd, Andheri(w) Mumbai, Maharashtra</Text>
            </View>
            {
                props.isDefault ?
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{backgroundColor:'#F8FAF2',padding:10,borderRadius:13,width:'25%',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#79A400',fontWeight:'400'}}>Default</Text>
                </View>
                <View style={{justifyContent:'center'}}>
                    <Bin/>
                </View>
            </View>:
            <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
            <View style={{justifyContent:'center'}}>
                <Bin/>
            </View>
            </View>
            }
        </Pressable>
            }
        </View>
    )
}
export default AddressCard