import {useState,useEffect} from 'react'
import { StyleSheet, Text, View, Dimensions,BackHandler } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainHome from './screens/mainhome/MainHome';
import MainCategories from './screens/maincategories/MainCategories';
import MainCart from './screens/maincart/MainCart';
import MainProfile from './screens/mainprofile/MainProfile';
import Header from './components/header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainHomeStack from './screens/mainhome/mainhome-screen-stack';

const height = Dimensions.get('window').height
const Tab = createBottomTabNavigator();

const MainStack = ()=>{
  const [showTabBarInCategory,setShowTabBarInCategory] = useState(true)
  const setShow = ()=>{
    setShowTabBarInCategory(true)
  }
  const setNotShow = ()=>{
    setShowTabBarInCategory(false)
  }
//   useEffect(()=>{
//     const backAction = () => {
//         null
//         return true;
//       };
  
//       const backHandler = BackHandler.addEventListener(
//         'hardwareBackPress',
//         backAction,
//       );
  
//       return () => backHandler.remove();
// },[])
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home': 'home-outline';
              } else if (route.name === 'Categories') {
                iconName = focused ? 'apps' : 'apps-outline';
              } else if (route.name === 'Cart') {
                iconName = focused ? 'cart' : 'cart-outline';
              }else if (route.name === 'Profile') {
                iconName = focused ? 'person-circle' : 'person-circle-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#EBA500',
            tabBarInactiveTintColor: 'gray',
            tabBarIconStyle:{
              marginTop:7
            },
            tabBarLabelStyle:{
              paddingBottom:10,
              fontSize:13
            },
            tabBarStyle:{
              height:height*10/100,
              shadowColor: '#EBA500',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            }
          })}
        >
            <Tab.Screen 
            name='Home' 
            component={MainHomeStack} 
            initialParams={{setShow:setShow,setNotShow:setNotShow}}
            options={{
                headerTitle:()=><Header headerTitle='Trolleey' isBottomTabNavigationPage={true}/>,
                headerShown:false,
                tabBarStyle:showTabBarInCategory ? {height:height*10/100,
                shadowColor: '#EBA500',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,}:{display:'none'},
                headerStyle:{
                    height:150,
                    shadowColor: '#000',
                    shadowOffset: {
                    width: 0,
                    height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84
                }
                }}/>
            <Tab.Screen 
            name='Categories' 
            component={MainCategories}
            initialParams={{setShow:setShow,setNotShow:setNotShow}}
            options={{
              headerTitle:()=><Header headerTitle='Categories'/>,
              headerShown:false,
              tabBarStyle:showTabBarInCategory ? {height:height*10/100,
              shadowColor: '#EBA500',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,}:{display:'none'},
              headerStyle:{
                  height:150,
                  shadowColor: '#000',
                  shadowOffset: {
                  width: 0,
                  height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84
              }
              }}
            />
            <Tab.Screen name='Cart' component={MainCart}/>
            <Tab.Screen name='Profile' component={MainProfile}/>
        </Tab.Navigator>
    )
}


export default MainStack;