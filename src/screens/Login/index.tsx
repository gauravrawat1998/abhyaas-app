import { Image, Pressable, Text, View } from "react-native"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { WrapperContainer } from "../../components/Wrapper"
import colors from "../../contants/colors"
import images from "../../contants/images"

const LoginScreen = ({navigation}:any)=>{
    return(
        <WrapperContainer>
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
            <Pressable style={{backgroundColor:'#D9D9D9',borderRadius:4, alignSelf:'center', padding:12}}>
                <Text style={{fontSize:15, fontWeight:'800'}} >Have a refer code?</Text>
            </Pressable>
        </WrapperContainer>
    )
}
export default LoginScreen