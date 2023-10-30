import { View, Text, TextInput,StyleSheet, Image, Pressable } from 'react-native'
import { useState } from 'react';

const TextBox = (props)=>{
    const [secureEntry,setSecureEntry]= useState(true)
    return(
        <View>
            {
                props.isSearchBox ?
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',width:'100%',backgroundColor:'#FEFCF5',borderColor:'#F9E8BE',borderWidth:1,borderRadius:8}}>
                    <View style={{width:'10%',justifyContent:'center',alignItems:'center'}}><Image source={require('../assets/search.png')} style={{width:20,height:20}}/></View>
                    <View style={{width:'90%'}}><TextInput placeholder={props.placeholder} value={props.value} onChangeText={(text)=>props.onChangeText(text)} style={{textAlignVertical:'center',paddingLeft:10}}/></View>
                </View> 
                :
                null
            }

            {
                props.isTextBox ?
                <View style={styles.textInputMainContainer}>
                    <View style={styles.textInputBox}><TextInput placeholder={props.placeholder} style={styles.textInput} value={props.value} onChangeText={(text)=>props.onChangeText(text)}/></View>
                </View> :
                null
            }

            {
                props.isPasswordBox ?
                <View style={styles.passwordInputMainContainer}>
                    <View style={styles.passwordInputBox}>
                        <TextInput 
                        placeholder={props.placeholder} 
                        style={styles.passwordInput} 
                        value={props.value} 
                        onChangeText={(text)=>props.onChangeText(text)} 
                        secureTextEntry={secureEntry}
                        />
                    </View>
                    <Pressable style={styles.passwordInputImgBox} onPressIn={() => { setSecureEntry(false) }} onPressOut={() => { setSecureEntry(true) }}>
                        <Image source={require('../assets/password.png')} style={styles.passwordInputImg}/>
                    </Pressable>
                </View> :
                null
            }
            {
                props.isEmailBox ?
                <View style={styles.emailInputMainContainer}>
                    <View style={styles.emailInputBox}>
                        <TextInput 
                        placeholder={props.placeholder} 
                        style={styles.emailInput} 
                        value={props.value} 
                        onChangeText={(text)=>props.onChangeText(text)}
                        />
                    </View>
                    <Pressable style={styles.emailInputImgBox} >
                        <Image source={require('../assets/Plain.png')} style={styles.emailInputImg}/>
                    </Pressable>
                </View> :
                null
            }
        </View>
        
    )
}

const styles = StyleSheet.create({
    searchInputBox:{
        borderTopRightRadius:8,
        borderBottomRightRadius:8,
        backgroundColor:'#FEFCF5',
        borderColor:'#F9E8BE',
        borderWidth:0.5,
        borderLeftWidth:0,
        width:'92%'
    },
    searchInputImgBox:{
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
        backgroundColor:'#FEFCF5',
        borderColor:'#F9E8BE',
        borderWidth:0.5,
        borderRightWidth:0,
        width:'8%',
        justifyContent:'center'
    },
    searchInputImg:{
        width:24,
        height:24,
        marginLeft:4
    },
    searchInputMainContainer:{
        flexDirection:'row',
        height:56
    },
    searchInput:{
        textAlignVertical:'center',
        paddingVertical:20,
        paddingLeft:15
    },
    textInputBox:{
        width:'100%',
        borderRadius:8,
        backgroundColor:'#FEFCF5',
        borderColor:'#F9E8BE',
        borderWidth:0.5,
    },
    textInput:{
        textAlignVertical:'center',
        paddingVertical:20
    },
    textInputMainContainer:{
        height:56,
    },
    passwordInputBox:{
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
        backgroundColor:'#FEFCF5',
        borderColor:'#F9E8BE',
        borderWidth:0.5,
        borderRightWidth:0,
        width:'93%'
    },
    passwordInputImgBox:{
        borderTopRightRadius:8,
        borderBottomRightRadius:8,
        backgroundColor:'#FEFCF5',
        borderColor:'#F9E8BE',
        borderWidth:0.5,
        borderLeftWidth:0,
        width:'7%',
        justifyContent:'center'
    },
    passwordInputImg:{
        width:24,
        height:24
    },
    passwordInputMainContainer:{
        flexDirection:'row',
        height:56
    },
    passwordInput:{
        textAlignVertical:'center',
        paddingVertical:20
    },
    emailInputBox:{
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
        backgroundColor:'#FEFCF5',
        borderColor:'#F9E8BE',
        borderWidth:0.5,
        borderRightWidth:0,
        width:'90%'
    },
    emailInputImgBox:{
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
        backgroundColor:'#FEFCF5',
        borderColor:'#F9E8BE',
        borderWidth:0.5,
        borderLeftWidth:0,
        width:'10%',
        justifyContent:'center'
    },
    emailInputImg:{
        width:24,
        height:24,
        marginRight:'100%'
    },
    emailInputMainContainer:{
        flexDirection:'row',
        height:56
    },
    emailInput:{
        textAlignVertical:'center',
        paddingVertical:20,
        paddingLeft:20
    }
})

export default TextBox

