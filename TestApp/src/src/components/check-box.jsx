import {View,Text,Image,Pressable} from 'react-native'
const CheckBox=(props)=>{
    return(
        <View>
            {
                props.isChecked ? 
                <Pressable style={{flexDirection:'row',columnGap:20}} onPress={()=>props.onPress(props.CheckBoxId)}>
                <View style={{width:20,height:20,justifyContent:'center',alignItems:'center',overflow:'hidden'}} >
                    <Image source={require('../assets/checkbox.png')} style={{width:28,height:28}} />
                </View> 
                <View><Text style={{color:'#EBA500',fontWeight:'bold',fontSize:15}}>{props.brandby}</Text></View>
                </Pressable>
                :
                <Pressable style={{flexDirection:'row',columnGap:20}} onPress={()=>props.onPress(props.CheckBoxId)}>
                <View style={{width:20,height:20,justifyContent:'center',alignItems:'center',overflow:'hidden'}}>
                <View style={{borderColor:'#EBA500',borderWidth:1,width:20,height:20}}></View>
                </View>
                <View><Text style={{color:'black',fontWeight:'400'}}>{props.brandby}</Text></View>
                </Pressable>
            }
        </View>
    )
}
export default CheckBox