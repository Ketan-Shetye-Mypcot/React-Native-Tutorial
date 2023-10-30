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
            <View style={{flexDirection:'row',columnGap:20}}>
                <View>
                    {
                        radioId==item.id?
                        <RadioButton isRadioButtonPressed={true} onPress={onSortListItemPress} itemId={item.id}/> :
                        <RadioButton isRadioButtonPressed={false} onPress={onSortListItemPress} itemId={item.id}/>
                    }
                    
                </View>
                <View>
                    {
                        radioId==item.id?
                        <Text style={{color:'#EBA500',fontWeight:'bold',fontSize:15}}>{item.sortby}</Text>:
                        <Text style={{color:'black',fontWeight:'400'}}>{item.sortby}</Text>
                    }
                </View>
            </View>
            }
            keyExtractor={item=>item.id}
        />
        </View>
    )
}
export default Sort