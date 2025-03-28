import { Image, Pressable, Text, TextInput, View } from "react-native"
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
            <View style={{flexDirection:'row', marginVertical:16}}>
            <View style={{height:16, width:16, marginRight:6, borderRadius:4,borderWidth:0.5}}/>
            <Text>I am 18+ years and agree to Abhyaas</Text><Text>T&Cs.</Text>
            </View>
            <Button 
            onPress={()=>{
                navigation.navigate('Verify')
            }}
            containerStyles={{marginTop:12}}
            text="Continue"/>
            <View style={{flexDirection:'row', marginVertical:44, justifyContent:'center', alignItems:'center'}}>
                <View style={{borderWidth:0.5,borderColor:'#E1E0E0',width:'35%', height:1,}}/>
                <Text style={{backgroundColor:'#F9F7F7', padding:10, borderRadius:24, marginHorizontal:18, fontSize:15, fontWeight:'800' }}>OR</Text>
                <View style={{borderWidth:0.5,borderColor:'#E1E0E0', width:'35%', height:1,}}/>
            </View>
            <Pressable style={{flexDirection:'row',alignItems:'center', borderWidth:1, paddingVertical:12, paddingHorizontal:30, borderRadius:12}} >
                <Image source={images.google_icon} style={{height:34,marginRight:24, width:34}} />
                <Text style={{color:'#A6A6A6',fontSize:15,}} >Continue with Google</Text>
            </Pressable>
            <View style={{flex:1}} />
            <Pressable onPress={()=>{modalref.current.open()}} style={{backgroundColor:'#D9D9D9',borderRadius:4, alignSelf:'center', padding:12}}>
                <Text style={{fontSize:15, fontWeight:'800'}} >Have a refer code?</Text>
            </Pressable>
            <ModalBox ref={modalref} style={{height:null, width:'100%', backgroundColor:colors.white, padding:16, borderTopStartRadius:16,borderTopEndRadius:16}} coverScreen  position={'bottom'}>
                <View style={{flexDirection:'row'}} >
                    <Pressable onPress={()=>{modalref.current.close()}} style={{padding:10}} >
                        <Image source={images.cross} style={{height:12, width:12}} />
                    </Pressable>
                    <Text style={{fontSize:15, borderBottomWidth:0.5, lineHeight:35, flex:1, fontWeight:'800', textAlign:'center', color:colors.black}} >Enter Invite Code</Text>
                </View>
                <TextInput
                placeholder="Invite Code"
                style={{backgroundColor:'#E5F3FD', borderBottomWidth:1, borderColor:'#0D3A4E', marginTop:18, marginBottom:8, padding:14}}
                />
                <Text style={{fontSize:9, color:'#606060'}} >Not applicable to numbers that are already registered with us!</Text>
                <Button
                text="APPLY"
                containerStyles={{width:'90%', alignSelf:'center', marginVertical:20}}
                onPress={()=>{}}
                />
            </ModalBox>
        </WrapperContainer>
    )
}
export default LoginScreen