import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import MyButton from "./MyButton"
import { settings } from "./Settings"
import ListItem from './ListItem';

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: [],
        };
    }
    componentDidMount() {
        fetch(settings.addres + ":" + settings.port)
            .then(
                res => res.json()
            )
            .then(
                data => {
                    this.setState({
                        Users: data,
                    })
                }

            )
    }
    del(id) {
        fetch(settings.addres + ":" + settings.port + "/del", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id

            })
        })
            .then(
                res => res.json()
            )
            .then(
                data => {
                    this.setState({
                        Users: data
                    })
                }

            )
    }
    toDet(f) {
        this.props.navigation.navigate("Details", { id: f.id, login: f.login, password: f.pass, time: f.time })
    }
    render() {
        return (
            <View style={styles.viw}>
                <MyButton txt="back to login" fun={() => this.props.navigation.navigate("Main")} />

                <FlatList style={styles.viw}
                    data={this.state.Users}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <ListItem style={styles.viw} id={item.id} login={item.login} password={item.pass} time={item.time} toDet={this.toDet.bind(this, item)} del={this.del.bind(this, item.id)} />}

                />
            </View>
        );
    }
}
let styles = StyleSheet.create({
    viw: {
        flex: 1


    }
})