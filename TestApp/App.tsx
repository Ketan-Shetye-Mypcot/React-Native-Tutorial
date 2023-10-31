import MainAppStack from "./src/stacks/main-app-stack";
import { NavigationContainer } from '@react-navigation/native';

function App(): JSX.Element {
  return(
    <NavigationContainer>

      <MainAppStack/>
    </NavigationContainer>
  )
}

// navigation.navigate('Root', {screen: 'Profile',params: { user: 'jane' }});

export default App;















// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from './src/screen/Login';
// import Register from './src/screen/Register';
// import MainStack from './src/src/mainstack';

// const Stack = createNativeStackNavigator();

// function App(): JSX.Element {
  
//   return(
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen  name='Register' component={Register}/>
//         <Stack.Screen name='Login' component={Login}/>
//         <Stack.Screen name='MainStack' component={MainStack}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }


// export default App;
