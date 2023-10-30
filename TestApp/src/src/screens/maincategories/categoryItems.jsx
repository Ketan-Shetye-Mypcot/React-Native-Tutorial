import { View, Text,FlatList, Dimensions } from 'react-native'
import {useState,useEffect} from 'react'
import CategoryListComponents from '../../components/categorylist'
import { CategoryLsit } from '../../jsons/categoryList'
import { food,vegies,snack,cosmetics } from '../../jsons/categoryItemList'
import CategoryItem from '../../components/category-item-card'
import ProductComponent from '../../components/product-card'
import Filter from '../../components/filter'
const WINDOW_WIDTH = Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const CategoryItems = (props)=>{
    const [highlightCategory,setHighlightCategory]=useState(0)
    const ROUTE_DATA = props.route.params
    const onCategoryItemPress=(id)=>{
        setHighlightCategory(id)
    }
    return(
        <View style={{flex:1,flexDirection:'row'}}>
            <View style={{width:(WINDOW_WIDTH*20)/100,height:'100%',elevation:40}}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={CategoryLsit}
                    contentContainerStyle={{justifyContent:'center',alignItems:'center',rowGap:20,paddingVertical:20,backgroundColor:'white'}}
                    renderItem={({item})=>
                    <CategoryItem
                    image={item.image}
                    text={item.name}
                    id={item.id}
                    isOnHomePage={false}
                    onPress={onCategoryItemPress}
                    onPressCategoryHighlight={highlightCategory}
                    />
                    }
                    keyExtractor={item=>item.id}
                    />
            </View>
            <View style={{width:(WINDOW_WIDTH*80)/100,height:'100%'}}>
                <FlatList
                numColumns={2}
                showsVerticalScrollIndicator={false}
                data={vegies}
                contentContainerStyle={{rowGap:6,paddingLeft:2.5,paddingVertical:10}}
                renderItem={({item})=>
                    <ProductComponent
                    isOfferOnProduct={true}
                    percentOff='15'
                    CardWidth={(WINDOW_WIDTH*38)/100}
                    CardHeight='auto'
                    image={item.image}
                    productName={item.name}
                    productWt='500mg'
                    productPrice='EGP 199.45'
                    productOfferPrice='EGP 99.45'
                    />
                    }
                keyExtractor={item=>item.id}
                />
            </View>
            <Filter/>
        </View>
    )
}

export default CategoryItems