import { useState,useEffect,useRef } from 'react'
import {View,Text,Image,Pressable,Dimensions,FlatList} from 'react-native'
import RightArrow from '../components/right-arrow'
import LeftArrow from '../components/left-arrow'

const WINDOW_WIDTH= Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const ProductImage=(props)=>{

    const data = props.route.params.params
    const [highlighIdx,setHighLightIdx] = useState(1)
    const [rightArrowOpac,setRightArrowOpac] = useState(1)
    const [leftArrowOpac,setLeftArrowOpac] = useState(1)
    
    const [idx,setIdx] = useState(0)
    const ref = useRef()
    const refOne = useRef()
    
    const ProductImgList=[
        {
            id:1,
            image:data.productImage
        },
        {
            id:2,
            image:require('../assets/food/apple.png')
        },
        {
            id:3,
            image:require('../assets/food/blackberry.png')
        },
        {
            id:4,
            image:require('../assets/food/strawberry.png')
        },
        {
            id:5,
            image:require('../assets/food/mango.png')
        },
        {
            id:6,
            image:require('../assets/food/apple.png')
        }
    ]

    const onPressCross=()=>{
        props.navigation.goBack()
    }

    const onProductImageOfCarauselPress=(id)=>{
        setIdx(id-1)
        setHighLightIdx(id)
    }

    const onRightArrowPress=()=>{
        if(idx>=5 || highlighIdx>= 6){
            return
        }
        setIdx(idx+1)
        const id = idx+1
        setHighLightIdx(highlighIdx+1)
    }
    const onLeftArrowPress=()=>{
        if(idx==0 || highlighIdx== 1){
            return
        }
        setIdx(idx-1)
        setHighLightIdx(highlighIdx-1)
    }
    useEffect(()=>{
        if(idx<=0){
            setIdx(0)
            setLeftArrowOpac(0.5)
        }else{
            setLeftArrowOpac(1)
        }
        if(idx>=5){
            setIdx(5)
            setRightArrowOpac(0.5)
        }else{
            setRightArrowOpac(1)
        }
        ref.current?.scrollToIndex({
            index:idx,
            animated: true
        })
        refOne.current?.scrollToIndex({
            index:highlighIdx-1,
            animated:true
        })
    },[idx,highlighIdx])


    return(
        <View style={{width:WINDOW_WIDTH,height:WINDOW_HEIGHT,backgroundColor:'white'}}>
            <View style={{width:'100%',alignItems:'flex-end',height:'10%'}}>
                <Pressable onPress={()=>onPressCross()} style={{marginTop:'3%',marginRight:'5%'}}>
                    <Image source={require('../assets/CloseCircle.png')}/>
                </Pressable>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:'5%',height:'75%'}}>
                <View style={{width:'10%',alignItems:'center',height:'100%',justifyContent:'center'}}>
                    <Pressable onPress={()=>onLeftArrowPress()}>
                        <LeftArrow opacity={leftArrowOpac}/>
                    </Pressable>
                </View>
                <View style={{width:'80%',height:'75%',alignItems:'center'}}>
                <FlatList
                ref={ref}
                data={ProductImgList}
                initialScrollIndex={idx}
                scrollEnabled={false}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                snapToAlignment='center'
                pagingEnabled={true}
                renderItem={({item})=>
                <View style={{justifyContent:'center',alignItems:'center',height:'100%',width:(WINDOW_WIDTH*70)/100}}>
                    <Image source={item.image} style={{width:'80%',height:'40%'}}/>
                </View>
                }
                keyExtractor={item=>item.id}
                />
                </View>
                <View style={{width:'10%',alignItems:'center',height:'100%',justifyContent:'center'}}>
                <Pressable onPress={()=>onRightArrowPress()}>
                        <RightArrow opacity={rightArrowOpac}/>
                </Pressable>
                </View>
            </View>
            <View style={{height:'15%'}}>
            <FlatList
            ref={refOne}
            initialScrollIndex={highlighIdx}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={ProductImgList}
                contentContainerStyle={{alignItems:'center',columnGap:15,paddingHorizontal:'3%'}}
                pagingEnabled={true}
                renderItem={({item})=>
                <Pressable onPress={()=>onProductImageOfCarauselPress(item.id)} style={{borderWidth:highlighIdx==item.id?1:1,borderBottomWidth:highlighIdx==item.id?3:1,borderLeftWidth:highlighIdx==item.id?3:1,width:(WINDOW_WIDTH*25)/100,height:(WINDOW_HEIGHT*13)/100,justifyContent:'center',borderColor:highlighIdx==item.id?'#EBA500':'#C9C9C9',borderRadius:8}}>
                    <Image source={item.image} style={{width:'100%',height:'100%'}} resizeMode='contain' />
                </Pressable>
                }
                keyExtractor={item=>item.id}
                />
            </View>
        </View>
    )
}
export default ProductImage