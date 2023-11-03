import { useState } from 'react'
import {View,Text,Image,Pressable,ImageBackground,ScrollView,FlatList, Dimensions} from 'react-native'
import FastImage from 'react-native-fast-image'

import { DealOfDayList } from '../jsons/dealOfDayList'
import { Carrot } from '../jsons/carrot'
import ProductDetailsCard from '../components/product-card-design-for-details'

const WINDOW_WIDTH= Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const ProductCardDetails=(props)=>{
    const data = props.route.params.params
    const [productCurrPrice,setProductCurrPrice] = useState(99.45)
    const [cart,setCart]= useState(true)
    const [qty,setQty] = useState(0)
    const [currIndex,setCurrIndex] = useState(0)
    const incQty=()=>{
        setQty(qty+1)
        if(qty==0){
            setProductCurrPrice(99.45)
        }else{
            setProductCurrPrice(productCurrPrice*qty)
        }
    }
    const decQty=()=>{
        if(qty==0){
            setCart(true)
        }else{
            setQty(qty-1)
        }
    }
    const notShowCart=()=>{
        setCart(false)
    }
    const onProductCardPress=(productImage,productName,productOldPrice,ProductCurrPrice,ProductofferPercent)=>{
        props.navigation.navigate("ProductCardDetails",{params:{productImage,productName,productOldPrice,ProductCurrPrice,ProductofferPercent}})
    }
    const onProductImagePress=(productImage)=>{
        props.navigation.navigate("ProductImage",{params:{productImage}})
    }
    const onViewCartPress=()=>{
        if(qty==0){
            return
        }
        props.navigation.navigate("BottomTabStack",{screen:'Cart',params:{productImage:data.productImage,productName:data.productName}})
        
    }
    return(
        <View style={{flex:1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop:'5%',rowGap:20,marginBottom:'20%'}}>
            <View style={{backgroundColor:'white',rowGap:20,paddingHorizontal:'3%',height:(WINDOW_HEIGHT*55)/100}}>
                <Pressable style={{width:'100%',height:'48%'}} onPress={()=>onProductImagePress(data.productImage)}>
                <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={
                    [
                        {
                            id:1,
                            image:require('../assets/dealOfDayImages/carrots.png')
                        },
                        {
                            id:2,
                            image:require('../assets/dealOfDayImages/carrots.png')
                        },
                        {
                            id:3,
                            image:require('../assets/dealOfDayImages/carrots.png')
                        }
                    ]
                }
                pagingEnabled={true}
                snapToAlignment='center'
                onScroll={(event)=>{
                    const x=event.nativeEvent.contentOffset.x;
                    setCurrIndex((x/WINDOW_WIDTH).toFixed(0))
                }}
                renderItem={({item})=>
                <View style={{width:WINDOW_WIDTH,justifyContent:'center',alignItems:'center',marginTop:'4%'}}>
                    <Image source={item.image}  style={{width:'50%',height:'100%'}}/>
                </View>
                }
                keyExtractor={item=>item.id}
                />
                <View>
                    <RenderDot currIndex={currIndex}/>
                </View>
                </Pressable>
                <View style={{backgroundColor:'#EBF2D9',width:'25%',justifyContent:'center',alignItems:'center',borderRadius:10}}>
                    <Text style={{color:'#79A400',padding:5,fontWeight:'bold'}}>Carbide Free</Text>
                </View>
                <View >
                    <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>Orange Carrot</Text>
                </View>
                <View >
                    <Text style={{color:'grey',fontSize:16}}>6pcs (Approx 1.2 kg)</Text>
                </View>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                    <View>
                        <View>
                            <Text style={{textDecorationLine:'line-through',fontSize:12}}>EGP 249.50</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <View><Text style={{fontWeight:'500',color:'black',paddingRight:3}}>EGP</Text></View>
                            <View><Text style={{fontSize:20,fontWeight:'bold',color:'black',paddingBottom:3}}>99</Text></View>
                            <View><Text style={{fontWeight:'500',color:'black'}}>.45</Text></View>
                        </View>
                    </View>
                    <View style={{justifyContent:'flex-end',width:'18%',paddingBottom:'0.5%'}}>
                        <View style={{overflow:'hidden',borderRadius:3}}>
                            <ImageBackground source={require('../assets/dealOfDayImages/dealsoffer.png')} style={{width:'100%'}}>
                                <Text style={{color:'white',fontSize:14,paddingLeft:5}}>{data.ProductofferPercent}% Off</Text>
                            </ImageBackground>
                        </View>
                        
                    </View>
                    {
                        cart ? 
                        <Pressable style={{backgroundColor:'#EBA500',width:'40%',flexDirection:'row',justifyContent:'center',alignItems:'center',columnGap:5,borderRadius:10}} onPress={notShowCart}>
                            <View><Image source={require('../assets/CartPlus.png')}/></View>
                            <View><Text style={{color:'white',fontSize:20}}>Add to cart</Text></View>
                        </Pressable> :
                        <Pressable style={{backgroundColor:'#F3F3F3',width:'30%',flexDirection:'row',justifyContent:'space-around',alignItems:'center',borderRadius:10}}>
                            <View><Pressable onPress={()=>decQty()} style={{backgroundColor:'white',width:23,height:23,justifyContent:'center',alignItems:'center'}}><Image source={require('../assets/minus.png')} resizeMode='cover' style={{width:20}} /></Pressable></View>
                            <View><Text style={{fontWeight:'bold',fontSize:20}}>{qty}</Text></View>
                            <View><Pressable onPress={()=>incQty()} style={{backgroundColor:'white',width:23,height:23,justifyContent:'center',alignItems:'center'}}><Image source={require('../assets/add.png')} resizeMode='cover' style={{width:20}} /></Pressable></View>
                        </Pressable>
                    }
                </View>
            </View>
            <View style={{backgroundColor:'white',marginHorizontal:'3%',borderRadius:10,rowGap:5,padding:'3%'}}>
                <View>
                    <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>About Product</Text>
                </View>
                <View style={{justifyContent:'space-evenly'}}>
                    <View style={{flexDirection:'row'}}>
                    <View style={{width:5,height:5,borderRadius:5/2,backgroundColor:'grey',marginTop:6,marginRight:2}}></View>
                        <View><Text>Description: dolor sit amet consectetur adipisicing elit. Doloremque, fugit repellendus! Eum eius nemo saepe animi doloremque ratione voluptates rerum est, excepturi quam, assumenda iure natus inventore ullam fugit? Accusantium?</Text></View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:5,height:5,borderRadius:5/2,backgroundColor:'grey',marginTop:6,marginRight:2}}></View>
                        <View><Text>Shelf Life: 7 days</Text></View>
                    </View>
                </View>
            </View>
            <View style={{rowGap:15}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:'3%'}}>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',columnGap:10}}>
                    <View><Text style={{fontWeight:'bold',color:'black',fontSize:20}}>Similar Products</Text></View>
                    <View><Image source={require('../assets/dealOfDayImages/Fire.png')}/></View>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}><Text style={{color:'#EBA500',fontWeight:'bold',fontSize:17}}>See All</Text></View>
            </View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{columnGap:20,paddingHorizontal:'3%'}}
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
                <View style={{rowGap:15}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:'3%'}}>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',columnGap:10}}>
                    <View><Text style={{fontWeight:'bold',color:'black',fontSize:20}}>You May Also Like</Text></View>
                    <View><Image source={require('../assets/dealOfDayImages/Fire.png')}/></View>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}><Text style={{color:'#EBA500',fontWeight:'bold',fontSize:17}}>See All</Text></View>
            </View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{columnGap:20,paddingHorizontal:'3%'}}
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
        </View>
        </ScrollView>
        <View style={{backgroundColor:'white',position:'absolute',bottom:0,width:'100%',height:'10%',justifyContent:'center',alignItems:'center'}}>
            {
                cart ?
            <Pressable style={{flexDirection:'row',width:'90%',columnGap:10,alignItems:'center',justifyContent:'center',borderWidth:2,height:'70%',borderColor:'#EBA500',borderRadius:5,backgroundColor:'#FEFAF2',elevation:2}}>
                <View><Image source={require('../assets/CartCheck.png')}/></View>
                <View><Text style={{color:'#EBA500',fontWeight:'bold',fontSize:20,opacity:0.9}}>View Cart</Text></View>
            </Pressable> :
            <Pressable style={{flexDirection:'row',width:'90%',columnGap:10,alignItems:'center',justifyContent:'space-between',height:'82%',borderRadius:5,backgroundColor:'#FEFAF2',elevation:2.5,backgroundColor:'#EBA500',paddingHorizontal:'2%'}} onPress={()=>onViewCartPress()}>
                <View style={{flexDirection:'row',columnGap:10}}>
                    <View style={{width:40,height:40,backgroundColor:'white',borderRadius:20}}>
                        <Image source={require('../assets/dealOfDayImages/carrots.png')} style={{width:'100%',height:'100%'}}/>
                    </View>
                    <View>
                        <View><Text style={{color:'white',fontSize:12}}>Total Items : {qty}</Text></View>
                        <View style={{flexDirection:'row',columnGap:5}}>
                            <View><Text style={{color:'white',fontWeight:'bold',fontSize:17}}>EGP {99.45 * qty}</Text></View>
                            <View><Text style={{textDecorationLine:'line-through',color:'white',fontSize:12}}>EGP 199.45</Text></View>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',columnGap:5}}>
                    <View><Text style={{color:'white',fontWeight:'bold',fontSize:18,paddingBottom:'0.3%'}}>View Cart</Text></View>
                    <View style={{justifyContent:'center'}}><Image source={require('../assets/AltArrowRight.png')}/></View>
                </View>
            </Pressable>
            }
        </View>
        </View>
    )
}

const RenderDot=(props)=>{
    return(
        <View style={{flexDirection:'row',columnGap:8,justifyContent:'center',paddingTop:20}}>
            {
                Carrot.map((item,index)=>
                props.currIndex == index ?
                <View key={index} style={{width:10,height:10,backgroundColor:'#EBA500'}}></View> :
                <View key={index} style={{width:10,height:10,borderRadius:5,backgroundColor:'#FDEBC1'}}></View>
                )
            }
        </View>
    )
}

export default ProductCardDetails