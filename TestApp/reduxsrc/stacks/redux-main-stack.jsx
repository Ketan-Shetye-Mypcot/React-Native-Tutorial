import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddUser from '../screens/add-user';
import UserList from '../screens/user-list';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const Stack = createNativeStackNavigator()

const ReduxMainStack =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='UserList' component={UserList}/>
                <Stack.Screen name='AddUser' component={AddUser}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ReduxMainStack