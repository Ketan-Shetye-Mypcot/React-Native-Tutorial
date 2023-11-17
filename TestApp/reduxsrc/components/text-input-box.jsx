import {View,Text,TextInput} from 'react-native'
const TextInputBox=(props)=>{
    
    return(
        <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={(text)=>props.setValue(text)}
        cursorColor='grey'
        style={{borderWidth:2,borderRadius:10,borderColor:'grey',padding:10,textAlignVertical:'center'}}
        keyboardType={props.keyboardType}
        />
    )
}
export default TextInputBox