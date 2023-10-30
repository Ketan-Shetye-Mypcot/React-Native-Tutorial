import {useState, useEffect} from 'react'
import { View, Text, FlatList, Image,Dimensions } from 'react-native'
import { CarauselImages } from '../jsons/carausel'
const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height


const Carausel = (props)=>{
    const [currIndex,setCurrIndex] = useState(0)
    return(
        <View>
            <FlatList
            data={props.data}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            snapToAlignment='center'
            // contentContainerStyle={{columnGap:20}}
            onScroll={(event)=>{
                const x=event.nativeEvent.contentOffset.x;
                setCurrIndex((x/WindowWidth).toFixed(0))
            }}
            renderItem={({item,index})=>{
                return <ItemSlider item={item} index={index} currIndex={currIndex}/>
            }}
            keyExtractor={item=>item.id}
        />
        <View><RenderDot currIndex={currIndex}/></View>
        </View>
    )
}

const ItemSlider=(props)=>{
    return (
        <View style={{width:(WindowWidth*70)/100,height:(WindowHeight*40)/100,justifyContent:'center',alignItems:'center',marginHorizontal:28}}>
            {
                props.currIndex==props.index ?
                <Image source={props.item.image} style={{width:'100%',height:(WindowHeight*40)/100}}/> :
                <Image source={props.item.image} style={{width:'115%',height:(WindowHeight*35)/100}}/>
            }
        </View>
    )      
}

const RenderDot=(props)=>{
    return(
        <View style={{flexDirection:'row',columnGap:8,justifyContent:'center',paddingTop:20}}>
            {
                CarauselImages.map((item,index)=>
                props.currIndex == index ?
                <View key={index} style={{width:10,height:10,backgroundColor:'#EBA500'}}></View> :
                <View key={index} style={{width:10,height:10,borderRadius:5,backgroundColor:'#FDEBC1'}}></View>
                )
            }
        </View>
    )
}

export default Carausel;


// const [currIndex,setCurrIndex] = useState(0)
// return(
//     <View>
//         <FlatList
//         data={props.data}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         pagingEnabled={true}
//         snapToAlignment='center'
//         renderItem={({item,index})=>{
//             return(
//                 <Item image={item.image} index={index} currIndex={currIndex}/>
//             )
//         }}
//         keyExtractor={(item)=>item.id}
//         onScroll={(event)=>{
//             const x = event.nativeEvent.contentOffset.x
//             setCurrIndex(x)
//         }}
//     />
//     <View><RenderDot currIndex={currIndex}/></View>
//     </View>
// )
// }

// const Item=(props)=>{
// return(
//     <View style={{width:CARD_LENGTH,height:(WindowHeight*40)/100,overflow:'hidden',marginLeft:props.index==0?SIDECARD_LENGTH:SPACING,marginRight:props.index==2?SIDECARD_LENGTH:SPACING}}>
//         <Image
//         source={props.image}
//         style={{width:'100%',height:'100%'}}
//         />
//     </View>
// )
// }

// const ItemSlider=(props)=>{
// return (
//     <View style={{width:(WindowWidth*70)/100,alignItems:'center',justifyContent:'center',height:(WindowHeight*40)/100}}>
//         {
//             props.currIndex==props.index ?
//             <Image source={props.item.image} style={{width:(WindowWidth*75)/100,height:(WindowHeight*40)/100}}/> :
//             <Image source={props.item.image} style={{width:(WindowWidth*60)/100,height:(WindowHeight*30)/100}}/>
//         }
//     </View>
// )      
// }

// const RenderDot=(props)=>{

// return(
//     <View style={{flexDirection:'row',columnGap:8,justifyContent:'center',paddingTop:20}}>
//         {
//             CarauselImages.map((item,index)=>{
//             console.log(props.currIndex,index)
//             props.currIndex == index ?
//             <View key={index} style={{width:10,height:10,backgroundColor:'#EBA500'}}></View> :
//             <View key={index} style={{width:10,height:10,borderRadius:5,backgroundColor:'#FDEBC1'}}></View>}
//             )
//         }
//     </View>
// )
// }