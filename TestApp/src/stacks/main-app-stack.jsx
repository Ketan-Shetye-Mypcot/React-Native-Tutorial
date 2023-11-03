
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import AuthenticationStack from './authentication-stack';
import Header from '../src/components/header';

import CategoryItems from '../src/screens/maincategories/categoryItems';
import BottomTabStack from './bottom-tab-stack';
import ProductCardDetails from '../src/screens/product-card-details';
import ProductImage from '../src/screens/product-image';
import Coupons from '../src/screens/coupons-screen';
import CheckOut from '../src/screens/check-out';
import Address from '../src/screens/address';
import AddAddress from '../src/screens/add-address';

const Stack = createNativeStackNavigator()

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
            <Stack.Screen name='ProductCardDetails' component={ProductCardDetails} 
            options={{
                headerShown:true,
                headerBackVisible:false,
                headerTitle:()=><Header headerTitle='Product' isProductCardDetails={true} onPress={goBackToPrevNavigation}/>
            }}
            />
            <Stack.Screen name='ProductImage' component={ProductImage} options={{headerShown:false}} />
            <Stack.Screen name='Coupons' component={Coupons} 
            options={{
                headerShown:true,
                headerBackVisible:false,
                headerTitle:()=><Header headerTitle='Product' isProductCardDetails={true} onPress={goBackToPrevNavigation}/>
                }}/>
                <Stack.Screen name='CheckOut' component={CheckOut} options={{headerShown:false}}/>
                <Stack.Screen name='Address' component={Address} 
                options={{
                    headerShown:true,
                    headerBackVisible:false,
                    headerTitle:()=><Header headerTitle='Address' isProductCardDetails={true} onPress={goBackToPrevNavigation}/>
                }}
                />
                <Stack.Screen name='AddAddress' component={AddAddress} 
                options={{
                    headerShown:true,
                    headerBackVisible:false,
                    headerTitle:()=><Header headerTitle='Add Address' isProductCardDetails={true} onPress={goBackToPrevNavigation}/>
                }}
                />

        </Stack.Navigator>
    )
}


export default MainAppStack;