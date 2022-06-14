import React, { Component } from 'react';
import { View, Text, Touchable, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import propTypes from 'prop-types';



const myWidth = Dimensions.get("window").width
const myHeight = Dimensions.get("window").height

class CircleButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <TouchableOpacity onPress={this.props.fun} style={[styles.but,
            this.props.width ? { width: this.props.width, height: this.props.width } : null,
            this.props.bakground ? { backgroundColor: this.props.bakground } : null]}>

                <Image style={styles.img} source={this.props.src} />

            </TouchableOpacity>

        );
    }
}
CircleButton.propTypes = {
    src: propTypes.string.isRequired,
    fun: propTypes.func.isRequired,
}
let styles = StyleSheet.create({
    txt: {
        fontSize: 20,
        fontFamily: "myfont",


    },
    but: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 200,
        width: myWidth * 0.2,
        height: myWidth * 0.2,
        backgroundColor: "gray",
        padding: 5
    },
    img: {
        width: "100%",
        height: "100%",
    },
})
export default CircleButton;
