import {View,Text,Pressable} from 'react-native';

const RadioButton = (props)=>{
    return(
        <View >
            {
                props.isRadioButtonPressed ?
                <Pressable style={{flexDirection:'row',columnGap:10}} onPress={()=>props.onPress(props.itemId)}>
                <View style={{width:20,height:20,borderRadius:10,borderWidth:2,overflow:'hidden',justifyContent:'center',alignItems:'center',borderColor:'#EBA500'}} >
                    <View style={{backgroundColor:'#EBA500',width:'100%',height:'100%',borderWidth:2,borderColor:'white',borderRadius:30}}></View>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#EBA500',fontWeight:'bold',fontFamily:'HindMadurai-Medium'}}>{props.sortby}</Text>
                </View>
                </Pressable> :
                <Pressable style={{flexDirection:'row',columnGap:10}} onPress={()=>props.onPress(props.itemId)}>
                <View style={{width:20,height:20,borderRadius:10,borderWidth:2,overflow:'hidden',justifyContent:'center',alignItems:'center',borderColor:'black',opacity:0.7}} >
                    <View style={{backgroundColor:'white',width:'100%',height:'100%',borderWidth:2,borderColor:'white',borderRadius:30}}></View>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'black', fontFamily:'HindMadurai-Medium',opacity:0.7}}>{props.sortby}</Text>
                </View>
                </Pressable>
            }
                        
        
        </View>
    )
}
export default RadioButton