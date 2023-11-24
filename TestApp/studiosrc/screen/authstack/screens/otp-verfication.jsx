import { View, Text, ImageBackground, Pressable, Image, Dimensions, TextInput, ScrollView, Keyboard } from 'react-native'
import { useState,useEffect } from 'react'
import LeftArrow from '../svg/left-arrow';
import OTPInput from '../components/otp-input';
const WINDOW_WIDTH = Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const OTPVerification = () => {

    
    const [otp,setOTP] = useState('')
    const onSetOTP  = (otpPin)=>{
        setOTP(otpPin)
    }
    
    
    return (
        <View style={{flex:1}}>
            <ScrollView>
            <ImageBackground source={require('../assets/otp-bg.png')} resizeMode='cover' >
                <View style={{ width: WINDOW_WIDTH, height: WINDOW_HEIGHT, justifyContent: 'space-evenly', alignItems: 'center', paddingHorizontal: (WINDOW_WIDTH * 10) / 100 }}>
                    <View style={{ position: 'absolute', top: 10, left: 10, backgroundColor: 'rgba(255,255,255,0.3)', width: 40, height: 40, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <LeftArrow />
                    </View>
                    <View style={{ width: '100%' }}>
                        <View><Text style={{ color: '#F6F6F6', fontFamily: 'Inter-ExtraBold', fontSize: 30 }}>OTP Verification</Text></View>
                        <View><Text style={{ color: '#F6F6F6', fontFamily: 'Inter-Regular', fontSize: 13 }}>Enter the OTP number we have sent on your registered number</Text></View>
                    </View>
                    <OTPInput onSetOTP={onSetOTP}/>
                    <View style={{ width: '100%' }}>
                        <Pressable style={{ backgroundColor: '#FD4B01', justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
                            <Text style={{ color: 'white', fontFamily: 'Inter-Bold', padding: 18 }}>Proceed</Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
            </ScrollView>
        </View>
    )
}
export default OTPVerification