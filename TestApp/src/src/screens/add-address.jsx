import { View,Text,Pressable,Dimensions,ImageBackground,ScrollView,Image,TextInput } from "react-native";
import {useState} from 'react'
import DropdownComponent from "../components/dropdown";
import ToggleSwitch from "../../components/toggleswitch";


const WINDOW_WIDTH= Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height
const CityList = [
    { label: 'City 1', value: '1' },
    { label: 'City 2', value: '2' },
    { label: 'City 3', value: '3' },
    { label: 'City 4', value: '4' },
    { label: 'City 5', value: '5' },
    { label: 'City 6', value: '6' },
    { label: 'City 7', value: '7' },
    { label: 'City 8', value: '8' },
  ];
const StateList = [
{ label: 'State 1', value: '1' },
{ label: 'State 2', value: '2' },
{ label: 'State 3', value: '3' },
{ label: 'State 4', value: '4' },
{ label: 'State 5', value: '5' },
{ label: 'State 6', value: '6' },
{ label: 'State 7', value: '7' },
{ label: 'State 8', value: '8' },
];


const AddAddress=(props)=>{
    const workLabel = 'Work'
    const homeLabel = 'Home'
    const otherLabel = 'Other'
    const [countryCode,setCountryCode] = useState('+249')
    const [moboNo,setMoBoNo]= useState('')
    const [houseNo,setHouseNo]=useState('')
    const [bldgName,setBldgName]=useState('')
    const [landMark,setLandMark]=useState('')
    const [area,setArea] =useState('')
    const [city,setCity]=useState('')
    const [state,setState]=useState('')
    const [addressLabel,setAddressLabel]=useState('')
    const [defaultAddress,setDefaultAddress]=useState(false)
    const changeDefaultAddress=()=>{
        setDefaultAddress(!defaultAddress)
    }
    const addressDetails={
        countryCode:countryCode,
        moboNo:moboNo,
        houseNo:houseNo,
        bldgName:bldgName,
        landMark:landMark,
        area:area,
        city:city,
        state:state,
        addressLabel:addressLabel
    }
    const onAddAddressPress=()=>{
        props.navigation.navigate('Address',{params:{addressDetails}})
    }
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{rowGap:20,paddingHorizontal:'5%',justifyContent:'center',marginBottom:(WINDOW_HEIGHT*10)/100,paddingTop:'5%'}}>
                <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:'#C9C9C9',alignItems:'center'}}>
                    <View style={{borderRightWidth:2,borderColor:'#C9C9C9',height:'80%'}}><TextInput placeholder="+249" value={countryCode} onChangeText={(text)=>{setCountryCode(text)}} style={{color:'#272727BF',fontSize:16}} placeholderTextColor='#5D5D5D'/></View>
                    <View><TextInput placeholder="Enter your mobile number" style={{color:'#272727BF',textAlignVertical:'center',paddingLeft:10,fontSize:16}} value={moboNo} onChangeText={(text)=>{setMoBoNo(text)}} keyboardType='numeric' placeholderTextColor='#5D5D5D'/></View>
                </View>
                <View style={{borderBottomWidth:1,borderColor:'#C9C9C9'}}><TextInput placeholder="Enter house no. & floor" style={{color:'#272727BF',textAlignVertical:'center',paddingLeft:10,fontSize:16}} value={houseNo} onChangeText={(text)=>{setHouseNo(text)}} keyboardType='name-phone-pad' placeholderTextColor='#5D5D5D'/></View>
                <View style={{borderBottomWidth:1,borderColor:'#C9C9C9'}}><TextInput placeholder="Enter building name" style={{color:'#272727BF',textAlignVertical:'center',paddingLeft:10,fontSize:16}} value={bldgName} onChangeText={(text)=>{setBldgName(text)}} placeholderTextColor='#5D5D5D'/></View>
                <View style={{borderBottomWidth:1,borderColor:'#C9C9C9'}}><TextInput placeholder="Enter a Landmark" style={{color:'#272727BF',textAlignVertical:'center',paddingLeft:10,fontSize:16}} value={landMark} onChangeText={(text)=>{setLandMark(text)}} placeholderTextColor='#5D5D5D'/></View>
                <View style={{borderBottomWidth:1,borderColor:'#C9C9C9'}}><TextInput placeholder="Enter your Area" style={{color:'#272727BF',textAlignVertical:'center',paddingLeft:10,fontSize:16}} value={area} onChangeText={(text)=>{setArea(text)}} placeholderTextColor='#5D5D5D'/></View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <DropdownComponent data={CityList} placeholder='Select City' searchPlaceholder='Search City' value={city} setValue={setCity}/>
                    <DropdownComponent data={StateList} placeholder='Select State' searchPlaceholder='Search State' value={state} setValue={setState}/>
                </View>
                <View style={{rowGap:15}}>
                    <View><Text style={{color:'black',fontSize:22 ,opacity:0.7}}>Select Address Label</Text></View>
                    <View  style={{flexDirection:'row',columnGap:25,justifyContent:'flex-start'}}>
                        <Pressable style={{backgroundColor:addressLabel===homeLabel?'#EBA500':'#FEFAF2',borderRadius:15}} onPress={()=>setAddressLabel(homeLabel)}><Text style={{color:addressLabel===homeLabel?'white':'#EBA500',fontWeight:'bold',fontSize:20,padding:'1%',paddingHorizontal:'2%'}}>{homeLabel}</Text></Pressable>
                        <Pressable style={{backgroundColor:addressLabel===workLabel?'#EBA500':'#FEFAF2',borderRadius:15}} onPress={()=>setAddressLabel(workLabel)}><Text style={{color:addressLabel===workLabel?'white':'#EBA500',fontWeight:'bold',fontSize:20,padding:'1%',paddingHorizontal:'2%'}}>{workLabel}</Text></Pressable>
                        <Pressable style={{backgroundColor:addressLabel===otherLabel?'#EBA500':'#FEFAF2',borderRadius:15}} onPress={()=>setAddressLabel(otherLabel)}><Text style={{color:addressLabel===otherLabel?'white':'#EBA500',fontWeight:'bold',fontSize:20,padding:'1%',paddingHorizontal:'2%'}}>{otherLabel}</Text></Pressable>
                    </View>
                </View>
                <View style={{flexDirection:'row',columnGap:15}}>
                    <ToggleSwitch setToggleOnOff={changeDefaultAddress} toggle={defaultAddress}/>
                    <View style={{justifyContent:'center',alignItems:'center'}}><Text>Keep as Default Address</Text></View>
                </View>
                </View>
            </ScrollView>
            <View style={{position:'absolute',bottom:0,width:'100%',height:(WINDOW_HEIGHT*10)/100,backgroundColor:'white',justifyContent:'center'}}>
                <Pressable style={{backgroundColor:'#EBA500',margin:'2%',padding:'2%',justifyContent:'center',alignItems:'center',borderRadius:10}} onPress={()=>onAddAddressPress()}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:23}}>
                        Add Address
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}
export default AddAddress