import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import DrawerNavigator from './drawer';
import SplashScreen from '../screens/Splash';
import LoginScreen from '../screens/Login';
import VerificationScreen from '../screens/Verification';
import ViewAll from '../screens/AllCategories/ViewAll';
import PerformanceScreen from '../screens/Profile/Performance';
import EditProfileScreen from '../screens/Profile/EditProfile';
import Question from '../screens/Question';

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
  {
    key: 'Performance',
    name: 'Performance',
    component: PerformanceScreen
  },
  {
    key: 'EditProfileScreen',
    name: 'EditProfileScreen',
    component: EditProfileScreen,
  },
  {
    key: 'Question',
    name: 'Question',
    component: Question,
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
