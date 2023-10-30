import { View, Text, TextInput,StyleSheet, Image, Pressable, Dimensions } from 'react-native'
import TextBox from './textbox';
import { useState } from 'react';


const width =  Dimensions.get('window').width
const height =  Dimensions.get('window').height
const Header = (props)=>{
    const [name,setName] = useState('')
    return(
        <View>
            {
                props.isBottomTabNavigationPage?
                <View style={{rowGap:20}}>
                <View style={styles.headerTextLanguageChangeContainer}>
                    <View style={{width:'80%',alignItems:'center'}}>
                        <Text style={styles.headerText}>{props.headerTitle}</Text>
                    </View>
                    <View style={{width:'20%',alignItems:'flex-end'}}>
                        <Pressable style={styles.stylePressable} >
                            <Image source={require('../assets/translating.png')} style={styles.pressableImg}/>
                            <Text style={styles.stylePressableText}>EN</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={[styles.searchTextBoxContainer,{width:'100%'}]}>
                    <TextBox value={name} onChangeText={setName} isSearchBox={true} placeholder='search here'/>
                </View>
                </View> :
                null
            }
            {
                props.isCategoryItemPage?
                <View style={[styles.mainHeaderContainer,{rowGap:20}]}>
                <View style={styles.headerTextLanguageChangeContainer}>
                    <View style={{width:'30%'}}>
                        <Pressable style={styles.stylePressable} onPress={()=>props.onPress()}>
                            <Image source={require('../assets/ArrowLeft.png')} style={styles.pressableImg}/>
                        </Pressable>
                    </View>
                    <View style={{width:'70%'}}>
                        <Text style={styles.headerText}>{props.headerTitle.toUpperCase()}</Text>
                    </View>
                </View>
                <View style={styles.searchTextBoxContainer}>
                    <TextBox value={name} onChangeText={setName} isSearchBox={true} placeholder='search here'/>
                </View>
                </View> :
                null
            }
        </View>
        
    )
}

const styles = StyleSheet.create({
    headerTextLanguageChangeContainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    headerText:{
        fontSize:27,
        fontWeight:'bold',
        color:'#000000',
        fontStyle:'italic',
    },
    stylePressable:{
        flexDirection:'row'
    },
    pressableImg:{
        width:28,
        height:28
    },
    stylePressableText:{
        fontWeight:'bold',
        textDecorationLine:'underline',
        fontSize:20,
        fontWeight:'500',
        color:'#272727',
        paddingHorizontal:5
    },
    searchTextBoxContainer:{
        // marginVertical:16
    }
})

export default Header;