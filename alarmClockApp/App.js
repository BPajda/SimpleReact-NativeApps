import * as React from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Font from "expo-font";

import comicNeue from "./fonts/Comic_Neue/ComicNeue-BoldItalic.ttf"

import List from './components/List';

import Main from './components/Main';
import Add from './components/Add';

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoadingBool: false
    };
  }



  async componentDidMount() {
    await Font.loadAsync({
      'myfont': comicNeue, // Uwaga: proszę w nazwie fonta nie używać dużych liter
    });

    this.setState({ fontLoadingBool: true })



    // fontFamily: "myfont",
  }

  render() {
    return (
      this.state.fontLoadingBool
        ? (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Main" component={Main} options={{
                headerShown: false
              }} />
              <Stack.Screen name="List" component={List} options={{

                headerStyle: {
                  backgroundColor: 'green',
                },
              }} />
              <Stack.Screen name="Add" component={Add} options={{

                headerStyle: {
                  backgroundColor: 'green',
                },
              }} />

            </Stack.Navigator>
          </NavigationContainer>
        )
        : (
          <View style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )
    );
  }
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
