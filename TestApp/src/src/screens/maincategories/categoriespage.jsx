import {useEffect, useState} from 'react'
import { View, Text,FlatList } from 'react-native'
import CategoryListComponents from '../../components/categorylist'
import { CategoryLsit } from '../../jsons/categoryList'
import { food,vegies,snack,cosmetics } from '../../jsons/categoryItemList'
import CategoryComponent from '../../components/category-card'

const CategoryPage = (props)=>{
    const ROUTE_DATA= props.route.params
    const onCategoryPress =(categoryName,categoryId)=>{
        ROUTE_DATA.setHeaderName(categoryName)
        ROUTE_DATA.setNotShow()
        props.navigation.navigate('CategoryItem',{categoryId:categoryId,navigatedFrom:'CategoryPage'})
    }
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
            <FlatList
                numColumns={3}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{columnGap:20,paddingHorizontal:12,rowGap:20,paddingVertical:20}}
                data={CategoryLsit}
                renderItem={({item})=>
                    <CategoryComponent
                    id={item.id}
                    text={item.name}
                    image={item.image}
                    onPressCategory={onCategoryPress}
                    />
                }
                keyExtractor={item=>item.id}
                />
        </View>
    )
}

export default CategoryPage