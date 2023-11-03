import { View, Text, Image, Pressable, ImageBackground,Dimensions } from "react-native";
import {useState} from 'react'
const WINDOW_WIDTH= Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const ProductDetailsCard = (props)=>{
    const[ showCart,setShowCart] = useState(true)

    

    const [qty,setQty] = useState(0)
    const incQty=()=>{
        setQty(qty+1)
    }
    const decQty=()=>{
        if(qty==0){
            setShowCart(true)
        }else{
            setQty(qty-1)
        }
    }
    return(
        <Pressable 
        style={{backgroundColor:'white',width:props.CardWidth,height:props.CardHeight,overflow:'hidden',elevation:10,borderBottomLeftRadius:8,borderBottomRightRadius:8,borderTopRightRadius:8,marginHorizontal:3}} 
        onPress={()=>props.onPress(props.image,props.productName,props.productPrice,props.productOfferPrice,props.percentOff)}>
            {
                props.isOfferOnProduct ?
                <View style={{width:'40%',overflow:'hidden'}}>
                    <ImageBackground source={require('../assets/dealOfDayImages/dealsoffer.png')}>
                        <Text style={{paddingLeft:4,alignItems:'center',justifyContent:'center',color:'white',fontSize:13}}>{props.percentOff}% Off</Text>
                    </ImageBackground>
                </View> :
                null
            }
            <View style={{rowGap:14,paddingHorizontal:10,paddingVertical:10}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Image source={props.image}/>
            </View>
            <View style={{justifyContent:'flex-start'}}>
                <View>
                    <Text style={{fontWeight:'bold'}}>{props.productName}</Text>
                </View>
                <View>
                    <Text>{props.productWt}</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%',height:'auto'}}>
                <View>
                    <View>
                        <Text style={{textDecorationLine:'line-through',fontWeight:'bold',fontSize:12}}>{props.productPrice}</Text>
                    </View>
                    <View>
                        <Text style={{fontWeight:'bold',fontSize:12}}>{props.productOfferPrice}</Text>
                    </View>
                </View>
                {
                    showCart ?
                    <Pressable style={{backgroundColor:'#FEFAF2',borderColor:'#EBA500',borderRadius:8,borderWidth:0.8}} onPress={()=>setShowCart(false)}>
                        <Image source={require('../assets/dealOfDayImages/dealcart.png')} style={{width:25,height:25,margin:5}} resizeMode="cover"/>
                    </Pressable> :
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',backgroundColor:'#F3F3F3',alignItems:'center',columnGap:10,borderRadius:6,paddingHorizontal:4,paddingVertical:4}}>
                        <View><Pressable onPress={()=>decQty()}><Image source={require('../assets/minus.png')} style={{backgroundColor:'white',width:14,height:14}}/></Pressable></View>
                        <View><Text style={{fontWeight:'bold',fontSize:16}}>{qty}</Text></View>
                        <View><Pressable onPress={()=>incQty()}><Image source={require('../assets/add.png')} style={{backgroundColor:'white',width:14,height:14}}/></Pressable></View>
                    </View>
                }
            </View>
            </View>
        </Pressable>
    )
}

export default ProductDetailsCard;

