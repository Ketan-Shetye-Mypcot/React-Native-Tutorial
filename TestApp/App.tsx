import { Text, View } from "react-native";
import MainAppStack from "./src/stacks/main-app-stack";
import { NavigationContainer } from '@react-navigation/native';
import ReduxMainStack from "./reduxsrc/stacks/redux-main-stack";
import { Provider } from "react-redux";
import { store } from "./reduxsrc/redux/store";
import OTPVerification from "./studiosrc/screen/authstack/screens/otp-verfication";

function App(): JSX.Element {
  return(
    
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Firebase</Text>
    </View>
  )
}

export default App;
// <NavigationContainer>
    //   <MainAppStack/>
    // </NavigationContainer>

    // <Provider store={store}>

    //   <ReduxMainStack/>
    //   </Provider>

    // <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    //   <OTPVerification/>
    // </View>