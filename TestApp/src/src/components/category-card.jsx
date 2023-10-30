import { View,Text,Image,Pressable,Dimensions } from "react-native";
const WINDOW_WIDTH= Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const CategoryComponent = (props)=>{
    return(
        <View style={{backgroundColor:'#FEFCF5',width:(WINDOW_WIDTH*28)/100,height:(WINDOW_HEIGHT*17)/100,borderRadius:12,overflow:'hidden',marginRight:20}}>
            <Pressable onPress={()=>props.onPressCategory(props.text,props.id)} style={{rowGap:20}}>
                <View style={{padding:8}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>{props.text}</Text>
                </View>
                <View style={{width:'100%',overflow:'hidden'}}>
                    <Image source={props.image} resizeMode='cover'/>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryComponent;