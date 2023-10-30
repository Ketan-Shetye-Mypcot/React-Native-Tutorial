import { View,Text,Image,Pressable,Dimensions } from "react-native";
const WINDOW_WIDTH= Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const CategoryItem = (props)=>{
    return(
        <View style={{width:(WINDOW_WIDTH*20)/100,justifyContent:'space-around',alignItems:'center'}}>
            {
                props.isOnHomePage?
                <Pressable onPress={()=>props.onPress(props.text)} style={{rowGap:15,justifyContent:'center'}}>
                <View>
                    <Image source={props.image} style={{width:(WINDOW_WIDTH*25)/100,height:(WINDOW_HEIGHT*12)/100,borderRadius:50,overflow:'hidden',backgroundColor:'#FCF2D9',borderColor:'#FFF6E0',borderWidth:1}}/>
                </View>
                <View style={{alignSelf:'center'}}>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>{props.text}</Text>
                </View>
            </Pressable>:
                <Pressable onPress={()=>props.onPress(props.id)} style={{rowGap:8,justifyContent:'center',alignItems:'center',width:'100%',backgroundColor:props.id==props.onPressCategoryHighlight ? '#FCF2D9':'white',paddingVertical:5}}>
                <View>
                    <Image source={props.image} style={{width:(WINDOW_WIDTH*15)/100,height:(WINDOW_HEIGHT*8)/100,borderRadius:50,overflow:'hidden',backgroundColor:props.id==props.onPressCategoryHighlight ? 'white':'#FCF2D9',borderColor:'#FFF6E0',borderWidth:1}}/>
                </View>
                <View style={{width:'100%',alignItems:'center',borderRightWidth:props.id==props.onPressCategoryHighlight ? 3.5:0,borderColor:props.id==props.onPressCategoryHighlight ? '#EBA500':'white'}}>
                    <Text style={{fontSize:15,fontWeight:'bold',paddingVertical:5}}>{props.text}</Text>
                </View>
            </Pressable>
        }
            
        </View>
    )
}
export default CategoryItem;