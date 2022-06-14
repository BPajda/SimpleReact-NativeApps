import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ListItem from './ListItem';


export default class ListItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <View>
                {this.props.data.length > 0 ? this.props.data.map(el => <ListItem key={el.id} data={el} fun={this.props.fun} />) : null}
            </View>
        );
    }
}
