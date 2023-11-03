import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Dimensions} from 'react-native'
import Header from '../src/components/header';
import MainHome from '../src/screens/mainhome/MainHome';
import MainCart from '../src/screens/maincart/MainCart';
import MainProfile from '../src/screens/mainprofile/MainProfile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoryPage from '../src/screens/maincategories/categoriespage';
import { useState } from 'react';

const Tab = createBottomTabNavigator();
const height = Dimensions.get('window').height

const BottomTabStack=(props)=>{
    
    return(
    <Tab.Navigator 
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home': 'home-outline';
          } else if (route.name === 'Category') {
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
        <Tab.Screen name='Home' component={MainHome}
        options={{
            headerTitle:()=><Header headerTitle='Trolleey' isBottomTabNavigationPage={true}/>,
            headerShown:true,
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
        <Tab.Screen name='Category' component={CategoryPage}
        options={{
            headerTitle:()=><Header headerTitle='Categories' isBottomTabNavigationPage={true}/>,
            headerShown:true,
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
        <Tab.Screen name='Cart' component={MainCart}
        options={{
          tabBarStyle:{display:'none'},
          headerShown:false
        }}/>
        <Tab.Screen name='Profile' component={MainProfile}/>
    </Tab.Navigator>
    )
}

export default BottomTabStack