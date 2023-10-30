import React, { useState } from 'react';
import {
  Text,
  View,
  Pressable,
  Image,
  StyleSheet
} from 'react-native';

const ToggleSwitch = (props)=>{
    
    return(
        <Pressable onPress={()=>{props.setToggleOnOff()}}>
            <Image 
            source={
                        props.toggle?
                        require('../assets/on-button.png'):
                        require('../assets/off-button.png')
                    } 
            style={styles.styleToggle}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    styleToggle : {
        width:29,
        height:29
    }
});

export default ToggleSwitch;