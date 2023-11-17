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
                    <View style={{width:'90%',alignItems:'center'}}>
                        <Text style={styles.headerText}>{props.headerTitle}</Text>
                    </View>
                    <View style={{width:'10%',alignItems:'flex-end'}}>
                        <Pressable style={styles.stylePressable} >
                            <View style={{justifyContent:'center'}}>
                            <Image source={require('../assets/translating.png')} style={styles.pressableImg}/>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center',paddingTop:2}}>
                            <Text style={styles.stylePressableText}>EN</Text>
                            </View>
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
                <View style={{width:'100%',justifyContent:'center',rowGap:20,height:150}}>
                <View style={{width:'100%',flexDirection:'row'}}>
                    <View style={{width:'5%',justifyContent:'center'}}>
                        <Pressable onPress={()=>props.onPress()} >
                            <Image source={require('../assets/ArrowLeft.png')} />
                        </Pressable>
                    </View>
                    <View style={{width:'80%',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontWeight:'bold',fontSize:25,fontStyle:'italic'}}>{props.headerTitle.toUpperCase()}</Text>
                    </View>
                </View>
                <View style={{width:width,paddingRight:'8%'}}>
                    <TextBox value={name} onChangeText={setName} isSearchBox={true} placeholder='search here'/>
                </View>
                </View> :
                null
            }
            {
                props.isProductCardDetails?
                <View style={{flexDirection:'row'}}>
                    <View style={{width:'0%',justifyContent:'center',overflow:'visible'}}>
                        <Pressable onPress={()=>props.onPress()} >
                            <Image source={require('../assets/ArrowLeft.png')} />
                        </Pressable>
                    </View>
                    <View style={{width:'100%',alignItems:'center',justifyContent:'center',paddingRight:20}}>
                        <Text style={{fontWeight:'bold',fontSize:25,color:'black',textTransform:'capitalize',fontFamily:'HindMadurai-Medium'}}>{props.headerTitle}</Text>
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
        fontSize:20,
        fontWeight:'500',
        color:'#272727',
        paddingHorizontal:5,
        borderBottomWidth:2,
        fontFamily:'HindMadurai-Medium',
        borderColor:'#5D5D5D'
    },
    searchTextBoxContainer:{
        // marginVertical:16
    }
})

export default Header;