import { View,Text,Pressable,Dimensions,ImageBackground,ScrollView } from "react-native";
import CoupounList from "./coupoun-cards-details";

const Coupons = (props)=>{
    const data = props.route.params
    const onApplyPress=(couponsCode)=>{
        // data.changeCouponCode(couponsCode)
        // props.navigation.navigate("BottomTabStack",{screen:'Cart',params:{couponsCode}})
        props.navigation.navigate("BottomTabStack",{screen:'Cart'})
    }
    return(
        <View style={{flex:1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{margin:'2%'}}>
                <CoupounList onApplyPress={onApplyPress} couponCode='#TRYLOFF200'/>
            </View>
            <View style={{margin:'2%'}}>
                <CoupounList onApplyPress={onApplyPress} couponCode='#TRYLOFF300'/>
            </View>
            <View style={{margin:'2%'}}>
                <CoupounList onApplyPress={onApplyPress} couponCode='#TRYLOFF400'/>
            </View>
            <View style={{margin:'2%'}}>
                <CoupounList onApplyPress={onApplyPress} couponCode='#TRYLOFF500'/>
            </View>
            </ScrollView>
        </View>
    )
}

export default Coupons