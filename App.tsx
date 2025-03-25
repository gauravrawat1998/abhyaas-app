/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import './gesture-handler.native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function HomeScreen({navigation}: any) {
  return (
    <WrapperContainer>
      <View style={styles.sectionContainer}>
        <Text
          onPress={() => {
            navigation.navigate('Second');
          }}>
          Navigate
        </Text>
      </View>
    </WrapperContainer>
  );
}
function ProfileScreen({navigation}: any) {
  return (
    <View style={styles.sectionContainer}>
      <Text
        onPress={() => {
          navigation.goBack();
        }}>
        Navigate
      </Text>
    </View>
  );
}
function ProfileScreen2({navigation}: any) {
  return (
    <View style={styles.sectionContainer}>
      <Text
        onPress={() => {
          navigation.navigate('Second');
        }}>
        Navigate
      </Text>
    </View>
  );
}

const CustomDrawer = () => {
  const insets = useSafeAreaInsets();
  const Data = [
    {key: '1', label: 'All Categories'},
    {key: '2', label: 'My Profile'},
    {key: '3', label: 'Learn With Us'},
    {key: '4', label: 'Settings'},
    {key: '5', label: 'Help & Support'},
    {key: '6', label: 'How To Play'},
    {key: '7', label: 'Responsible Play'},
    {key: '8', label: 'Refer & Earn'},
    {key: '9', label: 'About Us'},
    {key: '10', label: 'Legality'},
    {key: '11', label: 'Terms & Conditions'},
  ];
  return (
    <View style={{backgroundColor: '#white', flex: 1}}>
      <View
        style={{
          backgroundColor: '#0D3A4E',
          flex: 0.15,
          paddingTop: insets.top-12,
          paddingHorizontal: 12,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            height: 64,
            width: 64,
            borderRadius: 32,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#0D3A4E', fontWeight: '700', fontSize: 56}}>
            A
          </Text>
        </View>
        <Text
          style={{
            color: 'white',
            fontWeight: '800',
            lineHeight: 18,
            marginHorizontal: 12,
          }}>{`Genius ABC\nLevel: Intermediate XI\nMy Balance: 250.55`}</Text>
      </View>
      <View style={{flex: 0.85}}>
        {Data.map(item => (
          <Text
            key={item?.key}
            style={{
              fontSize: 20,
              color: '#000000',
              fontWeight: '600',
              borderBottomWidth: 1,
              borderColor: '#E1E0E0',
              marginTop: 18,
            }}>
            {item?.label}
          </Text>
        ))}
      </View>
    </View>
  );
};

function SecondScreen({navigation}: any) {
  const MyDrawer = createDrawerNavigator();
  return (
    <MyDrawer.Navigator
      drawerContent={(props: any) => <CustomDrawer {...props} />}>
      <MyDrawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <MyDrawer.Screen name="ProfileScreen2" component={ProfileScreen2} />
    </MyDrawer.Navigator>
  );
}

const WrapperContainer = ({children}: any) => {
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#0D3A4E', '#0374A8', '#82AEC1']}
        style={{flex: 0.16, flexDirection: 'row'}}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}></LinearGradient>
      <View
        style={{
          flex: 0.84,
          borderRadius: 24,
          backgroundColor: 'white',
          top: -16,
          bottom: 0,
        }}>
        {children}
      </View>
    </View>
  );
};

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
