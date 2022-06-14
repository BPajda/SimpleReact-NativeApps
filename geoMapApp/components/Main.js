import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native';

import MyButton from "./MyButton"


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <View style={styles.all}>
                <View style={styles.head}>
                    <Text style={styles.title}>GeoApp Map</Text>
                </View>
                <View style={styles.cont}>
                    <MyButton txt="start" fun={() => this.props.navigation.navigate("List")} />
                </View>
            </View>
        );
    }
}
let styles = StyleSheet.create({
    all: {
        flex: 1,
        flexDirection: "column",
        fontFamily: "myfont"
    },
    head: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: "center",
        fontFamily: "myfont"
    },
    title: {
        fontSize: 60,
        fontFamily: "myfont"
    },
    cont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        fontFamily: "myfont"
    },
    txt: {
        fontSize: 20,
        fontFamily: "myfont"
    }
})