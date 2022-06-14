import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class But extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.fun} style={styles.butty}>
                <Text style={styles.text}> {this.props.val} </Text>
            </TouchableOpacity>
        );
    }
}
let styles = StyleSheet.create({
    butty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 50
    }

})