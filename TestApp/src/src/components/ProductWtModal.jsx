import {View,Text, Modal,Dimensions,Pressable,Image} from 'react-native'
const WINDOW_WIDTH = Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height
const ProductWtModal=(props)=>{
    return(
        <Modal visible={props.visible}>
            <View style={{flex:1,backgroundColor:'rgba(52, 52, 52, 0.4)'}}>
                <View style={{backgroundColor:'white',width:WINDOW_WIDTH,height:(WINDOW_HEIGHT*30)/100,borderTopLeftRadius:40,borderTopRightRadius:40,bottom:0,position:'absolute'}}>
                    <View style={{width:'100%',height:'35%',flexDirection:'row'}}>
                        <View style={{height:'100%',justifyContent:'flex-end'}}><Text style={{fontFamily:'HindMadurai-SemiBold',fontSize:20,justifyContent:'center',color:'black',padding:10}}>Black-BourBorn Cream SandWich</Text></View>
                        <View style={{position:'absolute',top:-18,right:10}}>
                        <Pressable  onPress={()=>props.onCrossPress()}><Image source={require('../assets/Close.png')}/></Pressable>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                        <View style={{borderRightWidth:1,borderColor:'#DFDFDF'}}>
                            <Text>180g</Text>
                        </View>
                        <View>
                            <Text>$10</Text>
                        </View>
                        </View>
                        <View><Pressable style={{borderWidth:2,borderColor:'#EBA500',padding:10,borderRadius:10,justifyContent:'center',alignItems:'center'}}><Text style={{color:'#EBA500',fontFamily:'HindMadurai-Medium'}}>Select</Text></Pressable></View>
                    </View>
                    <View></View>
                </View>
            </View>
        </Modal>
    )
}
export default ProductWtModal