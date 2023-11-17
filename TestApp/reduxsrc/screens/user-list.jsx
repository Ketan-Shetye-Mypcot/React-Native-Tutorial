import {View,Text ,Dimensions,FlatList} from 'react-native'
import AddUserBtn from '../components/add-user-btn'
import { useSelector,useDispatch } from 'react-redux'
import UserDetailCard from '../components/user-details-card'
import { updateUser } from '../redux/features/user-add/user-slice'
const WINDOW_WIDTH = Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height
const UserList=(props)=>{
    const onAddUserBtnPress=()=>{
        props.navigation.navigate('AddUser',{id:'',userName:'',userAge:'',userMail:''})
    }
    
    const  users  = useSelector(state=>state.user.userList)
    const Dispatch = useDispatch()
    const onEdit=(id,userName,userAge,userMail)=>{
        Dispatch(updateUser(users.id))
        props.navigation.navigate('AddUser',{id,userName,userAge,userMail})
    }
    return(
        <View style={{flex:1}}>
                <View style={{marginBottom:(WINDOW_HEIGHT*9)/100,margin:10}}> 
                <FlatList
                showsVerticalScrollIndicator={false}
                data={users}
                contentContainerStyle={{rowGap:15}}
                renderItem={({item,index})=>{
                    return <UserDetailCard id={item.id} userName={item.userName} userAge={item.userAge} userEmail={item.userMail} onEdit={onEdit}/>
                }}
                keyExtractor={item=>item.id}
            />
                </View>
            <View style={{width:WINDOW_WIDTH,height:(WINDOW_HEIGHT*8)/100,position:'absolute',bottom:0}}>
                <AddUserBtn onPress={onAddUserBtnPress} title='Add User'/>
            </View>
        </View>
    )
}

export default UserList