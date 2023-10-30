import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Dimensions,
    ImageBackground,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';
import InputTextBox from '../components/inputtextbox';
import Button from '../components/button';
import WordButton from '../components/wordbutton';
import Modaal from '../components/modal';
import SecureInputTextBox from '../components/secureinputbox';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const email_validation_regex  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const password_validation_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/


const Register = (props) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage,setErrorMessage]=useState({email:false,name:false,password:false})
    const [showModal, setShowModal] = useState(false)
    const [errMsg,setErrMsg] = useState({email:'',name:'',password:''})
    const[vali,setVali] = useState(false)
    
    const validateInput = () => {
        let errObj = {
            email:false,
            name : false,
            password : false,
        }
        let errMsg = {
            email:'',
            name:'',
            password:''
        }
        
        if (!email.trim()) {
            errObj.email=true
            errMsg.email='Enter a valid Email'
        }else if(!email_validation_regex.test(email)){
            errObj.email=true
            errMsg.email='wrong Email-Id'
        }else{
            errObj.email=false
            errMsg.email=''
        }

        if(!name.trim()){
            errObj.name=true 
            errMsg.name='Enter a valid Name'
        }else{
            errObj.name=false
            errMsg.name=''
        }

        if(!password.trim()){
            errObj.password=true 
            errMsg.password='Enter a Valid Passowrd'
        }else if(!password_validation_regex.test(password)){
            errObj.password=true
            errMsg.password='password must contain:- Minimum eight characters, at least one letter, one number and one special character'
        }else{
            errObj.password=false
            errMsg.password=false
        }

        setErrorMessage(errObj)
        setErrMsg(errMsg)
        

        if (!errObj.email && !errObj.name && !errObj.password ) {
            return true
            setVali(false)
        }else{
            setVali(true)
            return false
        }      
    }


const RegisterUser = () => {
    try {
        let validate = validateInput();
        if(validate){
            setShowModal(true);
        }
    } catch (error) {
        console.warn(error)
    }
}

    const goToLogin = () => {
        setEmail('')
        setName('')
        setPassword('')
        props.navigation.navigate("Login")
        setShowModal(false)
    }

    const goToLoginPageDirectly = () => {
        setEmail('')
        setName('')
        setPassword('')
        setErrorMessage({email:false,name:false,password:false})
        props.navigation.navigate("Login")
    }

    const resendEmail = () => {
       setShowModal(false)
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#2aba7d' }}>
            <Modaal showModal={showModal} executeFunction={goToLogin} resendEmailConfimation={resendEmail} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1, justifyContent:'space-between'}}>
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/Sign-up-bro.png')} style={styles.img} resizeMode='cover' />
                </View>
                <View style={styles.formContainer}>
                    <Text style={{ color: '#5a5a62', fontWeight: 'bold', alignSelf: 'center', fontSize: 30, margin: 15 }}>Create New Account</Text>
                    <View style={{ flex: 1, backgroundColor: '#fff', borderTopRightRadius: 45, borderTopLeftRadius: 45,rowGap:20}}>
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'center',columnGap:15,paddingVertical:15}}>
                                <Image source={require('../assets/instagram.png')} style={{ width: 40, height: 40 }} />
                                <Image source={require('../assets/facebook.png')} style={{ width: 40, height: 40 }} />
                                <Image source={require('../assets/twitter.png')} style={{ width: 40, height: 40 }} />
                            </View>
                            <Text style={{ alignSelf: 'center', fontSize: 18, color: '#c0c0c0' }}>or use your email account</Text>
                        </View>

                        <View style={{ paddingHorizontal: 25,rowGap:15}}>
                            <View>
                                <InputTextBox placeholder='Email' value={email} executeFunction={setEmail} showErrorMsg={errorMessage.email} errorMsg={errMsg.email}/>
                            </View>

                            <View>
                                <InputTextBox placeholder='Name' value={name} executeFunction={setName} showErrorMsg={errorMessage.name} errorMsg={errMsg.name} />  
                            </View>
                            <View>
                                <SecureInputTextBox placeholder='Password' value={password} executeFunction={setPassword} showErrorMsg={errorMessage.password} errorMsg={errMsg.password}/>
                            </View>
                            <View><Button title='Register' excuteFunction={RegisterUser} /></View>
                        </View>
                        <View style={{ flexDirection: 'row',paddingBottom:10, justifyContent: 'center', gap: 5}}>
                            <Text style={{ color: '#c0c0c0', fontSize: 14 }}>Already have an account? </Text><WordButton title='Login here' executeFunction={goToLoginPageDirectly} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
// ,,rowGap:15
// ,marginTop:'60%'
const styles = StyleSheet.create({
    bgImgStyle: {
        flex: 1,
        justifyContent: 'center'
    },
    imgContainer: {
        height: (height * 30) / 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        height: 'auto',
        backgroundColor: '#eee',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45
    },
    img: {
        marginTop: 50,
        width: '50%',
        height: '90%',
        justifyContent: 'center',
    },
    
});

export default Register;