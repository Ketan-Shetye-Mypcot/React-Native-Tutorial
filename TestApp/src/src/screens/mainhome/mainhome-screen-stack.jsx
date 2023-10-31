import { View, Text,LogBox } from 'react-native'
import CategoryItems from '../maincategories/categoryItems';
import MainHome from './MainHome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useState} from 'react'
import Header from '../../components/header';

const Tab = createBottomTabNavigator();

const MainHomeStack = (props)=>{
    const [fromMainHome,setFromMainHome] = useState(false)
    
    const data = props.route.params
    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
      ])
    const [categoryItemHeaderTitle,setCategoryItemHeaderTitle] = useState('VEGIES')
    const setTitle = (categoryName)=>{
        setCategoryItemHeaderTitle(categoryName)
      }
      const goToCategoryHomePage=()=>{
        data.setShow()
        props.navigation.navigate('MainHome')
    }
    
    return(
        <Tab.Navigator screenOptions={{headerShown:false,tabBarStyle:{display:'none'}}}>
            <Tab.Screen name='MainHome' component={MainHome}  initialParams={{setShow:data.setShow,setNotShow:data.setNotShow,fromMainHome:fromMainHome}}
            options={{
                headerShown:true,
                headerTitle:()=><Header headerTitle='Trolleey' isBottomTabNavigationPage={true}/>,
                headerStyle:{
                    height:150,
                    shadowColor: '#000',
                    shadowOffset: {
                    width: 0,
                    height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84, 
                }
            }}/>
            <Tab.Screen name='CategoryItem' component={CategoryItems} initialParams={{setShow:data.setShow,setNotShow:data.setNotShow,fromMainHome:fromMainHome}}
            options={{
                headerShown:true,
                headerTitle:()=><Header headerTitle={categoryItemHeaderTitle} isCategoryItemPage={true} onPress={goToCategoryHomePage}/>,
                headerStyle:{
                    height:150,
                    shadowColor: '#000',
                    shadowOffset: {
                    width: 0,
                    height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84, 
                }
            }}
            />
        </Tab.Navigator>
    )
}

export default MainHomeStack
