import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Switch } from 'react-native';
import MyButton from './MyButton';

import mapa from "../assets/mapa.png";

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.switchHandler = this.switchHandler.bind(this)
    }

    switchHandler() {
        this.props.item.check = !this.props.item.check
        this.props.parent.setState({})
    }

    render() {
        const { pozycja, check } = this.props.item

        return (
            <View style={styles.item}>
                <Image style={styles.img} source={mapa} />
                <View style={styles.data}>
                    <Text style={{ fontFamily: "myfont" }}>Timestamp: {pozycja.timestamp}</Text>
                    <Text style={{ fontFamily: "myfont" }}>latitude: {pozycja.coords.latitude}</Text>
                    <Text style={{ fontFamily: "myfont" }}>longitude: {pozycja.coords.longitude}</Text>
                </View>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={check ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={this.switchHandler}
                    value={check}
                />
            </View>
        );
    }
}
let styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
        fontFamily: "myfont",

    },
    txt: {

        fontSize: 20,
        fontFamily: "myfont",
    },
    data: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "space-around",
        alignItems: 'center',
        fontFamily: "myfont",
    },
    but: {
        flex: 1,
        fontFamily: "myfont",
    },
    img: {
        // flex: 1,
        width: 70,
        height: 70,

        // resizeMode: "stretch",
        // borderRadius: 100
    }
})