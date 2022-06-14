import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native';

import MyButton from "./MyButton"
import { settings } from "./Settings"

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Login: "",
            Password: "",

        };
    }
    logUpt(e) {
        this.setState({
            Login: e
        })
    }
    pasUpt(e) {
        this.setState({
            Password: e
        })
    }
    fecz() {
        fetch(settings.addres + ":" + settings.port, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: this.state.Login,
                pass: this.state.Password
            })
        })
            .then(
                res => res.json()
            )
            .then(
                data => {
                    if (data.dodano == true) {
                        alert("dodano")
                        this.props.navigation.navigate("Users")
                    } else {
                        alert("niedodano")
                    }
                }

            )
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.all}>
                <View style={styles.head}>
                    <Text style={styles.title}>Register Node App</Text>
                </View>
                <View style={styles.cont}>
                    <Text style={styles.txt}> Login </Text>
                    <TextInput placeholder="login" defaultValue={this.state.Login} onChangeText={this.logUpt.bind(this)} style={styles.txt}></TextInput>
                    <Text style={styles.txt}> Password </Text>
                    <TextInput placeholder="hasło" defaultValue={this.state.Password} onChangeText={this.pasUpt.bind(this)} style={styles.txt}></TextInput>


                    <MyButton txt="wyślij" fun={this.fecz.bind(this)} />
                </View>
            </KeyboardAvoidingView>
        );
    }
}
let styles = StyleSheet.create({
    all: {
        flex: 1,
        flexDirection: "column",

    },
    head: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: "center",

    },
    title: {
        fontSize: 60
    },
    cont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    txt: {
        fontSize: 20
    }
})