import {View,Image, Pressable} from 'react-native'
import { useState } from 'react'
import FilterModal from './filter-stack'

const Filter = ()=>{
    const [showFilter,setShowFilter]= useState(false)
    const onFilterPress=()=>{
        setShowFilter(true)
    }
    const onModalCrossBtnPress=()=>{
        setShowFilter(false)
    }
    return(
        <View style={{backgroundColor:'#EBA500',width:50,height:50,borderRadius:25,position:'absolute',bottom:0,right:0,justifyContent:'center',alignItems:'center',margin:20}}>
            <FilterModal showModal={showFilter} onCrossPress={onModalCrossBtnPress}/>
            <Pressable onPress={onFilterPress}>
                <Image source={require('../assets/Filter.png')} style={{width:30,height:30}}/>
            </Pressable>
        </View>
    )
}

export default Filter