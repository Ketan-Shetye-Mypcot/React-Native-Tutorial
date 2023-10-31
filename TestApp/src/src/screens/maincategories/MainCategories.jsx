import { View, Text,LogBox } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoryPage from './categoriespage';
import CategoryItems from './categoryItems';
import Header from '../../components/header';
import {useState} from 'react'
import { food,vegies,snack,cosmetics } from '../../jsons/categoryItemList'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainCategories = (props)=>{
    const [fromCategory,setFromCategory] = useState(false)
    const [categoryItemHeaderTitle,setCategoryItemHeaderTitle] = useState('Categories')
    const setTitle = (categoryName)=>{
        setCategoryItemHeaderTitle(categoryName)
      }
    const data = props.route.params
    const goToCategoryHomePage=()=>{
        data.setShow()
        props.navigation.navigate('CategoryPage')
    }
    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
      ])
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name='CategoryPage' 
            component={CategoryPage}
            initialParams={{setShow:data.setShow,setNotShow:data.setNotShow,setHeaderName:setTitle,fromCategory:fromCategory}}
            options={{
                headerTitle:()=><Header headerTitle='Categories' isBottomTabNavigationPage={true}/>,
                tabBarStyle : {display:'none'},
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
            <Tab.Screen 
            name='CategoryItem' 
            component={CategoryItems}
            initialParams={{setShow:data.setShow,setNotShow:data.setNotShow,setHeaderName:setTitle,fromCategory:fromCategory}}
            options={{
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

export default MainCategories
