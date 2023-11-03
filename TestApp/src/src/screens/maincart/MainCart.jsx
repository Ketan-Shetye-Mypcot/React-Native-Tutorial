import { Text, View,Image,Pressable,FlatList,Dimensions, ScrollView } from 'react-native'
import { DealOfDayList } from '../../jsons/dealOfDayList'
import ProductDetailsCard from '../../components/product-card-design-for-details'
import { useState,useEffect } from 'react'

const WINDOW_WIDTH= Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const MainCart = (props)=>{
    const data = props.route.params
    const [ couponCode,setCouponCode ] = useState(data.couponsCode)
    const changeCouponCode=(couponCode)=>{
        setCouponCode(couponCode)
    }
    const onCoupounPress=()=>{
        props.navigation.navigate('Coupons',{changeCouponCode:changeCouponCode})
    }
    
    const onCoupounCrossPress=()=>{
        setCouponCode(undefined)
    }
    

    const onProductCardPress=(productImage,productName,productOldPrice,ProductCurrPrice,ProductofferPercent)=>{
        props.navigation.navigate("ProductCardDetails",{params:{productImage,productName,productOldPrice,ProductCurrPrice,ProductofferPercent}})
    }

    const onCheckOutPress=()=>{
        props.navigation.navigate('CheckOut',{couponCode:couponCode})
    }
    const onBackArrowPress=()=>{
        props.navigation.navigate('ProductCardDetails',{params:{}})
    }
    return(
        <View style={{backgroundColor:'#F6F7F2',flex:1}}>
            <View style={{position:'absolute',top:0,backgroundColor:'white',height:(WINDOW_HEIGHT*15)/100,width:'100%',rowGap:10,padding:'4%',borderColor:'#F6F7F2'}}>
                    <View style={{flexDirection:'row'}}>
                        <Pressable style={{justifyContent:'center',width:'10%'}} onPress={()=>onBackArrowPress()}>
                            <Image source={require('../../assets/ArrowLeft.png')}/>
                        </Pressable>
                        <View style={{justifyContent:'center',alignItems:'center',width:'90%'}}><Text style={{color:'black',fontSize:24,fontWeight:'bold'}}>Cart</Text></View>
                    </View>
                    <View style={{flexDirection:'row',columnGap:10}}>
                        <View>
                            <Image source={require('../../assets/TicketSale.png')}/>
                        </View>
                        <View>
                            <View><Text style={{fontWeight:'bold',color:'black',fontSize:16}}>Free Delivery if order is more than EGP 50</Text></View>
                            <View><Text style={{color:'black',opacity:0.7,fontSize:13}}>Minimum amount to place an order is EGP 20</Text></View>
                        </View>
                    </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:(WINDOW_HEIGHT*10)/100,marginTop:(WINDOW_HEIGHT*15)/100,backgroundColor:'#F6F7F2'}}>
            <View style={{backgroundColor:'white',margin:'2%',padding:'2%',rowGap:15, borderRadius:18}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View><Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>CheckOut</Text></View>
                    <View><Text style={{color:'black',fontSize:16}}>Total Items - 1</Text></View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',columnGap:10}}>
                    <View style={{width:80,height:80,borderRadius:12,borderColor:'#FFEBBB',borderWidth:1,backgroundColor:'#FFFAEE'}}>
                        <View style={{position:'absolute',top:-7,left:-7,width:20,height:20,borderRadius:10}}>
                            <Image source={require('../../assets/RedCross.png')} style={{width:'100%',height:'100%'}}/>
                        </View>
                        <Image  source={require('../../assets/dealOfDayImages/carrots.png')} style={{width:'100%',height:'100%'}}/>
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
                            <View><Pressable style={{backgroundColor:'white'}}><Image source={require('../../assets/minus.png')} /></Pressable></View>
                            <View><Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>1</Text></View>
                            <View><Pressable style={{backgroundColor:'white'}}><Image source={require('../../assets/add.png')}/></Pressable></View>
                        </Pressable>
                    </View>
                </View>
                <View style={{width:'100%',borderWidth:1,borderColor:'#DFDFDF'}}></View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',columnGap:10}}>
                    <View style={{width:80,height:80,borderRadius:12,borderColor:'#FFEBBB',borderWidth:1,backgroundColor:'#FFFAEE'}}>
                        <View style={{position:'absolute',top:-7,left:-7,width:20,height:20,borderRadius:10}}>
                            <Image source={require('../../assets/RedCross.png')} style={{width:'100%',height:'100%'}}/>
                        </View>
                        <Image  source={require('../../assets/dealOfDayImages/carrots.png')} style={{width:'100%',height:'100%'}}/>
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
                            <View><Pressable style={{backgroundColor:'white'}}><Image source={require('../../assets/minus.png')} /></Pressable></View>
                            <View><Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>1</Text></View>
                            <View><Pressable style={{backgroundColor:'white'}}><Image source={require('../../assets/add.png')}/></Pressable></View>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor:'white',margin:'2%',padding:'4%',borderRadius:18,justifyContent:'center'}}>
                { 
                    couponCode === undefined ?
                    <Pressable style={{flexDirection:'row',justifyContent:'space-between'}} onPress={()=>onCoupounPress()}>
                        <View style={{flexDirection:'row',justifyContent:'center',columnGap:20}}>
                            <View style={{justifyContent:'center',alignItems:'center'}}><Image source={require('../../assets/coupoun.png')}/></View>
                            <View><Text style={{color:'black',fontWeight:'bold',fontSize:25,opacity:0.8}}>Use Coupouns</Text></View>
                        </View>
                        <View style={{justifyContent:'center'}}><Image source={require('../../assets/AltArrowRightBlack.png')}/></View>
                    </Pressable> :
                    <View style={{flexDirection:'row',justifyContent:'space-between'}} onPress={()=>onCoupounPress()}>
                        <View style={{flexDirection:'row',justifyContent:'center',columnGap:20}}>
                            <View style={{justifyContent:'center',alignItems:'center'}}><Image source={require('../../assets/coupoun.png')}/></View>
                            <View>
                            <View><Text style={{color:'black',fontWeight:'bold',fontSize:20,opacity:0.8}}>{couponCode}</Text></View>
                            <View><Text>Coupon Applied</Text></View>
                            </View>
                        </View>
                        <Pressable style={{justifyContent:'center'}} onPress={()=>onCoupounCrossPress()}><Image source={require('../../assets/yellowCross.png')}/></Pressable>
                    </View>
                }
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
                <View style={{width:'100%',borderWidth:1,borderColor:'#DFDFDF'}}></View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View><Text style={{color:'black',fontWeight:'bold',opacity:0.7,fontSize:16}}>Grand Total</Text></View>
                    <View><Text style={{color:'black',fontWeight:'bold',opacity:0.7,fontSize:16}}>EGP 198.90</Text></View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View><Text style={{color:'#79A400',fontWeight:'bold',opacity:0.8,fontSize:16}}>Total Savings</Text></View>
                    <View><Text style={{color:'#79A400',fontWeight:'bold',opacity:0.8,fontSize:16}}>EGP 249.50</Text></View>
                </View>
            </View>
            <View style={{rowGap:15,paddingVertical:'2%'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:'2%'}}>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',columnGap:10}}>
                    <View><Text style={{fontWeight:'bold',color:'black',fontSize:20}}>Similar Products</Text></View>
                    <View><Image source={require('../../assets/dealOfDayImages/Fire.png')}/></View>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}><Text style={{color:'#EBA500',fontWeight:'bold',fontSize:17}}>See All</Text></View>
            </View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{columnGap:20,paddingHorizontal:'2%'}}
                data={DealOfDayList}
                renderItem={({item})=>
                    <ProductDetailsCard
                    isOfferOnProduct={true}
                    percentOff='15'
                    CardWidth={(WINDOW_WIDTH*45)/100}
                    CardHeight='auto'
                    image={item.image}
                    productName={item.name}
                    productWt='500mg'
                    productPrice='EGP 199.45'
                    productOfferPrice='EGP 99.45'
                    onPress={onProductCardPress}
                    />
                    }
                keyExtractor={item=>item.id}
                />
                </View>
                </ScrollView>
                <View style={{position:'absolute',bottom:0,width:'100%',height:(WINDOW_HEIGHT*10)/100,backgroundColor:'white',justifyContent:'center'}}>
                    <Pressable style={{backgroundColor:'#EBA500',margin:'2%',padding:'2%',justifyContent:'center',alignItems:'center',borderRadius:10}} onPress={()=>onCheckOutPress()}>
                        <Text style={{color:'white',fontWeight:'bold',fontSize:23}}>
                            Proceed To Checkout
                        </Text>
                    </Pressable>
                </View>
        </View>
    )
}


export default MainCart;