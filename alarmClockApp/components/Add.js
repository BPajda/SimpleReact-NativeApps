import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Switch, } from 'react-native';

import plus2 from "../assets/plus2.png";

import MyButton from "./MyButton"
import ListItem from './ListItem';
import CircleButton from './CircleButton';
import Database from "./Database"

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };


        this.del = this.del.bind(this)

    }
    async addBase() {
        Database.add()
        await this.props.route.params.nazwa()
        this.props.navigation.navigate("List")
    }

    del() {

    }

    render() {


        return (

            <View style={styles.viw}>
                <View>
                    <Text style={styles.text}>+ dodaje do bazy budzik z godzina 00:00</Text>
                </View>
                <View style={styles.abs}>
                    <CircleButton fun={this.addBase.bind(this)} src={plus2} />
                </View>
            </View>
        )


    }
}
let styles = StyleSheet.create({
    viw: {
        flex: 1,
        fontFamily: "myfont",
        backgroundColor: "green",
        justifyContent: 'center',
        alignItems: "center",

    },

    text: {
        color: "white",
        textAlign: "center",
        fontSize: 42,
    },
    abs: {
        position: "absolute",
        bottom: 10,
        left: 0,
        width: "100%",
        justifyContent: 'center',
        alignItems: "center",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        fontFamily: "myfont",
    }
})