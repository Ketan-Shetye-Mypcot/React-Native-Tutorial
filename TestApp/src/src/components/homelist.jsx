import {View, Text, Image, StyleSheet, Pressable, FlatList,ImageBackground } from 'react-native'
import { DealOfDayList } from '../jsons/dealOfDayList'
import {useState} from 'react'


const HomeListComponents = (props)=>{
    return(
            <View>
             {
                props.isCategoryListHome?
                <FlatList
                    horizontal={props.isHorizontal}
                    vertical={props.isVertical}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{columnGap:20,padding:20}}
                    data={props.data}
                    renderItem={({item})=>
                    <View>
                        <Pressable style={styles.categoryContainer}>
                            <View><Image source={item.image} style={styles.categoryContainerImg}/></View>
                            <View><Text style={styles.categoryContainerText}>{item.name}</Text></View>
                        </Pressable>
                    </View>
                    }
                    keyExtractor={item=>item.id}
                /> :
                null
            }
            {
                props.isDealOfDayList ?
                <View style={{rowGap:20,backgroundColor:'white'}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'white',paddingHorizontal:20}}>
                        <View style={{flexDirection:'row',columnGap:5}}>
                            <View><Text style={{fontWeight:'bold',fontSize:19,paddingLeft:5}}>Deal Of The Day</Text></View>
                            <View><Image source={require('../assets/dealOfDayImages/Fire.png')} style={{paddingTop:3}}/></View>
                        </View>
                        <View>
                            <Pressable><Text style={{color:'#EBA500',fontSize:19,paddingRight:10}}>See all</Text></Pressable>
                        </View>
                    </View>
                    <View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{paddingHorizontal:20,columnGap:20,paddingBottom:20}}
                        data={DealOfDayList}
                        renderItem={({item})=>
                        <View style={{rowGap:20,shadowColor:'#EBA500',elevation: 20,width:200,justifyContent:'center',backgroundColor:'white',borderRadius:8,shadowColor: '#EBA500',elevation: 10}}>
                            <View style={{justifyContent:'flex-start'}}>
                                <ImageBackground source={require('../assets/dealOfDayImages/dealsoffer.png')} style={{width:80,height:30}}>
                                    <Text style={{color:'white',paddingTop:4,paddingLeft:5}}>15% Off</Text>
                                </ImageBackground>
                            </View>
                            <View style={{marginHorizontal:10}}>
                                <Image source={item.image}/>
                            </View>
                            <View style={{marginHorizontal:10}}> 
                                <View><Text style={{fontWeight:'bold',fontSize:16}}>{item.name}</Text></View>
                                <View><Text>500gm</Text></View>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
                                <View>
                                    <View>
                                        <Text style={{textDecorationLine:'line-through'}}>EGP 199.45</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontWeight:'bold'}}>EGP 99.45</Text>
                                    </View>
                                </View>
                                <View style={{backgroundColor:'FEFAF2',borderColor:'#EBA500',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:5}}>
                                    <Image source={require('../assets/dealOfDayImages/dealcart.png')} style={{margin:2}}/>
                                </View>
                            </View>
                        </View>
                        }
                        keyExtractor={item=>item.id}
                    />
                    </View>
                </View>:
                null
            }
            {
                props.isNewProductsList ?
                <View style={{rowGap:20,backgroundColor:'white'}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'white',paddingHorizontal:20}}>
                        <View style={{flexDirection:'row',columnGap:5}}>
                            <View><Text style={{fontWeight:'bold',fontSize:19,paddingLeft:5}}>New Products</Text></View>
                            <View><Image source={require('../assets/newProductList.png')} style={{paddingTop:3}}/></View>
                        </View>
                        <View>
                            <Pressable><Text style={{color:'#EBA500',fontSize:19,paddingRight:10}}>See all</Text></Pressable>
                        </View>
                    </View>
                    <View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{paddingHorizontal:20,columnGap:20,paddingBottom:20}}
                        data={DealOfDayList}
                        renderItem={({item})=>
                        <NewProductsList item={item}/>
                        }
                        keyExtractor={item=>item.id}
                    />
                    </View>
                </View>:
                null
            }

        </View>
    )
}

const NewProductsList = (props)=>{
    const [qty,setQty]=useState(0)
    const incQty=()=>{
        setQty(qty+1)
    }
    const decQty=()=>{
        if(qty===0){
            setQty(0)
        }else{
            setQty(qty-1)
        }
    }
    return(
        <View style={{rowGap:20,shadowColor:'#EBA500',elevation: 20,width:200,justifyContent:'center',backgroundColor:'white',borderRadius:8,shadowColor: '#EBA500',elevation: 10}}>
            <View style={{justifyContent:'flex-start'}}>
                <ImageBackground source={require('../assets/dealOfDayImages/dealsoffer.png')} style={{width:80,height:30}}>
                    <Text style={{color:'white',paddingTop:4,paddingLeft:5}}>15% Off</Text>
                </ImageBackground>
            </View>
            <View style={{marginHorizontal:10}}>
                <Image source={props.item.image}/>
            </View>
            <View style={{marginHorizontal:10}}> 
                <View><Text style={{fontWeight:'bold',fontSize:16}}>{props.item.name}</Text></View>
                <View><Text>500gm</Text></View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
                <View>
                    <View>
                        <Text style={{textDecorationLine:'line-through'}}>EGP 199.45</Text>
                    </View>
                    <View>
                        <Text style={{fontWeight:'bold'}}>EGP 99.45</Text>
                    </View>
                </View>
                <View style={{backgroundColor:'#F3F3F3',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',columnGap:10,borderRadius:7.5}}>
                    <View style={{paddingLeft:7}}><Pressable onPress={decQty}><Image source={require('../assets/minus.png')} style={{width:20,height:20,backgroundColor:'white'}}/></Pressable></View>
                    <View><Text style={{fontWeight:'bold',fontSize:20}}>{qty}</Text></View>
                    <View style={{paddingRight:7}}><Pressable onPress={incQty}><Image source={require('../assets/add.png')} style={{width:20,height:20,backgroundColor:'white'}}/></Pressable></View>
                </View>
            </View>
        </View>
    )
}

const styles  =StyleSheet.create({
    categoryContainer:{
        justifyContent:'center',
        alignItems:'center',
        rowGap:15
    },
    categoryContainerImg:{
        width:100,
        height:100,
        borderRadius:100/2,
        borderColor:'#EBA500',
        borderWidth:0.5,
        marginTop:10,
        backgroundColor:'#FEFCF5'
        
    },
    categoryContainerText:{
        fontSize:19,
        fontWeight:'500',
        marginBottom:10
    }
})

export default HomeListComponents;

 
