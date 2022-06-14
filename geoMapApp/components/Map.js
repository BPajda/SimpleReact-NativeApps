import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const table = this.props.route.params.table;
        console.log(table);

        return (
            <View style={styles.cont}>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitudeDelta: 0.001,
                        longitudeDelta: 0.001,
                        ...table[0].pozycja.coords
                    }}
                >
                    {table.map((item, index) => (
                        <MapView.Marker
                            key={index}
                            coordinate={{
                                latitude: item.pozycja.coords.latitude,
                                longitude: item.pozycja.coords.longitude,
                            }}
                            title={`pos ${index}`}
                            description={`opis ${index}`}
                        />
                    ))}
                </MapView>
            </View>
        );
    }
}
let styles = StyleSheet.create({
    cont: {
        height: "100%",
        width: "100%",
        display: "flex",
    },

    img: {
        width: 300,
        height: 300,

    },
    txt: {
        fontSize: 20
    }
})