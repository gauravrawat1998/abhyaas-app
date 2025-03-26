import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import DrawerNavigator from './drawer';

const AUTH_STACK = [{
    key:'',
    component:HomeScreen
}]
const STACK = [{
    key:'HomeScreen',
    component:HomeScreen
},
{
    key:'ProfileScreen',
    component:ProfileScreen
},
{
    key:'DrawerNavigator',
    component:DrawerNavigator
}]


const Navigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Second" component={ProfileScreen} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};
export default Navigator;
