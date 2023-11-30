import { useEffect,useState,useRef } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./firebasesrc/register";
import Login from "./firebasesrc/login";
import messaging from '@react-native-firebase/messaging'
import notifee, { EventType } from '@notifee/react-native';
import Home from "./firebasesrc/home";

const Stack = createNativeStackNavigator()

const App=()=> {
  const [screen,setScreen]=useState('Home')
  const navigationRef = useRef()
  useEffect(()=>{
    getDeviceToken()
  },[])
  const getDeviceToken=async ()=>{
    let token = await messaging().getToken();
    console.log(token)
  }
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      setScreen(remoteMessage.data?.screen)
      const channelId = await notifee.createChannel({
        id:'default',
        name:'Default Channel'
      });
      await notifee.displayNotification({
        title:remoteMessage.data?.title,
        body:remoteMessage.data?.body,
        android:{
          channelId,
          pressAction:{
            id:'notification_pressed'
          }
        }
      })
    })
    return unsubscribe;
  }, []);
 
  notifee.onForegroundEvent(async ({type,detail})=>{
    if(type === EventType.PRESS && detail.pressAction.id==='notification_pressed' && navigationRef.current){
        navigationRef.current.navigate(screen);
    }
  })

  return(
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
