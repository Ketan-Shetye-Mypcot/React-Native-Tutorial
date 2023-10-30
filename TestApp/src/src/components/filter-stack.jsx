import {View,Image, Pressable,Text,Dimensions,Modal} from 'react-native'
import { useState,useEffect } from 'react'
import Sort from './sort-component'
import Brand from './brand-component'

const WINDOW_WIDTH = Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const FilterModal = (props)=>{
    const [sortPress,setSortPress] = useState(false)
    const [brandPress,setBrandPress] = useState(false)

    useEffect(()=>{
        setSortPress(true)
        setBrandPress(false)
    },[])

    const onSortPress =()=>{
        setSortPress(true)
        setBrandPress(false)
    }
    const onBrandPress=()=>{
        setBrandPress(true)
        setSortPress(false)
    }
    return(
        <Modal visible={props.showModal} transparent={true} animationType='slide'>
            <View style={{backgroundColor:'white',width:WINDOW_WIDTH,height:(WINDOW_HEIGHT*70)/100,borderTopLeftRadius:40,borderTopRightRadius:40,bottom:0,position:'absolute'}}>
                <View style={{width:'100%',height:'20%',borderBottomWidth:1,borderColor:'#F1F1F1',flexDirection:'row'}}>
                    <View style={{width:'50%',height:'100%',justifyContent:'flex-end'}}>
                        <Text style={{color:'black',fontWeight:'bold',fontSize:25,margin:25}}>Filter</Text>
                    </View>
                    <View style={{width:'50%',height:'100%'}}>
                        <Pressable style={{position:'absolute',top:-20,right:10}} onPress={()=>props.onCrossPress()}><Image source={require('../assets/Close.png')}/></Pressable>
                    </View>
                </View>
                <View style={{flexDirection:'row',height:'65%'}}>
                    <View style={{width:'30%',rowGap:20,paddingVertical:20,borderRightWidth:1,borderColor:'#F1F1F1',overflow:'visible'}}>
                        <Pressable style={{width:'104%',paddingLeft:20,borderRadius:5,borderRightWidth:sortPress?4:0,borderColor:'#EBA500',}} onPress={onSortPress}>
                            <Text style={{color:sortPress?'#EBA500':'black',fontSize:20,fontWeight:sortPress?'bold':'500'}}>Sort</Text>
                        </Pressable>
                        <Pressable style={{width:'104%',paddingLeft:20,borderRadius:5,borderColor:'#EBA500',borderRightWidth:brandPress?4:0}} onPress={onBrandPress}>
                            <Text style={{color:brandPress?'#EBA500':'black',fontSize:20,fontWeight:brandPress?'bold':'500'}}>Brand</Text>
                        </Pressable>
                    </View>
                    <View style={{width:'70%'}}>
                        {
                            sortPress?
                            <Sort/>:
                            null
                        }
                        {
                            brandPress?
                            <Brand/>:
                            null
                        }
                    </View>
                </View>
                <View style={{width:'100%',alignItems:'center',justifyContent:'center',height:'15%',alignItems:'center'}}>
                    <Pressable style={{backgroundColor:'#EBA500',width:'90%',justifyContent:'center',alignItems:'center',borderRadius:8,height:'70%',elevation:20}}>
                        <Text style={{fontWeight:'bold',color:'white',fontSize:20}}>
                            Apply
                        </Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default FilterModal