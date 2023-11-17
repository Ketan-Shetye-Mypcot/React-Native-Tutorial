import {View,Text,Dimensions} from 'react-native'
import {useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import TextInputBox from '../components/text-input-box'
import AddUserBtn from '../components/add-user-btn'
import { addUser } from '../redux/features/user-add/user-slice'
const WINDOW_WIDTH = Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height
let id=0
const AddUser=(props)=>{
    const ROUTE_DATA = props.route.params
    const [userName,setUserName]=useState(ROUTE_DATA.userName)
    const [ userAge,setUserAge ]=useState(ROUTE_DATA.userAge)
    const [ userMail,setUserMail ]=useState(ROUTE_DATA.userMail)
    const dispatch = useDispatch()
    const onSaveUserBtnPress=()=>{
        id=id+1
        dispatch(addUser({id,userName,userAge,userMail}))
        props.navigation.navigate('UserList')
    }
    
    return(
        <View style={{flex:1,rowGap:20,marginHorizontal:10,marginTop:10}}>
            <TextInputBox placeholder='user name' value={userName} setValue={setUserName} keyboardType='default'/>
            <TextInputBox placeholder='user age' value={userAge} setValue={setUserAge} keyboardType='number-pad'/>
            <TextInputBox placeholder='user mail' value={userMail} setValue={setUserMail} keyboardType='email-address'/>
            <View style={{height:(WINDOW_HEIGHT*8)/100}}>
                <AddUserBtn onPress={onSaveUserBtnPress} title='Save User'/>
            </View>
        </View>
    )
}
export default AddUser