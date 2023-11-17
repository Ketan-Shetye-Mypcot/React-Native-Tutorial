import { Text, View } from "react-native";
import MainAppStack from "./src/stacks/main-app-stack";
import { NavigationContainer } from '@react-navigation/native';
import ReduxMainStack from "./reduxsrc/stacks/redux-main-stack";
import { Provider } from "react-redux";
import { store } from "./reduxsrc/redux/store";

function App(): JSX.Element {
  return(
    <Provider store={store}>

      <ReduxMainStack/>
      </Provider>
  )
}

export default App;
// <NavigationContainer>
    //   <MainAppStack/>
    // </NavigationContainer>