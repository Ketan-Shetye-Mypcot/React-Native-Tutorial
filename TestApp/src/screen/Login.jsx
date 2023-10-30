import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
import InputTextBox from '../components/inputtextbox';
import Button from '../components/button';
import WordButton from '../components/wordbutton';
import SecureInputTextBox from '../components/secureinputbox';
import ToggleSwitch from '../components/toggleswitch';
import MainStack from '../src/mainstack';


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


const Login = (props)=>{
    const [loginEmail,setLoginEmail]=useState('')
    const [loginPassword,setLoginPassword]=useState('')
    const [rememberMe,setRememberMe] =useState(false)
    const [errorMsg,setErrorMsg] = useState({loginEmail:false,loginPassword:false})

    const validateLoginCredentials = ()=>{
        let errObj = {
            loginEmail:false,
            loginPassword:false
        }
        if(!loginEmail){
            errObj.loginEmail=true
        }
        if(!loginPassword){
            errObj.loginPassword=true
        }
        setErrorMsg(errObj)
        if(!errObj.loginEmail && !errObj.loginPassword){
            return true
        }else{
            return false
        }
    }

    const onLoginPress = ()=>{
        // if(validateLoginCredentials()){
        //     console.warn('logged In Succesfully')
        // }else{
        //     console.warn('unable to login')
        // }
        props.navigation.navigate("MainStack")
    }

    const onPressToggle = ()=>{
        setRememberMe(!rememberMe)
    }

    const goToRegisterPage=()=>{
        props.navigation.navigate("Register")
    }

    const onForgetPasswordPress=()=>{
        console.warn('forgot password')
    }

    return(
        <View style={{flex:1, backgroundColor:'#2aba7d'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.imgContainer}>
                        <Image source={require('../assets/Login-bro.png')} style={styles.img} resizeMode='cover'/>
                    </View>
                    <View style={styles.formContainer}>
                        <Text style={{color:'#5a5a62', fontWeight:'bold', alignSelf:'center',fontSize:30,margin:15}}>Login to your account</Text>
                        <View style={{flex:1,backgroundColor:'#ffffff',borderTopRightRadius:45,borderTopLeftRadius:45, rowGap:15}}>
                            <View> 
                                <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'center',columnGap:15,paddingVertical:15}}>
                                    <Image source={require('../assets/instagram.png')} style={{ width: 40, height: 40 }} />
                                    <Image source={require('../assets/facebook.png')} style={{ width: 40, height: 40 }} />
                                    <Image source={require('../assets/twitter.png')} style={{ width: 40, height: 40 }} />
                                </View>
                                <Text style={{alignSelf:'center',fontSize:18,color:'#c0c0c0'}}>or use your email account</Text>
                            </View>
                            <View style={{paddingVertical:5,paddingHorizontal:25, flex:0.85, justifyContent:"space-between"}}>
                                <View>
                                    <InputTextBox placeholder='Email' value={loginEmail} executeFunction={setLoginEmail} />
                                    {
                                        errorMsg.loginEmail ? 
                                        <Text style={styles.errorMsg}>Email not found</Text> :
                                        null
                                    }
                                </View>
                                
                                <View>
                                <SecureInputTextBox placeholder='Password' value={loginPassword} executeFunction ={setLoginPassword}/>
                                {
                                    errorMsg.loginPassword ? 
                                    <Text style={styles.errorMsg}>Incorrect Password</Text> :
                                    null
                                }
                                </View>

                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',alignItems:'center',columnGap:2}}>
                                        <View><ToggleSwitch toggle={rememberMe} setToggleOnOff={onPressToggle}/></View>
                                        <View style={{paddingBottom:2}}><Text style={{fontSize:14,color:'#c0c0c0'}}>Remember me</Text></View>
                                    </View>
                                    <View><WordButton title='Forgot Password?' executeFunction={onForgetPasswordPress}/></View>
                                </View>

                                <View style={{marginTop:20}}>
                                    <Button title='Login' excuteFunction={onLoginPress}/>
                                </View>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'center',gap:5}}>
                                <Text style={{color:'#c0c0c0',fontSize:14}}>Don't have an account? </Text><WordButton title='Register here' executeFunction={goToRegisterPage}/>
                            </View>
                        </View>
                    </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    bgImgStyle:{
        flex:1,
        justifyContent:'center'
    },
    imgContainer:{
        height:(height*30)/100,
        justifyContent:'center',
        alignItems:'center'
    },
    formContainer:{
        height:(height*70)/100, 
        backgroundColor:'#eee',
        borderTopLeftRadius:45,
        borderTopRightRadius:45
    },
    img:{
        marginTop:50,
        width:'50%',
        height:'90%',
        justifyContent:'center',
    },
    errorMsg:{
        color:'red',
      paddingLeft:8,
        marginTop:0,

        fontSize:15
    },
    rememberText:{
        height: 30,
        padding: 10,
        marginBottom:0
    }
});

export default Login;