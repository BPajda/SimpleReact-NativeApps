import React, { Component } from 'react';
import { View, Text, Touchable, TouchableOpacity, StyleSheet } from 'react-native';
import propTypes from 'prop-types';


class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.fun} style={styles.but}>

                <Text style={styles.txt}> {this.props.txt}</Text>

            </TouchableOpacity>

        );
    }
}
MyButton.propTypes = {
    txt: propTypes.string.isRequired,
    fun: propTypes.func.isRequired,
}
let styles = StyleSheet.create({
    txt: {
        fontSize: 20,
        fontFamily: "myfont",


    },
    but: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    }
})
export default MyButton;
