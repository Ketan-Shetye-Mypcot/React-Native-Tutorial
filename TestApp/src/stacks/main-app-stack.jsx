
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import AuthenticationStack from './authentication-stack';
import Header from '../src/components/header';

import CategoryItems from '../src/screens/maincategories/categoryItems';
import BottomTabStack from './bottom-tab-stack';
import ProductCardDetails from '../src/screens/product-card-details';

const Stack = createNativeStackNavigator();

const MainAppStack = (props)=>{
    const navigation = useNavigation();
    const goBackToPrevNavigation=()=>{
        navigation.goBack()
    }
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen  name='AuthenticationStack' component={AuthenticationStack} options={{headerShown:false}}/>
            <Stack.Screen  name='BottomTabStack' component={BottomTabStack} options={{headerShown:false}}/>
            <Stack.Screen  name='CategoryItems' component={CategoryItems}
            options={{
                headerShown:true,
                headerBackVisible:true,
                headerTitle:()=><Header headerTitle='Vegies' isCategoryItemPage={true} onPress={goBackToPrevNavigation}/>,
            }}
            />
            <Stack.Screen name='ProductCardDetails' component={ProductCardDetails} options={{headerShown:true}}/>
        </Stack.Navigator>
    )
}







export default MainAppStack;