import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Pressable
} from 'react-native';
import Modal from "react-native-modal";

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const Modaal = (props)=>{
    return(
        <View>
            <Modal isVisible={props.showModal}>
                <View style={styles.modalBox}>
                    <View style={styles.modalImgBox}>
                        <Image source={require('../assets/email.png')} style={styles.modalImgStyle}/>
                    </View>
                    <View style={styles.modalTextBox}>
                    <View>
                        <Text style={{alignSelf:'center',color:'#d5fcee',fontSize:25}}>Thank you for your</Text>
                        <Text style={{alignSelf:'center',color:'#d5fcee',fontSize:25}}>registeration!</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Text style={{color:'#9fe3c3',fontSize:18,textAlign:'center',width:'80%'}}>
                            We're glad you're here!
                            Before you start exploring, we
                            just sent you the email
                            confirmation
                        </Text>
                    </View>
                    </View>
                    <View style={styles.modalBtnBox}>
                        <Pressable style={styles.modalBtn}>
                            <Text style={{color:'#c8c8c8',alignSelf:'center',fontSize:20}} onPress={()=>{props.resendEmailConfimation()}}>RESEND</Text>
                        </Pressable>
                        <Pressable style={styles.modalBtn} onPress={()=>{props.executeFunction()}}>
                            <Text style={{color:'#c8c8c8',alignSelf:'center',fontSize:20}}>LOGIN</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    modalBox :{
        flex:1,
        backgroundColor:'#1cb273',
        marginVertical:(height*10)/100,
        marginHorizontal:(width*3)/100,
        borderRadius:20,
        justifyContent:'space-evenly'
    },
    modalImgBox:{

    },
    modalImgStyle:{
        height:150,
        width:150,
        alignSelf:'center'
    },
    modalTextBox:{
        rowGap:20
    },
    modalBtnBox:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        gap:20
    },
    modalBtn:{
        backgroundColor:'black',
        paddingHorizontal:20,
        paddingVertical:15,
        borderRadius:20
    }
});

export default Modaal;
