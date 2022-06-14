import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Details from "./components/Details"
import Users from "./components/Users"
import Main from './components/Main';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Users" component={Users} options={{

          headerStyle: {
            backgroundColor: 'green',
          },
        }} />
        <Stack.Screen name="Details" component={Details} options={{

          headerStyle: {
            backgroundColor: 'green',
          },
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
