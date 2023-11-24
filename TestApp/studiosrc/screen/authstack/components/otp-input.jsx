import { useState,useEffect } from 'react'
import  {View, Text, TextInput} from 'react-native'

const OTPInput=(props)=>{
    
    const [otp,setOTP] = useState({otp1:'',otp2:'',otp3:'',otp4:''})
    const [otpPin,setOTPPIN] = useState(otp.otp1+''+otp.otp2+''+otp.otp3+''+otp.otp4)
    const [otpFocus,setOtpFocus] = useState({otp1:false,otp2:false,otp3:false,otp4:false})
    const handleInputChange = (inputText) => {
        const text = inputText.replace(/[^0-9]/g, '');
        let otp = {
            otp1:text.charAt(0),
            otp2:text.charAt(1),
            otp3:text.charAt(2),
            otp4:text.charAt(3)
        }
        if(text.length == 1){
            let focus = {
                otp1:true,
                otp2:false,
                otp3:false,
                otp4:false
            }
            setOtpFocus(focus)
        }else if(text.length == 2){
            let focus = {
                otp1:false,
                otp2:true,
                otp3:false,
                otp4:false
            }
            setOtpFocus(focus)
        }else if(text.length == 3){
            let focus = {
                otp1:false,
                otp2:false,
                otp3:true,
                otp4:false
            }
            setOtpFocus(focus)
        }else if(text.length == 4){
            let focus = {
                otp1:false,
                otp2:false,
                otp3:false,
                otp4:true
            }
            setOtpFocus(focus)
        }
        setTimeout(()=>{
            if(text.length == 4){
                let focus = {
                    otp1:false,
                    otp2:false,
                    otp3:false,
                    otp4:false
                }
                setOtpFocus(focus)
            }
        },1000)
        
        setOTPPIN(text)
        setOTP(otp)

      };
    useEffect(()=>{
        if(otp.otp4.length === 1){
            props.onSetOTP(otpPin)
        }  
    },[otp.otp4])
    return(
        <View style={{width:'100%'}}>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <View style={{justifyContent:'center',alignItems:'center', borderBottomWidth:1,borderColor:otpFocus.otp1?'#FFC534':'white',width:40}}>
                <Text style={{color:otpFocus.otp1?'#FFC534':'white',fontSize:20,padding:10,fontFamily:otpFocus.otp1?'Inter-Bold':'Inter-Regular'}}>
                {otp.otp1}
                </Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'center', borderBottomWidth:1,borderColor:otpFocus.otp2?'#FFC534':'white',width:40}}>
                <Text style={{color:otpFocus.otp2?'#FFC534':'white',fontSize:20,padding:10,fontFamily:otpFocus.otp2?'Inter-Bold':'Inter-Regular'}}>
                {otp.otp2}
                </Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'center', borderBottomWidth:1,borderColor:otpFocus.otp3?'#FFC534':'white',width:40}}>
                <Text style={{color:otpFocus.otp3?'#FFC534':'white',fontSize:20,padding:10,fontFamily:otpFocus.otp3?'Inter-Bold':'Inter-Regular'}}>
                {otp.otp3}
                </Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'center', borderBottomWidth:1,borderColor:otpFocus.otp4?'#FFC534':'white',width:40}}>
                <Text style={{color:otpFocus.otp4?'#FFC534':'white',fontSize:20,padding:10,fontFamily:otpFocus.otp4?'Inter-Bold':'Inter-Regular'}}>
                {otp.otp4}
                </Text>
            </View>
            </View>
            
            <TextInput
            value={otpPin}
            style={{color:'white',fontSize:20,position:'absolute',width:'100%',opacity:0}}
            maxLength={4}
            keyboardType='numeric'
            onChangeText={handleInputChange}
            />
        </View>
    )
}

export default OTPInput
