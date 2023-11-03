import { View,Text,Pressable,Dimensions,ImageBackground,ScrollView,Image } from "react-native";
import {useState} from 'react'
import RadioButton from "../components/radio-btn";

const WINDOW_WIDTH= Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const CheckOut=(props)=>{
    const onBackArrowPress=()=>{
        props.navigation.goBack()
    }
    const [COD,setCOD] = useState(true)
    const [card,setCard] =useState(false)
    const onCODPress=()=>{
        setCOD(true)
        setCard(false)
    }
    const onCardPress=()=>{
        setCard(true)
        setCOD(false)
    }
    
    const [sixToSevenAm, setSixToSevenAm]=  useState(false)
    const [eightToNineAm, setEightToNineAm]=  useState(false)
    const [fiveToSixPm, setFiveToSixPm]=  useState(false)
    const [sevenToEightPm, setSevenToEightPm]=  useState(false)
    const onPressSixSeven=()=>{
        setSixToSevenAm(true)
        setEightToNineAm(false)
        setFiveToSixPm(false)
        setSevenToEightPm(false)
    }
    const onPressEightNine=()=>{
        setSixToSevenAm(false)
        setEightToNineAm(true)
        setFiveToSixPm(false)
        setSevenToEightPm(false)
    }
    const onPressFiveSix=()=>{
        setSixToSevenAm(false)
        setEightToNineAm(false)
        setFiveToSixPm(true)
        setSevenToEightPm(false)
    }
    const onPressSevenEight=()=>{
        setSixToSevenAm(false)
        setEightToNineAm(false)
        setFiveToSixPm(false)
        setSevenToEightPm(true)
    }

    const onAddAddressPress=()=>{
        props.navigation.navigate('Address');
    }
    return(
        <View style={{backgroundColor:'#F6F7F2',flex:1}}>
            <View style={{position:'absolute',top:0,backgroundColor:'white',height:(WINDOW_HEIGHT*15)/100,width:'100%',rowGap:10,padding:'4%',borderColor:'#F6F7F2'}}>
                    <View style={{flexDirection:'row'}}>
                        <Pressable style={{justifyContent:'center',width:'10%'}} onPress={()=>onBackArrowPress()}>
                            <Image source={require('../assets/ArrowLeft.png')}/>
                        </Pressable>
                        <View style={{justifyContent:'center',alignItems:'center',width:'90%'}}><Text style={{color:'black',fontSize:24,fontWeight:'bold'}}>CheckOut</Text></View>
                    </View>
                    <View style={{flexDirection:'row',columnGap:10}}>
                        <View>
                            <Image source={require('../assets/TicketSale.png')}/>
                        </View>
                        <View>
                            <View><Text style={{fontWeight:'bold',color:'black',fontSize:16}}>Free Delivery if order is more than EGP 50</Text></View>
                            <View><Text style={{color:'black',opacity:0.7,fontSize:13}}>Minimum amount to place an order is EGP 20</Text></View>
                        </View>
                    </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:(WINDOW_HEIGHT*15)/100,marginBottom:(WINDOW_HEIGHT*10)/100,backgroundColor:'#F6F7F2'}}>
            <View style={{backgroundColor:'white',margin:'2%',padding:'2%',rowGap:15, borderRadius:18}}>
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
                        <Pressable style={{flexDirection:'row',backgroundColor:'#F3F3F3',justifyContent:'space-evenly',alignItems:'center',borderRadius:4,height:30}}>
                            <View><Pressable style={{backgroundColor:'white'}}><Image source={require('../assets/minus.png')} /></Pressable></View>
                            <View><Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>0</Text></View>
                            <View><Pressable style={{backgroundColor:'white'}}><Image source={require('../assets/add.png')}/></Pressable></View>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor:'white',margin:'2%',padding:'4%',borderRadius:18,justifyContent:'center'}}>
                <Pressable style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',justifyContent:'center',columnGap:20}}>
                        <View style={{justifyContent:'center',alignItems:'center'}}><Image source={require('../assets/coupoun.png')}/></View>
                        <View><Text style={{color:'black',fontWeight:'bold',fontSize:25,opacity:0.8}}>Use Coupouns</Text></View>
                    </View>
                    <View style={{justifyContent:'center'}}><Image source={require('../assets/AltArrowRightBlack.png')}/></View>
                </Pressable>
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
            <View style={{backgroundColor:'white',margin:'2%',padding:'2%',borderRadius:18,rowGap:20}}>
                <View><Text style={{fontWeight:'bold',color:'black',fontSize:20}}>Address</Text></View>
                <View>
                    <Pressable style={{flexDirection:'row',backgroundColor:'#FFFBF1',borderWidth:2,borderColor:'#EBA500',justifyContent:'center',alignItems:'center',borderRadius:7,borderStyle:'dashed'}} onPress={()=>onAddAddressPress()}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('../assets/Address.png')}/>
                        </View>
                        <View>
                            <Text style={{color:'#EBA500',fontWeight:'bold',fontSize:20,padding:'2%'}}>Add Address</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
            <View style={{backgroundColor:'white',margin:'2%',padding:'2%',borderRadius:18,rowGap:20}}>
                <View><Text style={{fontWeight:'bold',color:'black',fontSize:20}}>Time Slot</Text></View>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <Pressable style={{backgroundColor:sixToSevenAm ? '#EBA500': '#FEFAF2',padding:'3%',borderRadius:15}} onPress={()=>onPressSixSeven()}><Text style={{color:sixToSevenAm ? 'white': 'black',fontWeight:'bold',opacity:sixToSevenAm ? 1: 0.7,fontSize:16}}>6:00 am to 7:00 am</Text></Pressable>
                    <Pressable style={{backgroundColor:eightToNineAm ? '#EBA500': '#FEFAF2',padding:'3%',borderRadius:15}} onPress={()=>onPressEightNine()}><Text style={{color:eightToNineAm ? 'white': 'black',fontWeight:'bold',opacity:eightToNineAm ? 1: 0.7,fontSize:16}}>8:00 am to 9:00 am</Text></Pressable>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <Pressable style={{backgroundColor:fiveToSixPm ? '#EBA500': '#FEFAF2',padding:'3%',borderRadius:15}} onPress={()=>onPressFiveSix()}><Text style={{color:fiveToSixPm ? 'white': 'black',fontWeight:'bold',opacity:fiveToSixPm ? 1: 0.7,fontSize:16}}>5:00 pm to 6:00 pm</Text></Pressable>
                    <Pressable style={{backgroundColor:sevenToEightPm ? '#EBA500': '#FEFAF2',padding:'3%',borderRadius:15}} onPress={()=>onPressSevenEight()}><Text style={{color:sevenToEightPm ? 'white': 'black',fontWeight:'bold',opacity:sevenToEightPm ? 1: 0.7,fontSize:16}}>7:00 pm to 8:00 pm</Text></Pressable>
                </View>
            </View>
            <View style={{backgroundColor:'white',margin:'2%',padding:'2%',borderRadius:18,rowGap:20}}>
                <View><Text style={{fontWeight:'bold',color:'black',fontSize:20}}>Payment Method</Text></View>
                <View style={{flexDirection:'row',paddingHorizontal:'2%',columnGap:30}}>
                    <View style={{flexDirection:'row',columnGap:8}}>
                        <Pressable style={{justifyContent:'center',alignItems:'center'}}><RadioButton isRadioButtonPressed={COD} itemId={1} onPress={onCODPress}/></Pressable>
                        <View style={{justifyContent:'center',alignItems:'center'}}><Text style={{color:'black',fontWeight:'bold',opacity:0.7,fontSize:16}}>Cash On Delivery</Text></View>
                    </View>
                    <View style={{flexDirection:'row',columnGap:8}}>
                        <Pressable  style={{justifyContent:'center',alignItems:'center'}}><RadioButton isRadioButtonPressed={card} itemId={2} onPress={onCardPress}/></Pressable>
                        <View style={{justifyContent:'center',alignItems:'center'}}><Text style={{color:'black',fontWeight:'bold',opacity:0.7,fontSize:16}}>Card</Text></View>
                    </View>
                </View>
            </View>
            </ScrollView>
            <View style={{position:'absolute',bottom:0,width:'100%',height:(WINDOW_HEIGHT*10)/100,backgroundColor:'white',justifyContent:'center'}}>
                <Pressable style={{backgroundColor:'#EBA500',margin:'2%',padding:'2%',justifyContent:'center',alignItems:'center',borderRadius:10}} onPress={()=>onCheckOutPress()}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:23}}>
                        Place Order
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default CheckOut