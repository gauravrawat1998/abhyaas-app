/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import './gesture-handler.native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Navigator from './src/navigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

export default App;
