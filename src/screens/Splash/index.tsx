import {Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../contants/images';
import Button from '../../components/Button';
import {gradient} from '../../contants/colors';

const SplashScreen = ({navigation}: any) => {
  return (
    <LinearGradient
      colors={gradient.splash}
      style={style.container}
      start={{x: 1, y: 0}}
      end={{x: 1, y: 1}}>
      <Image
        source={images.splash_icon}
        style={style.image}
        resizeMode="contain"
      />
      <Button
        text="Get Started"
        containerStyles={style.btn}
        onPress={() => {
          navigation.replace('Login');
        }}
      />
    </LinearGradient>
  );
};
export default SplashScreen;
const style = StyleSheet.create({
container:{
    flex: 1, 
    justifyContent: 'center'
},
  image: {
    width: '90%', 
    marginLeft: '5%', 
    height: '50%'
},
  btn: {
    position: 'absolute', 
    bottom: 36, 
    marginHorizontal: '5%',
    width: '90%'
},
});
