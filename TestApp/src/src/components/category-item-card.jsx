import { View,Text,Image,Pressable,Dimensions } from "react-native";
const WINDOW_WIDTH= Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const CategoryItem = (props)=>{
    return(
        <View >
            {
                props.isOnHomePage?
                <Pressable onPress={()=>props.onPress(props.text)} style={{rowGap:15,justifyContent:'center'}}>
                <View>
                    <Image source={props.image} style={{width:(WINDOW_WIDTH*25)/100,height:(WINDOW_HEIGHT*12)/100,borderRadius:50,overflow:'hidden',backgroundColor:'#FCF2D9',borderColor:'#FFF6E0',borderWidth:1}}/>
                </View>
                <View style={{alignSelf:'center'}}>
                    <Text style={{fontSize:15,fontWeight:'bold',textTransform:'capitalize'}}>{props.text}</Text>
                </View>
            </Pressable>
            :
            <Pressable onPress={()=>props.onPress(props.id)} style={{rowGap:8,justifyContent:'flex-end',alignItems:'center',backgroundColor:props.id==props.onPressCategoryHighlight ? '#FCF2D9':'white',justifyContent:'center',borderTopLeftRadius:20,borderTopRightRadius:20}}>
                <Image source={props.image} style={{width:45,height:45,borderRadius:48,backgroundColor:props.id==props.onPressCategoryHighlight ? 'white':'#FCF2D9',marginTop:3.5}} resizeMode="cover" />
                <View style={{width:'100%',alignItems:'center',borderRightWidth:props.id==props.onPressCategoryHighlight ? 4:0,borderColor:props.id==props.onPressCategoryHighlight ? '#EBA500':'white'}}>
                    <Text style={{fontSize:12,fontWeight:'bold',paddingVertical:5,paddingBottom:10,textTransform:'capitalize'}}>{props.text}</Text>
                </View>
            </Pressable>
        }
        </View>
    )
}
export default CategoryItem;