import React, { Component } from 'react';
import { View, Text, FlatList, AsyncStorage, StyleSheet, Switch, ActivityIndicator } from 'react-native';

import * as Location from "expo-location";

import MyButton from "./MyButton"
import ListItem from './ListItem';

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // allEnabled: false,
            localisztionBool: true,
            positions: []
        };

        this.mainSwitchHandler = this.mainSwitchHandler.bind(this)
        this.getPosition = this.getPosition.bind(this)
        this.del = this.del.bind(this)
        this.goToMap = this.goToMap.bind(this)
    }
    async componentDidMount() {
        let positions = await AsyncStorage.getItem("positions");

        if (positions == undefined) {
            positions = []

            AsyncStorage.setItem("positions", JSON.stringify(positions))
        }
        else {
            positions = JSON.parse(positions)
        }

        this.setState({ positions })
    }

    async getPosition() {
        this.setState({ localisztionBool: false })
        let pos = await Location.getCurrentPositionAsync({})
        alert(JSON.stringify(pos, null, 4))

        let posList = {
            pozycja: pos,

            check: false
        }
        this.state.positions.push(posList)
        this.setState({ localisztionBool: true })
        this.setState({})

        AsyncStorage.setItem("positions", JSON.stringify(this.state.positions))
    }


    mainSwitchHandler() {
        // this.setState({ allEnabled: !this.state.allEnabled })
        let allEnabled = this.state.positions.every(el => el.check)

        this.state.positions.forEach(el => {
            el.check = !allEnabled
        })

        this.setState({})
    }
    del() {
        this.setState({
            positions: []
        })
        AsyncStorage.setItem("positions", JSON.stringify([]))
    }
    goToMap() {
        let table = this.state.positions.filter(el => el.check)

        if (table.length != 0) {
            this.props.navigation.navigate("Map", { table })
        }
        else {
            alert("Nie zaznaczyłeś żadnej pozycji")
        }
    }

    render() {
        const { positions, localisztionBool } = this.state

        let allEnabled = this.state.positions.every(el => el.check)

        return (
            localisztionBool
                ? (
                    <View style={styles.viw}>
                        <View style={styles.header}>
                            <MyButton txt="Pobierz i zapisz pozycje" fun={this.getPosition} />
                            <MyButton txt="Usuń wszystkie dane" fun={this.del} />

                        </View>
                        <View style={styles.header}>
                            <MyButton txt="Przejdź do mapy" fun={this.goToMap} />
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={allEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={this.mainSwitchHandler}
                                value={allEnabled}
                            />
                        </View>

                        <FlatList style={styles.viw}
                            data={positions}
                            keyExtractor={(item, id) => id.toString()}
                            renderItem={({ item }) => <ListItem style={styles.viw} item={item} parent={this} />}

                        />
                    </View>
                )
                : (
                    <View style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                )
        );
    }
}
let styles = StyleSheet.create({
    viw: {
        flex: 1,
        fontFamily: "myfont",


    },
    header: {
        display: "flex",
        flexDirection: "row",
        fontFamily: "myfont",
    }
})