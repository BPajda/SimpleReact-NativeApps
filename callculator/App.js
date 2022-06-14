import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import But from "./components/But"

export default class App04 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            but: [
                [1, 4, 7, "."],
                [2, 5, 8, 0],
                [3, 6, 9, "="],
                ["C", "/", "*", "-", "+"]
            ],
            BlackOps: "",
            res: "",
            last: ""
        };
    }
    calc(event) {
        console.log(event);
        if (event == "C") {
            this.setState({
                BlackOps: "",
                res: ""
            })
        } else if (event == "=") {
            this.setState({
                BlackOps: this.state.res
            })
        } else if (event == "+" || event == "-" || event == "*" || event == "/") {
            let las = this.state.last
            if (las == "+" || las == "-" || las == "*" || las == "/") {
                this.setState({
                    BlackOps: this.state.BlackOps,
                    res: this.state.res
                })
            } else {
                let op = this.state.BlackOps + event.toString()
                let las = event.toString()
                let wyn
                if (isNaN(event)) {
                    wyn = this.state.res

                } else {
                    wyn = eval(op)
                }
                this.setState({
                    BlackOps: op,
                    res: wyn,
                    last: las
                })
            }

        } else {

            let op = this.state.BlackOps + event.toString()
            let las = event.toString()
            let wyn
            if (isNaN(event)) {
                wyn = this.state.res

            } else {
                wyn = eval(op)
            }
            this.setState({
                BlackOps: op,
                res: wyn,
                last: las
            })
        }

    }

    render() {
        return (
            <View style={styles.calc}>
                <View style={styles.cont}>
                    <Text style={styles.ops}> {this.state.BlackOps} </Text>
                    <Text style={styles.res}> {this.state.res} </Text>

                </View>
                <View style={styles.buts}>
                    {this.state.but.map(e => {

                        return <View key={e} style={styles.col}>{e.map(f => {

                            return <But val={f} fun={this.calc.bind(this, f)} key={f} />
                        })}</View>
                    })}
                </View>

            </View>
        );
    }
}

let styles = StyleSheet.create({
    calc: {
        flex: 1,
    },
    cont: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: 'green'
    },
    buts: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'gray',
    },
    col: {
        flex: 1,
        flexDirection: 'column',
    },
    ops: {
        fontSize: 50
    },
    res: {
        fontSize: 75
    }
})
