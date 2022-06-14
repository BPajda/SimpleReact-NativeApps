import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import MyButton from './MyButton';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.item}>
                <View style={styles.img} >
                    <Image source={require("../assets/user.png")} style={styles.img} />

                </View>
                <Text style={styles.txt}> {this.props.id}: {this.props.login} {this.props.password} </Text>
                <MyButton style={styles.but} txt="Details" fun={this.props.toDet} />
                <MyButton style={styles.but} txt="Delete" fun={this.props.del} />
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

    },
    txt: {

        fontSize: 20
    },
    but: {
        flex: 1,
    },
    img: {

        width: 70,
        height: 70,

    }
})