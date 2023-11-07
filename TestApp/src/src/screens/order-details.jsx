import { View,Text,Pressable,Dimensions,ImageBackground,ScrollView,Image } from "react-native";
import {useState,useEffect} from 'react'
const WINDOW_WIDTH= Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const OrderDetails =(props)=>{
    const onConfirmPress=()=>{
        props.navigation.navigate('OrderSucess')
    }
    return(
        <View style={{backgroundColor:'#F6F7F2',flex:1}}>
            <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:(WINDOW_HEIGHT*10)/100,backgroundColor:'#F6F7F2'}}>
            <View style={{backgroundColor:'white',margin:'2%',padding:'2%',rowGap:15, borderRadius:18}}>
                
                <View style={{backgroundColor:'#F8F8F8',width:'25%',justifyContent:'center',alignItems:'center',borderRadius:12}}><Text style={{color:'#5B5B5B',fontWeight:'300'}}>#TRLY200</Text></View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View><Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>CheckOut</Text></View>
                    <View><Text style={{color:'black',fontSize:16}}>Total Items - 1</Text></View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',columnGap:10}}>
                    <View style={{width:80,height:80,borderRadius:12,borderColor:'#FFEBBB',borderWidth:1,backgroundColor:'#FFFAEE'}}>
                        <Image  source={require('../assets/dealOfDayImages/carrots.png')} style={{width:'100%',height:'100%'}}/>
                    </View>
                    <View style={{rowGap:5}}>
                        <View><Text style={{color:'black',fontWeight:'bold',fontSize:18,opacity:0.8}}>Orange Carrot</Text></View>
                        <View><Text>6 pcs  (Approx 1.2kg)</Text></View>
                        <View style={{flexDirection:'row',columnGap:10,justifyContent:'center',alignItems:'center'}}>
                            <View><Text style={{textDecorationLine:'line-through'}}>EGP 199.45</Text></View>
                            <View style={{flexDirection:'row',columnGap:5,justifyContent:'center',alignItems:'center'}}>
                                <View><Text style={{color:'black'}}>EGP</Text></View>
                                <View><Text style={{color:'black',fontWeight:'bold',fontSize:18}}>99.45</Text></View>
                            </View>
                        </View>
                    </View>
                    </View>
                    <View style={{justifyContent:'flex-end',width:70}}>
                        <View style={{justifyContent:'flex-end',width:'100%',flexDirection:'row'}}><Text>x2</Text></View>
                    </View>
                </View>
                <View style={{width:'100%',borderWidth:1,borderColor:'#DFDFDF'}}></View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',columnGap:10}}>
                    <View style={{width:80,height:80,borderRadius:12,borderColor:'#FFEBBB',borderWidth:1,backgroundColor:'#FFFAEE'}}>
                        <Image  source={require('../assets/dealOfDayImages/carrots.png')} style={{width:'100%',height:'100%'}}/>
                    </View>
                    <View style={{rowGap:5}}>
                        <View><Text style={{color:'black',fontWeight:'bold',fontSize:18,opacity:0.8}}>Orange Carrot</Text></View>
                        <View><Text>6 pcs  (Approx 1.2kg)</Text></View>
                        <View style={{flexDirection:'row',columnGap:10,justifyContent:'center',alignItems:'center'}}>
                            <View><Text style={{textDecorationLine:'line-through'}}>EGP 199.45</Text></View>
                            <View style={{flexDirection:'row',columnGap:5,justifyContent:'center',alignItems:'center'}}>
                                <View><Text style={{color:'black'}}>EGP</Text></View>
                                <View><Text style={{color:'black',fontWeight:'bold',fontSize:18}}>99.45</Text></View>
                            </View>
                        </View>
                    </View>
                    </View>
                    <View style={{justifyContent:'flex-end',width:70}}>
                        <View style={{justifyContent:'flex-end',width:'100%',flexDirection:'row'}}><Text>x2</Text></View>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor:'white',margin:'2%',padding:'2%',borderRadius:18,rowGap:10}}>
                <View><Text style={{fontWeight:'bold',color:'black',fontSize:20}}>Billing Details</Text></View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View><Text style={{color:'black',fontWeight:'bold',opacity:0.7,fontSize:16}}>Total Items - 2</Text></View>
                    <View><Text style={{color:'black',fontWeight:'bold',opacity:0.7,fontSize:16}}>EGP 198.90</Text></View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View><Text style={{color:'black',fontWeight:'bold',opacity:0.7,fontSize:16}}>Delivery charge</Text></View>
                    <View style={{flexDirection:'row',columnGap:10}}>
                        <View style={{justifyContent:'flex-end'}}><Text style={{color:'black',fontWeight:'bold',opacity:0.5,fontSize:12,textDecorationLine:'line-through'}}>EGP 49.50</Text></View>
                        <View><Text style={{color:'#79A400',fontWeight:'bold',opacity:0.8,fontSize:16}}>Free</Text></View>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View><Text style={{color:'black',fontWeight:'bold',opacity:0.7,fontSize:16}}>Coupoun Discount</Text></View>
                    <View><Text style={{color:'#79A400',fontWeight:'bold',opacity:0.7,fontSize:16}}>EGP 50</Text></View>
                </View>
                <View style={{width:'100%',borderWidth:0.7,borderColor:'#DFDFDF'}}></View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View><Text style={{color:'black',fontWeight:'bold',opacity:0.7,fontSize:16}}>Grand Total</Text></View>
                    <View><Text style={{color:'black',fontWeight:'bold',opacity:0.7,fontSize:16}}>EGP 198.90</Text></View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View><Text style={{color:'#79A400',fontWeight:'bold',opacity:0.8,fontSize:16}}>Total Savings</Text></View>
                    <View><Text style={{color:'#79A400',fontWeight:'bold',opacity:0.8,fontSize:16}}>EGP 249.50</Text></View>
                </View>
            </View>
            <View style={{backgroundColor:'white',margin:'2%',padding:'2%',borderRadius:18,rowGap:15}}>
            <View><Text style={{fontWeight:'bold',color:'black',fontSize:20}}>Address</Text></View>
            
            <View>
                <Text>C6/7, Vivina Co Op Hsg Ltd, Ma Rd, Andheri(w) Mumbai, Maharashtra</Text>
            </View>
        </View>
            <View style={{backgroundColor:'white',margin:'2%',padding:'4%',borderRadius:18,justifyContent:'space-between',flexDirection:'row'}}>
                <View><Text style={{color:'black',fontWeight:'bold',fontSize:17}}>Time Slot</Text></View>
                <View><Text style={{color:'#EBA500',fontSize:17,fontWeight:'bold'}}>7:00 AM to 9:00 AM</Text></View>  
            </View>
        <View style={{backgroundColor:'white',margin:'2%',padding:'4%',borderRadius:18,justifyContent:'space-between',flexDirection:'row'}}>
        <View><Text style={{color:'black',fontWeight:'bold',fontSize:17}}>Payment</Text></View>
                <View><Text style={{color:'#EBA500',fontSize:17,fontWeight:'bold'}}>Cash On Delievry</Text></View>
            </View>
            </ScrollView>
            <View style={{position:'absolute',bottom:0,width:'100%',height:(WINDOW_HEIGHT*10)/100,backgroundColor:'white',justifyContent:'center'}}>
                <Pressable style={{backgroundColor:'#EBA500',margin:'2%',padding:'2%',justifyContent:'center',alignItems:'center',borderRadius:10}} onPress={()=>onConfirmPress()}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:23}}>
                        Confirm
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}
export default OrderDetails;