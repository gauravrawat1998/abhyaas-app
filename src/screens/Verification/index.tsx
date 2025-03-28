import {Text, View} from 'react-native';
import {WrapperContainer} from '../../components/Wrapper';
import Input from '../../components/Input';
import Button from '../../components/Button';

const VerificationScreen = ({navigation}: any) => {
  return (
    <WrapperContainer headertext={'You are about to set!'}>
      <Text
        style={{
          fontSize: 32,
          fontWeight: '700',
          textAlign: 'center',
          marginVertical: 40,
        }}>
        Please Enter OTP
      </Text>
      <Input onChangeText={() => {}} placeholder="Enter OTP" />
      <Button
        text="Verify"
        containerStyles={{marginTop: 56, marginBottom: 24}}
        onPress={() => {
          navigation.navigate('DrawerNavigator');
        }}
      />
      <Text style={{textAlign: 'center', fontSize: 10}}>
        OTP has been sent to +919876543210
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '85%',
          marginVertical: 8,
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 10, color: '#270898'}}>Change Number?</Text>
        <Text style={{fontSize: 10, color: '#270898'}}>
          Resend OTP (00:30){' '}
        </Text>
      </View>
    </WrapperContainer>
  );
};
export default VerificationScreen;
