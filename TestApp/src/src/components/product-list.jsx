import { View,Text,FlatList,Dimensions,Pressable,Image } from "react-native";
import ProductComponent from "./product-card";
const WINDOW_WIDTH= Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const ProductList=(props)=>{
    return(
        <View style={{backgroundColor:'white'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,paddingVertical:20}}>
                <View style={{flexDirection:'row',alignItems:'center',columnGap:10}}>
                    <View>
                        <Text style={{fontWeight:'bold',fontSize:18}}>{props.text}</Text>
                    </View>
                    <View>
                        <Image source={props.image}/>
                    </View>
                </View>
                <View>
                    <Pressable><Text style={{fontWeight:'bold', color:'#EBA500',fontSize:18}}>See all</Text></Pressable>
                </View>
            </View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{columnGap:20,paddingHorizontal:20,paddingVertical:20,backgroundColor:'white'}}
                data={props.data}
                renderItem={({item})=>
                    <ProductComponent
                    isOfferOnProduct={true}
                    percentOff='15'
                    CardWidth={(WINDOW_WIDTH*45)/100}
                    CardHeight='auto'
                    image={item.image}
                    productName={item.name}
                    productWt='500mg'
                    productPrice='EGP 199.45'
                    productOfferPrice='EGP 99.45'
                    isCart={true}
                    />
                    }
                keyExtractor={item=>item.id}
                />
        </View>
    )
}

export default ProductList