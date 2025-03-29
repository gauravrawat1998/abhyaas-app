import {StyleSheet, Text, View} from 'react-native';
import {WrapperContainer} from '../../components/Wrapper';
import Input from '../../components/Input';
import Button from '../../components/Button';
import colors from '../../contants/colors';

const VerificationScreen = ({navigation}: any) => {
  return (
    <WrapperContainer headertext={'You are about to set!'}>
      <Text
        style={style.cont_text}>
        Please Enter OTP
      </Text>
      <Input onChangeText={() => {}} placeholder="Enter OTP" />
      <Button
        text="Verify"
        containerStyles={style.btn}
        onPress={() => {
          navigation.navigate('DrawerNavigator');
        }}
      />
      <Text style={style.sent_text}>
        OTP has been sent to +919876543210
      </Text>
      <View
        style={style.timer_cont}>
        <Text style={style.timer_text}>Change Number?</Text>
        <Text style={style.timer_text}>
          Resend OTP (00:30){' '}
        </Text>
      </View>
    </WrapperContainer>
  );
};
export default VerificationScreen;
const style = StyleSheet.create({
cont_text:{
  fontSize: 32,
  fontWeight: '700',
  textAlign: 'center',
  marginVertical: 40,
},
btn:{
  marginTop: 56, 
  marginBottom: 24
},
sent_text:{
  textAlign: 'center', 
  fontSize: 10
},
timer_cont:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '85%',
  marginVertical: 8,
  alignSelf: 'center',
},
timer_text:{
  fontSize: 10, 
  color: colors.purple
}
})
