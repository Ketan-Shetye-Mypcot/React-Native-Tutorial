import { View,Text,Image,Pressable,Dimensions } from "react-native";
const WINDOW_WIDTH= Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const CategoryComponent = (props)=>{
    return(
        <Pressable style={{backgroundColor:'#FEFCF5',width:(WINDOW_WIDTH*28)/100,height:(WINDOW_HEIGHT*18)/100,borderRadius:8,justifyContent:'space-between',marginRight:20}} onPress={()=>props.onPressCategory(props.text,props.id)}>
            
                <View style={{padding:8}}>
                    <Text style={{fontSize:16,fontWeight:500,textTransform:'capitalize'}}>{props.text}</Text>
                </View>
                <View>
                    <Image source={props.image} resizeMode="contain" style={{width:'100%',overflow:'hidden',height:90,borderBottomLeftRadius:8,borderBottomRightRadius:8}}/>
                </View>
        </Pressable>
    )
}

export default CategoryComponent;