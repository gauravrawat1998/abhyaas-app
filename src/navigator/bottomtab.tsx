import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import {Image} from 'react-native';
import images from '../contants/images';

const Data = [
  {
    key: '1',
    name: 'Home1',
    component: HomeScreen,
    label: 'HOME',
    icon: images.bottom_home,
  },
  {
    key: '2',
    name: 'Home2',
    component: HomeScreen,
    label: 'MY TEST',
    icon: images.bottom_test,
  },
  {
    key: '3',
    name: 'Home3',
    component: HomeScreen,
    label: 'SEARCH',
    icon: images.bottom_search,
  },
  {
    key: '4',
    name: 'Home4',
    component: HomeScreen,
    label: 'TOPPER',
    icon: images.bottom_topper,
  },
];
export const BottomTabsStack = () => {
  const BottomStack = createBottomTabNavigator();
  return (
    <BottomStack.Navigator screenOptions={{headerShown: false}}>
      {Data.map(item => (
        <BottomStack.Screen
          name={item?.name}
          key={item?.key}
          options={{
            tabBarLabel: item?.label,
            tabBarLabelPosition: 'below-icon',
            tabBarIcon: () => (
              <Image
                source={item?.icon}
                style={{height: '100%', width: '100%'}}
              />
            ),
          }}
          component={HomeScreen}
        />
      ))}
    </BottomStack.Navigator>
  );
};
