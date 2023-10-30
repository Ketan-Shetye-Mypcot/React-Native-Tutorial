import {View,Text,Image,StyleSheet} from 'react-native'
import TextBox from './textbox';

const NewsLetter = ()=>{
    return(
        <View style={styles.NewsLetterMainContainer}>
            <View style={styles.containerOne}>
                <View><Image source={require('../assets/Mailbox.png')}/></View>
                <View><Text style={styles.containerOneText}>Newsletter</Text></View>
            </View>
            <View style={styles.containerTwo}>
                <View><Image source={require('../assets/Frame.png')}/></View>
                <View><Text style={{fontWeight:'bold',fontSize:20,fontFamily:'Hind Madurai Regular'}}>Stay Updated</Text></View>
                <View><Text style={{fontSize:14,textAlign:'center',fontFamily:'Hind Madurai Regular'}}>Subscribe to our newsletter to receive insights directly in your inbox</Text></View>  
            </View>
            <View style={styles.containerThree}>
                <TextBox isEmailBox={true} placeholder='enter your email here'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    NewsLetterMainContainer:{
        rowGap:30,
        backgroundColor:'white',
        borderRadius:20,
        borderWidth:5,
        borderColor:'white',
        shadowColor: '#EBA500',  
        elevation: 50,
        margin:20
    },
    containerOne:{
        flexDirection:'row',
        columnGap:10,
        marginTop:15,
        marginHorizontal:10,
    },
    containerOneText:{
        fontSize:20,
        fontWeight:'bold'
    },
    containerTwo:{
        justifyContent:'center',
        alignItems:'center',
        rowGap:10,
        marginHorizontal:20
    },
    containerThree:{
        marginBottom:15,
        marginHorizontal:20
    }
})

export default NewsLetter;