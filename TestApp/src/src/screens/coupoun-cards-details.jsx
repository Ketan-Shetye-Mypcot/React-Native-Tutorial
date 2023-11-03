import { View,Text,Pressable,Dimensions,ImageBackground } from "react-native";

const WINDOW_WIDTH= Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const CoupounList=(props)=>{
    const couponsCode='#TRYLOFF200'
    return(
        <View style={{flexDirection:'row',width:(WINDOW_WIDTH*95)/100,height:(WINDOW_HEIGHT*25)/100,alignSelf:'center'}}>
            <View style={{width:'25%',height:'100%'}}>
                <ImageBackground source={require('../assets/Subtract.png')} style={{height:'100%'}}>
                    <View style={{height:'100%',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'white',transform: [{ rotate: '270deg'}],fontSize:25}}>
                            25% off
                        </Text>
                    </View>
                </ImageBackground>
            </View>
            
            <View style={{width:'75%',height:'100%',borderWidth:5,borderColor:'#00B367',borderTopEndRadius:15,borderBottomEndRadius:15,backgroundColor:'white',rowGap:8,padding:'1%',justifyContent:'center'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                        <Text style={{color:'black',fontWeight:'bold',fontSize:18}}>{props.couponCode}</Text>
                    </View>
                    <View>
                        <Text style={{color:'#79A400',fontWeight:'bold',opacity:0.6}}>Save upto 5000</Text>
                    </View>
                </View>
                <View style={{width:'70%'}}>
                    <Text style={{color:'black',opacity:0.9}} > Use this code "{props.couponCode}" to get 25% off on next delivery</Text>
                </View>
                <View style={{rowGap:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <Text style={{color:'#5D5D5D'}}>T&C Applies</Text>
                        </View>
                        <View>
                            <Pressable style={{backgroundColor:'#EBA500',borderRadius:5}} onPress={()=>props.onApplyPress(props.couponCode)}><Text style={{color:'white',fontSize:20,paddingHorizontal:'9%',paddingVertical:'1%',fontWeight:'bold'}}>APPLY</Text></Pressable>
                        </View>
                    </View>
                    <View style={{width:'100%',borderWidth:0.5,borderColor:'#C9C9C9'}}></View>
                    <View>
                        <Text style={{color:'#929292'}}>Valid till 2nd June 2023</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default CoupounList

{/* <View style={{width:'20%',backgroundColor:'blue',height:'20%',justifyContent:'center',alignItems:'center',transform: [{ rotate: '270deg'}]}}>
                <Text>Hello</Text>
            </View> */}