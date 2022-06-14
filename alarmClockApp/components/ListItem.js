import React, { Component } from 'react';
import { View, Text, Switch, StyleSheet, Dimensions, Animated, TouchableOpacity } from 'react-native';
import CircleButton from './CircleButton';
import Arrow from './Arrow';
import trash from "../assets/trash.jpg";
import down from "../assets/down.png";
import up from "../assets/up.png";
// const myWidth = Dimensions.get("window").width
// const myHeight = Dimensions.get("window").height
let days = ["PN", "WT", "ŚR", "CZ", "PT", "SB", "ND"]
export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myHeight: Dimensions.get("window").height / 4,
            animHeight: new Animated.Value(Dimensions.get("window").height / 16),
            expanded: false,
            activeDays: []
        };
        this.toValue = 0
    }
    toggle() {

        if (!this.state.expanded) this.toValue = this.state.myHeight / 2
        else this.toValue = this.state.myHeight / 4

        Animated.spring(this.state.animHeight, {
            toValue: this.toValue,
            useNativeDriver: false,
        }).start();

        this.setState({
            expanded: !this.state.expanded
        })

    }
    addToActive(smth) {
        if (this.state.activeDays.includes(smth)) {
            this.setState({
                activeDays: this.state.activeDays.filter(el => el != smth)

            })
        } else {
            let dayes = Array.from(this.state.activeDays)
            dayes.push(smth)
            this.setState({
                activeDays: dayes
            })
        }
    }

    render() {
        return (
            <View style={{
                borderBottomWidth: 2,
                borderBottomColor: "white",
                marginBottom: 20,
                marginHorizontal: 20,
            }}>
                <View style={{

                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                        <Text style={{
                            color: "white",
                            fontSize: 60,
                        }}>{this.props.data.hour}:{this.props.data.minutes}</Text>
                        <Switch />
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                        <CircleButton fun={() => { this.props.fun(this.props.data.id) }} src={trash} width={50} bakground={"transparent"} />
                        <Arrow fun={this.toggle.bind(this)} src={this.state.expanded ? up : down} width={50} bakground={"transparent"} />

                    </View>
                </View>
                <Animated.View style={{
                    height: this.state.animHeight,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-around",
                }}>
                    {this.state.expanded ? days.map(el => <TouchableOpacity style={this.state.activeDays.includes(el) ? { backgroundColor: "black" } : null} onPress={this.addToActive.bind(this, el)}><Text>{el}</Text></TouchableOpacity>) : <Text>{this.state.activeDays.map(el => ` ${el} `)}</Text>}
                </Animated.View>
            </View>
        );
    }
}
let styles = StyleSheet.create({

})