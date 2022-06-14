import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import * as Sharing from 'expo-sharing';

import * as MediaLibrary from "expo-media-library";
import MyButton from './MyButton';

const myWidth = Dimensions.get("window").width
const myHeight = Dimensions.get("window").height

export default class BigFoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    async sharePhoto() {
        if (await Sharing.isAvailableAsync()) {
            /**@type {MediaLibrary.Asset} */
            const phot = this.props.route.params.img
            Sharing.shareAsync(phot.uri)
        }

    }
    async del() {
        /**@type {MediaLibrary.Asset} */
        const phot = this.props.route.params.img
        const refresh = this.props.route.params.refresh

        await MediaLibrary.deleteAssetsAsync([phot.id])

        refresh()
        this.props.navigation.goBack()
    }

    render() {
        /**@type {MediaLibrary.Asset} */
        const phot = this.props.route.params.img
        return (
            <View style={styles.item}>
                <Image style={styles.img} source={{ uri: phot.uri }} />

                <View style={styles.but}>
                    <MyButton txt="share" fun={this.sharePhoto.bind(this)} />
                    <MyButton txt="delete" fun={this.del.bind(this)} />
                </View>
            </View>
        );
    }
}
let styles = StyleSheet.create({
    item: {
        display: "flex",
        flex: 1,
        flexDirection: 'column',
        // justifyContent: "center",
        alignItems: 'center',
        // fontFamily: "myfont",



    },
    but: {
        width: "100%",
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 30
    },
    txt: {

        fontSize: 20,
        fontFamily: "myfont",
        textAlign: "center",
        zIndex: 20
    },
    img: {
        // flex: 1,
        width: "80%",
        height: "80%",

        // position: 'absolute',
        // left: 0,
        // top: 0,

        borderRadius: 10,
    }
})
