import {View, Text, Image, StyleSheet, Pressable, FlatList,ImageBackground, Dimensions } from 'react-native'
const width=Dimensions.get('window').width;


const CategoryListComponents = (props)=>{
    return(
        <View>
            {
                props.isCategoryPage ?
                <FlatList
                numColumns={3}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{rowGap:10,paddingVertical:15,width:(width*95)/100,paddingLeft:15}}
                data={props.data}
                renderItem={({item})=>
                <View style={{width:120,overflow:'hidden',marginRight:15,borderRadius:13}}>
                    <Pressable style={{backgroundColor:'#FEFCF5',overflow:'hidden',rowGap:20}} onPress={()=>props.onPress(item.name,item.id)}>
                        <View style={{justifyContent:'flex-start'}}>
                            <Text style={{fontSize:20,fontWeight:'bold',borderRadius:10}}>{item.name}</Text>
                        </View>
                        <View>
                            <Image source={item.image} style={{width:116,height:77}}/>
                        </View>
                    </Pressable>
                </View>
                }
                keyExtractor={item=>item.id}
                />:
                null
            }
            {
                props.isCategoryItemPage ?
                <FlatList
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        data={props.data}
                        contentContainerStyle={{rowGap:8,paddingVertical:8}}
                        renderItem={({item})=>
                        <View style={{shadowColor:'#EBA500',elevation:20,width:135,justifyContent:'flex-start',backgroundColor:'white',borderRadius:8,marginRight:8}}>
                            <View style={{justifyContent:'flex-start'}}>
                                <ImageBackground source={require('../assets/dealOfDayImages/dealsoffer.png')} style={{width:80,height:30}}>
                                    <Text style={{color:'white',paddingTop:4,paddingLeft:5}}>15% Off</Text>
                                </ImageBackground>
                            </View>
                            <View style={{overflow:'hidden',justifyContent:'center',alignItems:'center'}}>
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
                                <View style={{backgroundColor:'#FEFAF2',borderColor:'#EBA500',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:5}}>
                                    <Image source={require('../assets/dealOfDayImages/dealcart.png')} style={{margin:2}}/>
                                </View>
                            </View>
                        </View>
                        }
                        keyExtractor={item=>item.id}
                    />:
                null
            }
            {
                props.isCategoryList?
                <FlatList
                data={props.data}
                vertical={true}
                contentContainerStyle={{rowGap:20,paddingVertical:20,paddingHorizontal:0,marginHorizontal:0}}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=>
                <View style={{backgroundColor:props.currIndex===item.id?'#FCF2D9':null,width:'100%',borderRadius:20}}>
                    <Pressable style={styles.categoryContainer} onPress={()=>props.onPress(item.name,item.id)}>
                        <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}><Image source={item.image} style={[styles.categoryContainerImg,{backgroundColor:props.currIndex===item.id?'white':'#FCF2D9'}]}/></View>
                        <View style={{width:'100%',justifyContent:'center',alignItems:'center',borderRightWidth:props.currIndex===item.id?4:null,borderColor:'#EBA500'}}><Text style={[styles.categoryContainerText,{color:props.currIndex===item.id?'#EBA500': 'black'}]}>{item.name}</Text></View>
                    </Pressable>
                </View>
                }
                keyExtractor={item=>item.id}
                /> :
                null
            }  
        </View>
    )
}

const styles  = StyleSheet.create({
    categoryContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10
    },
    categoryContainerImg:{
        width:80,
        height:80,
        borderRadius:80/2
        
    },
    categoryContainerText:{
        fontSize:16,
        fontWeight:'500',
        color:'black'
    }
})

export default CategoryListComponents;