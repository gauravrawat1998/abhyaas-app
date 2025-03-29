import {
  createDrawerNavigator,
  DrawerItemList,
} from '@react-navigation/drawer';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ProfileScreen from '../screens/Profile';
import { BottomTabsStack } from './bottomtab';
import AllCategories from '../screens/AllCategories';
import colors from '../contants/colors';

const Data = [
  { key: '0', name: 'Page0', component: BottomTabsStack, label: 'Home' },
  { key: '1', name: 'Page1', component: AllCategories, label: 'All Categories' },
  { key: '2', name: 'Page2', component: ProfileScreen, label: 'My Profile' },
  { key: '3', name: 'Page3', component: ProfileScreen, label: 'Learn With Us' },
  { key: '4', name: 'Page4', component: ProfileScreen, label: 'Settings' },
  { key: '5', name: 'Page5', component: ProfileScreen, label: 'Help & Support' },
  { key: '6', name: 'Page6', component: ProfileScreen, label: 'How To Play' },
  { key: '7', name: 'Page7', component: ProfileScreen, label: 'Responsible Play' },
  { key: '8', name: 'Page8', component: ProfileScreen, label: 'Refer & Earn' },
  { key: '9', name: 'Page9', component: ProfileScreen, label: 'About Us' },
  { key: '10', name: 'Page10', component: ProfileScreen, label: 'Legality' },
  { key: '11', name: 'Page11', component: ProfileScreen, label: 'Terms & Conditions' }
];

const CustomDrawer = (props: any) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.cont}>
      <View
        style={{...styles.drawer_profile_cont, paddingTop: insets.top - 12}}>
        <View
          style={styles.profile_text_cont}>
          <Text style={styles.profile_icon}>
            A
          </Text>
        </View>
        <Text
          style={styles.profile}>{`Genius ABC\nLevel: Intermediate XI\nMy Balance: 250.55`}</Text>
      </View>
      <View style={{ flex: 0.85 }}>
        <ScrollView>
          <DrawerItemList {...props} />
        </ScrollView>
      </View>
    </View>
  );
};

const DrawerNavigator = () => {
  const MyDrawer = createDrawerNavigator();
  return (
    <MyDrawer.Navigator
      drawerContent={(props: any) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerLabelStyle: styles.drawerLabel ,
        drawerActiveTintColor: colors.white,
        drawerItemStyle: styles.drawerItem ,
        headerShown: false
      }}>
      {Data.map(item => (
        <MyDrawer.Screen
          key={item?.key}
          name={item?.name}
          options={{ drawerLabel: item?.label }}
          component={item?.component}
        />
      ))}
    </MyDrawer.Navigator>
  );
};
export default DrawerNavigator;

const styles = StyleSheet.create({
  profile_text_cont:{
   backgroundColor: colors.white,
   height: 64,
   width: 64,
   borderRadius: 32,
   alignItems: 'center',
   justifyContent: 'center',
 },
 profile_icon:{ 
   color: '#0D3A4E', 
   fontWeight: '700', 
   fontSize: 56 
 }, 
 profile:{
   color: colors.white,
   fontWeight: '800',
   lineHeight: 18,
   marginHorizontal: 12,
 },
 drawer_profile_cont:{
   backgroundColor: '#0D3A4E',
   flex: 0.15,
   paddingHorizontal: 12,
   flexDirection: 'row',
   alignItems: 'center',
 },
 cont:{ 
   backgroundColor: colors.white, 
   flex: 1 
 },
 drawerLabel:{
   fontSize: 20,
   color: colors.black,
   fontWeight: '600',
 },
 drawerItem:{
   borderBottomWidth: 1,
   borderRadius: 0,
   borderColor: '#E1E0E0',
 }
 })
