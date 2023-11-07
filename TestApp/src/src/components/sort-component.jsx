import {View,Text,FlatList} from 'react-native'
import RadioButton from './radio-btn'
import {useState,useEffect} from 'react'

const Sort=(props)=>{
    const SortList = require('../jsons/sort.json')
    const [radioPress,setRadioPress] = useState(false)
    const [radioId,setRadioId] =useState(0)
    const onSortListItemPress = (itemId)=>{
        setRadioId(itemId)
    }
    return(
        <View>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={SortList}
            contentContainerStyle={{rowGap:20,paddingVertical:20,paddingHorizontal:20}}
            renderItem={({item})=>
                <View>
                    {
                        radioId==item.id?
                        <RadioButton isRadioButtonPressed={true} onPress={onSortListItemPress} itemId={item.id} sortby={item.sortby} /> :
                        <RadioButton isRadioButtonPressed={false} onPress={onSortListItemPress} itemId={item.id} sortby={item.sortby}/>
                    }
                </View>
            }
            keyExtractor={item=>item.id}
        />
        </View>
    )
}
export default Sort