import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { WrapperContainer } from "../../components/Wrapper"
import colors from "../../contants/colors"
import images from "../../contants/images"
import { useRef } from "react"
import ModalBox from "../../components/Modal"

const LoginScreen = ({navigation}:any)=>{
    const modalref:any = useRef(null)
    return(
        <WrapperContainer
        isBack={false}
        headertext={'Login/Registration'}
        headersubtext={'Start Your Learning Journey!'}
        >
            <Input 
            placeholder="Enter Your Mobile Number"
            onChangeText={(txt)=>{}}
            />
            <View style={style.cont_18}>
                <View style={style.checkbox} />
                <Text>I am 18+ years and agree to Abhyaas</Text><Text>T&Cs.</Text>
            </View>
            <Button
                onPress={() => {
                    navigation.navigate('Verify')
                }}
                containerStyles={{ marginTop: 12 }}
                text="Continue" />
            <View style={style.or_container}>
                <View style={style.line} />
                <Text style={[style.or_text,style.refer_code]}>OR</Text>
                <View style={style.line} />
            </View>
            <Pressable style={style.google_btn} >
                <Image source={images.google_icon} style={style.google_icon} />
                <Text style={style.google_text} >Continue with Google</Text>
            </Pressable>
            <View style={{flex:1}} />
            <Pressable onPress={()=>{modalref.current.open()}} style={style.refer_container}>
                <Text style={style.refer_code} >Have a refer code?</Text>
            </Pressable>
            <ModalBox ref={modalref} style={style.modalbox} coverScreen  position={'bottom'}>
                <View style={{flexDirection:'row'}} >
                    <Pressable onPress={()=>{modalref.current.close()}} style={{padding:10}} >
                        <Image source={images.cross} style={style.close} />
                    </Pressable>
                    <Text style={[style.modal_heading,style.refer_code]} >Enter Invite Code</Text>
                </View>
                <TextInput
                placeholder="Invite Code"
                style={style.input}
                />
                <Text style={style.input_subtext} >Not applicable to numbers that are already registered with us!</Text>
                <Button
                text="APPLY"
                containerStyles={style.btn}
                onPress={()=>{}}
                />
            </ModalBox>
        </WrapperContainer>
    )
}
export default LoginScreen
const style =StyleSheet.create({
checkbox:{ 
    height: 16, 
    width: 16, 
    marginRight: 6, 
    borderRadius: 4, 
    borderWidth: 0.5 
},
modalbox:{
    height:null, 
    width:'100%', 
    backgroundColor:colors.white, 
    padding:16, 
    borderTopStartRadius:16,
    borderTopEndRadius:16
},
btn:{
    width:'90%', 
    alignSelf:'center', 
    marginVertical:20
},
input:{
    backgroundColor:'#E5F3FD', 
    borderBottomWidth:1, 
    borderColor:'#0D3A4E', 
    marginTop:18, 
    marginBottom:8, 
    padding:14
},
input_subtext:{
    fontSize:9, 
    color:'#606060'
},
modal_heading:{ 
    borderBottomWidth:0.5, 
    lineHeight:35, 
    flex:1, 
    textAlign:'center', 
    color:colors.black
},
close:{
    height:12, 
    width:12
},
refer_code:{
    fontSize:15, 
    fontWeight:'800'
},
refer_container:{
    backgroundColor:'#D9D9D9',
    borderRadius:4, 
    alignSelf:'center', 
    padding:12
},
line:{ 
    borderWidth: 0.5, 
    borderColor: '#E1E0E0', 
    width: '35%', 
    height: 1
 },
 or_text:{ 
    backgroundColor: '#F9F7F7', 
    padding: 10, 
    borderRadius: 24, 
    marginHorizontal: 18
},
or_container:{ 
    flexDirection: 'row', 
    marginVertical: 44, 
    justifyContent: 'center', 
    alignItems: 'center' 
},
google_btn:{ 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 1, 
    paddingVertical: 12, 
    paddingHorizontal: 30, 
    borderRadius: 12 
},
google_text:{ 
    color: '#A6A6A6', 
    fontSize: 15 
},
google_icon:{ 
    height: 34, 
    marginRight: 24, 
    width: 34 
},
cont_18:{ flexDirection: 'row', marginVertical: 16 }
})