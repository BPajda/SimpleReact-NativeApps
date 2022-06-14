import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color
        };
    }

    render() {
        console.log(this.state.color);

        return (
            <View style={{ flex: 1, backgroundColor: "#" + this.props.color }}>
                <Text style={styles.text}>{this.props.nr} Item </Text>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    text: { fontSize: 48, }
});


