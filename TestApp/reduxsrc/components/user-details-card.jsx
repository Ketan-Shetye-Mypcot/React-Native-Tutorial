import {View,Text,Pressable} from 'react-native'
import { useDispatch } from 'react-redux'
import { removeUser } from '../redux/features/user-add/user-slice'
const UserDetailCard=(props)=>{
    const dispatch = useDispatch()
    const onDelete=()=>{
        dispatch(removeUser(props.id))
    }
    
    return(
        <View style={{backgroundColor:'white',rowGap:10,padding:10,borderRadius:14}}>
            <View><Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>id : {props.id}</Text></View>
            <View><Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>username : {props.userName}</Text></View>
            <View><Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>userage : {props.userAge}</Text></View>
            <View><Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>usermail : {props.userEmail}</Text></View>
            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                {/* <Pressable onPress={()=>props.onEdit(props.id,props.userName,props.userAge,props.userEmail)}><Text style={{color:'white',fontWeight:'bold',backgroundColor:'black',fontSize:20,padding:5,borderRadius:10}}>Edit</Text></Pressable> */}
                <Pressable onPress={()=>onDelete()}><Text style={{color:'white',fontWeight:'bold',backgroundColor:'black',fontSize:20,padding:5,borderRadius:10}}>Delete</Text></Pressable>
            </View>
        </View>
    )
}

export default UserDetailCard