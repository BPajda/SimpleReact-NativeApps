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
            <View style={styles.head}>


                <MyButton style={styles.title} txt="Camp App" fun={() => this.props.navigation.navigate("Gallery")} />


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