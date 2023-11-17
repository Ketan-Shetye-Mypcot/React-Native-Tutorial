import {View,Text,Pressable} from 'react-native'
const AddUserBtn=(props)=>{
    return(
        <Pressable onPress={()=>props.onPress()} style={{width:'100%',backgroundColor:'black',height:'100%',justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>{props.title}</Text>
        </Pressable>
    )
}
export default AddUserBtn