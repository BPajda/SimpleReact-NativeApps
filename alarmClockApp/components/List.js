import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Switch, ScrollView, } from 'react-native';

import plus2 from "../assets/plus2.png";

import MyButton from "./MyButton"
import ListItem from './ListItem';
import CircleButton from './CircleButton';
import Database from './Database';
import ListItems from './ListItems';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alarms: []
        };


        this.del = this.del.bind(this)

    }
    async componentDidMount() {
        await this.getter()
    }
    async getter() {
        let gecik = await Database.getAll()
        console.log(JSON.parse(gecik));

        this.setState({
            alarms: JSON.parse(gecik).rows._array
        })
    }

    del(id) {
        Database.remove(id)
        this.setState({
            alarms: this.state.alarms.filter(el => el.id != id)
        })
    }

    render() {


        return (

            <View style={styles.viw}>
                <ScrollView >
                    <ListItems data={this.state.alarms} fun={this.del} />
                </ScrollView>
                <View style={styles.abs}>
                    <CircleButton fun={() => this.props.navigation.navigate("Add", { nazwa: this.getter.bind(this) })} src={plus2} />
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