import { View, Text } from 'react-native'
import CategoryItems from '../maincategories/categoryItems';
import MainHome from './MainHome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useState} from 'react'
import Header from '../../components/header';

const Tab = createBottomTabNavigator();

const MainHomeStack = (props)=>{
    const [categoryItemHeaderTitle,setCategoryItemHeaderTitle] = useState('VEGIES')
    const setTitle = (categoryName)=>{
        setCategoryItemHeaderTitle(categoryName)
      }
      const goToCategoryHomePage=()=>{
        data.setShow()
        props.navigation.navigate('MainHome')
    }
    const data = props.route.params
    return(
        <Tab.Navigator screenOptions={{headerShown:false,tabBarStyle:{display:'none'}}}>
            <Tab.Screen name='MainHome' component={MainHome}  initialParams={{setShow:data.setShow,setNotShow:data.setNotShow}}
            options={{
                headerShown:true,
                tabBarStyle : {display:'none'},
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
            <Tab.Screen name='CategoryItem' component={CategoryItems} initialParams={{setShow:data.setShow,setNotShow:data.setNotShow}}
            options={{
                headerShown:true,
                tabBarStyle : {display:'none'},
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
