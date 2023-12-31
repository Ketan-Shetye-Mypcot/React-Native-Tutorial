import { View, Text, Image, Pressable, ImageBackground,Dimensions } from "react-native";
import {useState} from 'react'
import ProductWtModal from "./ProductWtModal";
const WINDOW_WIDTH= Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const ProductComponent = (props)=>{
    const[ showCart,setShowCart] = useState(true)
    const [showProductWtModal,setShowProductWtModal] = useState(false)
    

    const [qty,setQty] = useState(1)
    const incQty=()=>{
        setQty(qty+1)
    }
    const decQty=()=>{
        if(qty==1){
            setShowCart(true)
        }else{
            setQty(qty-1)
        }
    }
    const onProductWtPress=()=>{
        setShowProductWtModal(true)
    }
    return(
        <View 
        style={{backgroundColor:'white',width:props.CardWidth,height:props.CardHeight,shadowColor: 'black',elevation:3,borderBottomLeftRadius:8,borderBottomRightRadius:8,borderTopRightRadius:8,marginHorizontal:6,marginVertical:7}}>
            {
                props.isOfferOnProduct ?
                <View style={{width:'40%',overflow:'hidden'}}>
                    <ImageBackground source={require('../assets/dealOfDayImages/dealsoffer.png')}>
                        <Text style={{paddingLeft:4,alignItems:'center',justifyContent:'center',color:'white',fontSize:12}}>{props.percentOff}% Off</Text>
                    </ImageBackground>
                </View> :
                null
            }
            <ProductWtModal visible={showProductWtModal}/>
            <View style={{rowGap:14,paddingHorizontal:10,paddingVertical:10}}>
            <Pressable style={{justifyContent:'center',alignItems:'center'}} onPress={()=>props.onPress(props.image,props.productName,props.productPrice,props.productOfferPrice,props.percentOff)}>
                <Image source={props.image}/>
            </Pressable>
            <View style={{justifyContent:'flex-start'}}>
                <View>
                    <Text style={{fontWeight:'bold'}}>{props.productName}</Text>
                </View>
                <Pressable onPress={onProductWtPress}>
                    <Text>{props.productWt}</Text>
                </Pressable>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',height:(WINDOW_HEIGHT*5)/100}}>
                <View style={{width:'50%',justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
                    <View>
                    <View>
                        <Text style={{textDecorationLine:'line-through',fontWeight:'bold',fontSize:10}}>{props.productPrice}</Text>
                    </View>
                    <View>
                        <Text style={{fontWeight:'bold',fontSize:11}}>{props.productOfferPrice}</Text>
                    </View>
                    </View>
                </View>
                {
                    showCart ?
                    <Pressable style={{backgroundColor:'#FEFAF2',borderColor:'#EBA500',borderRadius:8,borderWidth:0.8,height:'100%',justifyContent:'center',alignItems:'center'}} onPress={()=>setShowCart(false)}>
                        <Image source={require('../assets/dealOfDayImages/dealcart.png')} style={{width:27,height:27,margin:5}} resizeMode="cover"/>
                    </Pressable> :
                    <View style={{flexDirection:'row',justifyContent:'center',gap:5,backgroundColor:'#F3F3F3',alignItems:'center',borderRadius:6,padding:7,alignSelf:'flex-end'}}>
                        <View><Pressable onPress={()=>decQty()}><Image source={require('../assets/minus.png')} style={{backgroundColor:'white',width:16,height:16}}/></Pressable></View>
                            <View><Text style={{fontWeight:'bold',fontSize:14,fontFamily:'HindMadurai-Regular'}}>{qty}</Text></View>
                        <View><Pressable onPress={()=>incQty()}><Image source={require('../assets/add.png')} style={{backgroundColor:'white',width:16,height:16}}/></Pressable></View>
                    </View>
                }
            </View>
            </View>
        </View>
    )
}

export default ProductComponent;

