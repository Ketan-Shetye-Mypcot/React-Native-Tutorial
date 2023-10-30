import React from 'react';
import { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    Dimensions,
    Pressable,
    Image
} from 'react-native';

const width = Dimensions.get('window').width
let errorShown = false
const SecureInputTextBox = (props) => {
    const [focusColor, setFocusColor] = useState("#eee")
    const [hideText, setHideText] = useState(true)
    if(props.showErrorMsg){
        errorShown=true
      }
    return (
        <View>
            {
                props.showErrorMsg ?
                    <View>
                        <View style={styles.styleSecureBox}>
                            <TextInput
                                placeholder={props.placeholder}
                                value={props.value}
                                secureTextEntry={hideText}
                                onChangeText={(text) => props.executeFunction(text)}
                                onFocus={() => {
                                    setFocusColor('#1cb273')
                                }}
                                onBlur={() => {
                                    setFocusColor('#eee')
                                }}
                                style={[styles.secureInput, { borderColor: focusColor, borderRightWidth: 0 }]}
                            />
                            <Pressable style={[styles.secureBtn, { borderColor: focusColor, borderLeftWidth: 0 }]} onPressIn={() => { setHideText(false) }} onPressOut={() => { setHideText(true) }}>
                                <Image source={require('../assets/view.png')} style={styles.secureBtmImg} />
                            </Pressable>
                        </View>
                        <Text style={styles.errorMsg}>{props.errorMsg}</Text>
                    </View> :
                    <View>
                        <View style={styles.styleSecureBox}>
                            <TextInput
                                placeholder={props.placeholder}
                                value={props.value}
                                secureTextEntry={hideText}
                                onChangeText={(text) => props.executeFunction(text)}
                                onFocus={() => {
                                    setFocusColor('#1cb273')
                                }}
                                onBlur={() => {
                                    setFocusColor('#eee')
                                }}
                                style={[styles.secureInput, { borderColor: focusColor, borderRightWidth: 0 }]}
                            />
                            <Pressable style={[styles.secureBtn, { borderColor: focusColor, borderLeftWidth: 0 }]} onPressIn={() => { setHideText(false) }} onPressOut={() => { setHideText(true) }}>
                                <Image source={require('../assets/view.png')} style={styles.secureBtmImg} />
                            </Pressable>
                        </View>
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    secureInput: {
        height: 50,
        width: '88%',
        borderWidth: 1,
        padding: 10,
        textAlignVertical: 'center',
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        marginBottom : errorShown ? 0 : null
    },
    secureBtn: {
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        width: '12%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    secureBtmImg: {
        width: 29,
        height: 29
    },
    styleSecureBox: {
        flexDirection: 'row'
    },
    errorMsg: {
        color: 'red',
        paddingLeft: 8,
        marginTop: 0,
        fontSize: 15
    }
});

export default SecureInputTextBox;