import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.cont}>
                <Image source={require("../assets/user.png")} style={styles.img} />
                <Text style={styles.txt}>Login: {this.props.route.params.login}</Text>
                <Text style={styles.txt}>Password: {this.props.route.params.password}</Text>
                <Text style={styles.txt}>Registred: {this.props.route.params.time}</Text>
            </View>
        );
    }
}
let styles = StyleSheet.create({
    cont: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    img: {
        width: 300,
        height: 300,

    },
    txt: {
        fontSize: 20
    }
})