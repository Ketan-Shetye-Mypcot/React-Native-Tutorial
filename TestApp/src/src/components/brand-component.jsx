import {View,Text,FlatList} from 'react-native'
import CheckBox from './check-box'
import {useState,useEffect} from 'react'
import TextBox from './textbox'

const Brand=()=>{
    const BrandList = require('../jsons/brand.json')
    const [name,setName] = useState('')
    const [curCheckId,setCurCheckId]= useState(-1)
    const onCheckBoxPress=(CheckBoxId)=>{
        if(BrandList[CheckBoxId-1].isChecked){
            BrandList[CheckBoxId-1].isChecked=false
        }else{
            BrandList[CheckBoxId-1].isChecked=true
        }
        if(curCheckId==CheckBoxId){
            setCurCheckId(-1)
        }else{
            setCurCheckId(CheckBoxId)
        }
    }
    useEffect(()=>{
        
    },[curCheckId])
    
    return(
        <View style={{paddingVertical:10}}>
            <View style={{marginHorizontal:'2%'}}><TextBox value={name} onChangeText={setName} isSearchBox={true} placeholder='search here'/></View>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={BrandList}
            contentContainerStyle={{rowGap:20,paddingVertical:20,paddingHorizontal:20}}
            renderItem={({item})=>
            <View style={{flexDirection:'row',columnGap:20}}>
                {
                    item.isChecked ?
                    <CheckBox isChecked={true} onPress={onCheckBoxPress} CheckBoxId={item.id}  brandby={item.brandby}/>
                    :
                    <CheckBox isChecked={false} onPress={onCheckBoxPress} CheckBoxId={item.id} brandby={item.brandby}/>
                }
            </View>
            }
            keyExtractor={item=>item.id}
        />
        </View>
    )
}
export default Brand