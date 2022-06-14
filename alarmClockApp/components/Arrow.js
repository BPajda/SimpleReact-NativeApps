import React, { Component } from 'react';
import { View, Text, Touchable, TouchableOpacity, StyleSheet, Image, Dimensions, TouchableNativeFeedback } from 'react-native';
import propTypes from 'prop-types';



const myWidth = Dimensions.get("window").width
const myHeight = Dimensions.get("window").height

class Arrow extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (

            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('rgba(255,255,255,1)', true)}
                onPress={this.props.fun}
            >
                <View style={[styles.but,
                this.props.width ? { width: this.props.width, height: this.props.width } : null,
                this.props.bakground ? { backgroundColor: this.props.bakground } : null]}>
                    <Image style={styles.img} source={this.props.src} />

                </View>
            </TouchableNativeFeedback>

        );
    }
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
export default Arrow;
