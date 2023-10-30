import {View,Text,Image,Pressable} from 'react-native'
const CheckBox=(props)=>{
    return(
        <Pressable style={{width:20,height:20,justifyContent:'center',alignItems:'center',overflow:'hidden'}} onPress={()=>props.onPress(props.CheckBoxId)}>
            {
                props.isChecked ? 
                <Image source={require('../assets/checkbox.png')} style={{width:28,height:28}} /> :
                <View style={{borderColor:'#EBA500',borderWidth:1,width:20,height:20}}></View>
            }
        </Pressable>
    )
}
export default CheckBox