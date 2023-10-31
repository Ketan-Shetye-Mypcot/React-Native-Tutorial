import { View, StyleSheet, ScrollView,Text,FlatList,BackHandler } from 'react-native'
import NewsLetter from '../../components/newsletter'
import HomeListComponents from '../../components/homelist'
import { CategoryLsit } from '../../jsons/categoryList'
import Carausel from '../../components/carausel'
import { CarauselImages } from '../../jsons/carausel'
import CategoryItem from '../../components/category-item-card'
import ProductList from '../../components/product-list'
import { DealOfDayList } from '../../jsons/dealOfDayList'
import { useEffect } from 'react'


const MainHome = (props)=>{
    const data = props.route.params
    const onCategoryPress=(CategoryName)=>{
        props.navigation.navigate("CategoryItems")
    }
    const onProductCardPress=(productImage,productName,productOldPrice,ProductCurrPrice,ProductofferPercent)=>{
        props.navigation.navigate("ProductCardDetails",{params:{productImage,productName,productOldPrice,ProductCurrPrice,ProductofferPercent}})
    }


    
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal:20,paddingVertical:20,columnGap:35}}
                data={CategoryLsit}
                renderItem={({item})=>
                <CategoryItem
                image={item.image}
                text={item.name}
                isOnHomePage={true}
                onPress={onCategoryPress}
                />
                }
                keyExtractor={item=>item.id}
                />
                <ProductList
                text='Deal Of The Day'
                image={require('../../assets/dealOfDayImages/Fire.png')}
                data={DealOfDayList}
                onPress={onProductCardPress}
                />
                <Carausel data={CarauselImages}/>
                <ProductList
                text='New Products'
                image={require('../../assets/dealOfDayImages/Fire.png')}
                data={DealOfDayList}
                onPress={onProductCardPress}
                />
                <NewsLetter/>
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    MainHomeList:{
        backgroundColor:'#FEFCF5',
        marginVertical:24,
    },
    newsletterContainer:{
        marginHorizontal:24,
        marginVertical:24
    },
    categoryListContainer:{
        marginLeft:24,
        marginTop:24,
        marginBottom:24
    },
    dealOfDayListContainer:{
        marginLeft:24,
        marginTop:24,
        marginBottom:24
    },
    newProductsListContainer:{
        marginLeft:24,
        marginTop:24,
        marginBottom:24
    }
})

export default MainHome;


