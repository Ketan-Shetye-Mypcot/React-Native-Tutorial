import {View,Text,Pressable} from 'react-native';

const RadioButton = (props)=>{
    return(
        <View>
            {
                props.isRadioButtonPressed ?
                <Pressable style={{width:20,height:20,borderRadius:10,borderWidth:2,overflow:'hidden',justifyContent:'center',alignItems:'center',borderColor:'#EBA500'}} onPress={()=>props.onPress(props.itemId)}>
                    <View style={{backgroundColor:'#EBA500',width:'100%',height:'100%',borderWidth:2,borderColor:'white',borderRadius:30}}></View>
                </Pressable> :
                <Pressable style={{width:20,height:20,borderRadius:10,borderWidth:2,overflow:'hidden',justifyContent:'center',alignItems:'center',borderColor:'black'}} onPress={()=>props.onPress(props.itemId)}>
                    <View style={{backgroundColor:'white',width:'100%',height:'100%',borderWidth:2,borderColor:'white',borderRadius:30}}></View>
                </Pressable>
            }
        
        </View>
    )
}
export default RadioButton