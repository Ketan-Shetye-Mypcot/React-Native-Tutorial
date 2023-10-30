import { View, Text, Image, Pressable, ImageBackground,Dimensions } from "react-native";
import {useState} from 'react'
const WINDOW_WIDTH= Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const ProductComponent = (props)=>{
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
        <View style={{backgroundColor:'white',width:props.CardWidth,height:props.CardHeight,overflow:'hidden',shadowColor: '#EBA500',elevation:20,borderBottomLeftRadius:8,borderBottomRightRadius:8,borderTopRightRadius:8,marginHorizontal:3}}>
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
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
                <View>
                    <View>
                        <Text style={{textDecorationLine:'line-through',fontWeight:'bold'}}>{props.productPrice}</Text>
                    </View>
                    <View>
                        <Text style={{fontWeight:'bold'}}>{props.productOfferPrice}</Text>
                    </View>
                </View>
                {
                    showCart ?
                    <Pressable style={{backgroundColor:'#FEFAF2',borderColor:'#EBA500',borderRadius:8,borderWidth:0.8,alignItems:'center',width:'30%',marginBottom:1}} onPress={()=>setShowCart(false)}>
                        <Image source={require('../assets/dealOfDayImages/dealcart.png')} style={{marginVertical:4}}/>
                    </Pressable> :
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',backgroundColor:'#F3F3F3',alignItems:'center',columnGap:10,borderRadius:8,paddingHorizontal:5,paddingVertical:8}}>
                        <View><Pressable onPress={()=>decQty()}><Image source={require('../assets/minus.png')} style={{backgroundColor:'white',width:15,height:15}}/></Pressable></View>
                        <View><Text style={{fontWeight:'bold',fontSize:18}}>{qty}</Text></View>
                        <View><Pressable onPress={()=>incQty()}><Image source={require('../assets/add.png')} style={{backgroundColor:'white',width:15,height:15}}/></Pressable></View>
                    </View>
                }
            </View>
            </View>
        </View>
    )
}

export default ProductComponent;



// const NewProductsList = (props)=>{
//     const [qty,setQty]=useState(0)
//     const incQty=()=>{
//         setQty(qty+1)
//     }
//     const decQty=()=>{
//         if(qty===0){
//             setQty(0)
//         }else{
//             setQty(qty-1)
//         }
//     }
//     return(
//         <View style={{rowGap:20,shadowColor:'#EBA500',elevation: 20,width:200,justifyContent:'center',backgroundColor:'white',borderRadius:8,shadowColor: '#EBA500',elevation: 10}}>
//             <View style={{justifyContent:'flex-start'}}>
//                 <ImageBackground source={require('../assets/dealOfDayImages/dealsoffer.png')} style={{width:80,height:30}}>
//                     <Text style={{color:'white',paddingTop:4,paddingLeft:5}}>15% Off</Text>
//                 </ImageBackground>
//             </View>
//             <View style={{marginHorizontal:10}}>
//                 <Image source={props.item.image}/>
//             </View>
//             <View style={{marginHorizontal:10}}> 
//                 <View><Text style={{fontWeight:'bold',fontSize:16}}>{props.item.name}</Text></View>
//                 <View><Text>500gm</Text></View>
//             </View>
//             <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
//                 <View>
//                     <View>
//                         <Text style={{textDecorationLine:'line-through'}}>EGP 199.45</Text>
//                     </View>
//                     <View>
//                         <Text style={{fontWeight:'bold'}}>EGP 99.45</Text>
//                     </View>
//                 </View>
//                 <View style={{backgroundColor:'#F3F3F3',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',columnGap:10,borderRadius:7.5}}>
//                     <View style={{paddingLeft:7}}><Pressable onPress={decQty}><Image source={require('../assets/minus.png')} style={{width:20,height:20,backgroundColor:'white'}}/></Pressable></View>
//                     <View><Text style={{fontWeight:'bold',fontSize:20}}>{qty}</Text></View>
//                     <View style={{paddingRight:7}}><Pressable onPress={incQty}><Image source={require('../assets/add.png')} style={{width:20,height:20,backgroundColor:'white'}}/></Pressable></View>
//                 </View>
//             </View>
//         </View>
//     )
// }