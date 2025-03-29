import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import DrawerNavigator from './drawer';
import SplashScreen from '../screens/Splash';
import LoginScreen from '../screens/Login';
import VerificationScreen from '../screens/Verification';
import ViewAll from '../screens/AllCategories/ViewAll';

const AUTH_STACK = [
  {
    key: 'Login',
    name: 'Login',
    component: LoginScreen,
  },
  {
    key: 'Verify',
    name: 'Verify',
    component: VerificationScreen,
  },
  { key: 'HomeScreen', name: 'HomeScreen', component: HomeScreen },
  {
    key: 'ProfileScreen',
    name: 'ProfileScreen',
    component: ProfileScreen,
  },
  {
    key: 'DrawerNavigator',
    name: 'DrawerNavigator',
    component: DrawerNavigator,
  },
  {
    key: 'ViewAll',
    name: 'ViewAll',
    component: ViewAll,
  },
];

const Navigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      {AUTH_STACK.map((item, index) => (
        <Stack.Screen
          key={item.key}
          name={item.name}
          component={item.component}
        />
      ))}
    </Stack.Navigator>
  );
};
export default Navigator;
