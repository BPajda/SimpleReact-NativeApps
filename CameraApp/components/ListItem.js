import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Switch, TouchableOpacity, Dimensions } from 'react-native';
import MyButton from './MyButton';

import * as MediaLibrary from "expo-media-library";

import plus from "../assets/cross.png";

const myWidth = Dimensions.get("window").width
const myHeight = Dimensions.get("window").height

/**@extends {Component<{img: MediaLibrary.Asset, width: number, height: number,}>} */
export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };

    }
    select() {
        let sel = this.state.selected

        this.setState({
            selected: !sel
        })

    }




    render() {
        const { img, width, height, navi, refresh } = this.props

        const { selected } = this.state


        return (
            <TouchableOpacity style={{ width, height, margin: 2, }} onPress={this.select.bind(this)} onLongPress={() => navi("BigFoto", { img, refresh })}>
                <Text style={styles.txt}>{img.id}</Text>
                <Image style={styles.img} source={{ uri: img.uri }} />
                <Image style={{ ...styles.img, opacity: selected ? 0.7 : 0 }} source={plus} />
            </TouchableOpacity>
        );
    }
}
let styles = StyleSheet.create({
    item: {
        // flex: 1,
        // flexDirection: 'column',
        // justifyContent: "space-around",
        // alignItems: 'center',
        // fontFamily: "myfont",


        margin: 2,
    },
    txt: {

        fontSize: 20,
        fontFamily: "myfont",
        textAlign: "center",
        zIndex: 20
    },
    img: {
        // flex: 1,
        width: "100%",
        height: "100%",

        position: 'absolute',
        left: 0,
        top: 0,

        borderRadius: 10,

        // resizeMode: "stretch",
        // borderRadius: 100
    }
})