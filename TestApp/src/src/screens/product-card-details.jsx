import { useState } from 'react'
import {View,Text,Image,Pressable,ImageBackground,ScrollView} from 'react-native'
import FastImage from 'react-native-fast-image'

const ProductCardDetails=(props)=>{
    const data = props.route.params.params
    const [cart,setCart]= useState(true)
    const [qty,setQty] = useState(0)
    const showCart=()=>{
        setCart(true)
    }
    const notShowCart=()=>{
        setCart(false)
    }
    return(
        <View style={{marginVertical:20,rowGap:10}}>
            <View style={{backgroundColor:'white',rowGap:10,paddingVertical:20,paddingHorizontal:'3%'}}>
                <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <Image source={data.productImage}  />
                </View>
                <View style={{backgroundColor:'#EBF2D9',width:'25%',justifyContent:'center',alignItems:'center',borderRadius:10}}>
                    <Text style={{color:'#79A400',padding:5,fontWeight:'bold'}}>Carbide Free</Text>
                </View>
                <View >
                    <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>{data.productName}</Text>
                </View>
                <View >
                    <Text style={{color:'grey',fontSize:16}}>6pcs (Approx 1.2 kg)</Text>
                </View>
                <View style={{flexDirection:'row',width:'100%',columnGap:33}}>
                    <View>
                        <View>
                            <Text style={{textDecorationLine:'line-through',fontSize:12}}>{data.productOldPrice}</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <View><Text style={{fontWeight:'500',color:'black',paddingRight:3}}>EGP</Text></View>
                            <View><Text style={{fontSize:20,fontWeight:'bold',color:'black',paddingBottom:3}}>99</Text></View>
                            <View><Text style={{fontWeight:'500',color:'black'}}>.45</Text></View>
                        </View>
                    </View>
                    <View style={{justifyContent:'flex-end',width:'18%',paddingBottom:5}}>
                        <View style={{overflow:'hidden',borderRadius:3}}>
                            <ImageBackground source={require('../assets/dealOfDayImages/dealsoffer.png')}>
                                <Text style={{color:'white',alignSelf:'center',padding:'4%',paddingRight:'15%'}}>{data.ProductofferPercent}% Off</Text>
                            </ImageBackground>
                        </View>
                        
                    </View>
                    {
                        cart ? 
                        <Pressable style={{backgroundColor:'#EBA500',width:'40%',flexDirection:'row',justifyContent:'center',alignItems:'center',columnGap:5,borderRadius:10}} onPress={notShowCart}>
                            <View><Image source={require('../assets/CartPlus.png')}/></View>
                            <View><Text style={{color:'white',fontSize:20}}>Add to cart</Text></View>
                        </Pressable> :
                        <Pressable style={{backgroundColor:'#EBA500',width:'40%',flexDirection:'row',justifyContent:'center',alignItems:'center',columnGap:5,borderRadius:10}} onPress={showCart}>
                            <View><Image source={require('../assets/CartPlus.png')}/></View>
                            <View><Text style={{color:'white',fontSize:20}}>Add to mart</Text></View>
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
        </View>
    )
}

export default ProductCardDetails