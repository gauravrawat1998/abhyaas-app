/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { createDrawerNavigator } from '@react-navigation/drawer';
import './gesture-handler.native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function HomeScreen({navigation}:any) {
  return (
    <View style={styles.sectionContainer}>
      <Text onPress={()=>{navigation.navigate('Second')}}>Navigate</Text>
    </View>
  );
}
function ProfileScreen({navigation}:any) {
  return (
    <View style={styles.sectionContainer}>
      <Text onPress={()=>{navigation.navigate('Second')}}>Navigate</Text>
    </View>
  );
}
function ProfileScreen2({navigation}:any) {
  return (
    <View style={styles.sectionContainer}>
      <Text onPress={()=>{navigation.navigate('Second')}}>Navigate</Text>
    </View>
  );
}
function SecondScreen({navigation}:any) {
  const MyDrawer = createDrawerNavigator();
  return (
    <MyDrawer.Navigator>
      <MyDrawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <MyDrawer.Screen name="ProfileScreen2" component={ProfileScreen2} />
    </MyDrawer.Navigator>
  );
}

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,justifyContent:'center', alignItems:'center'
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
