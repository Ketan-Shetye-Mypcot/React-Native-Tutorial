import { View,Text,Pressable,Dimensions,ImageBackground,ScrollView,Image,TextInput } from "react-native";
import {useState} from 'react'
import { Dropdown } from 'react-native-element-dropdown';

const WINDOW_WIDTH= Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height
const AddAddress=()=>{
    const [countryCode,setCountryCode] = useState('+249')
    const [moboNo,setMoBoNo]= useState('')
    const [houseNo,setHouseNo]=useState('')
    const [bldgName,setBldgName]=useState('')
    const [landMark,setLandMark]=useState('')
    const [area,setArea] =useState('')
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:'#C9C9C9',marginHorizontal:'3%',marginVertical:'2%',alignItems:'center'}}>
                    <View style={{borderRightWidth:2,borderColor:'#C9C9C9',height:'80%'}}><TextInput placeholder="+249" value={countryCode} onChangeText={(text)=>{setCountryCode(text)}} style={{color:'#272727BF'}}/></View>
                    <View><TextInput placeholder="Enter your mobile number" style={{color:'#272727BF',textAlignVertical:'center',paddingLeft:10}} value={moboNo} onChangeText={(text)=>{setMoBoNo(text)}} keyboardType='numeric'/></View>
                </View>
                <View style={{borderBottomWidth:1,borderColor:'#C9C9C9',marginHorizontal:'3%',marginVertical:'2%'}}><TextInput placeholder="Enter house no. & floor" style={{color:'#272727BF',textAlignVertical:'center',paddingLeft:10}} value={houseNo} onChangeText={(text)=>{setHouseNo(text)}} keyboardType='name-phone-pad'/></View>
                <View style={{borderBottomWidth:1,borderColor:'#C9C9C9',marginHorizontal:'3%',marginVertical:'2%'}}><TextInput placeholder="Enter building name" style={{color:'#272727BF',textAlignVertical:'center',paddingLeft:10}} value={bldgName} onChangeText={(text)=>{setBldgName(text)}}/></View>
                <View style={{borderBottomWidth:1,borderColor:'#C9C9C9',marginHorizontal:'3%',marginVertical:'2%'}}><TextInput placeholder="Enter a Landmark" style={{color:'#272727BF',textAlignVertical:'center',paddingLeft:10}} value={landMark} onChangeText={(text)=>{setLandMark(text)}}/></View>
                <View style={{borderBottomWidth:1,borderColor:'#C9C9C9',marginHorizontal:'3%',marginVertical:'2%'}}><TextInput placeholder="Enter your Area" style={{color:'#272727BF',textAlignVertical:'center',paddingLeft:10}} value={area} onChangeText={(text)=>{setArea(text)}}/></View>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginHorizontal:'3%',marginVertical:'2%'}}>
                    <View>
                        <Text>City</Text>
                    </View>
                    <View>
                        <Text>State</Text>
                    </View>
                </View>
                <View></View>
                <View></View>
                <View></View>
            </ScrollView>
            <View style={{position:'absolute',bottom:0,width:'100%',height:(WINDOW_HEIGHT*10)/100,backgroundColor:'white',justifyContent:'center'}}>
                    <Pressable style={{backgroundColor:'#EBA500',margin:'2%',padding:'2%',justifyContent:'center',alignItems:'center',borderRadius:10}} onPress={()=>onApplyPress()}>
                        <Text style={{color:'white',fontWeight:'bold',fontSize:23}}>
                            Add Address
                        </Text>
                    </Pressable>
            </View>
        </View>
    )
}
export default AddAddress