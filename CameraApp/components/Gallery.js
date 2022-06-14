import React, { Component } from 'react';
import { View, Text, FlatList, AsyncStorage, StyleSheet, Switch, ActivityIndicator, Dimensions } from 'react-native';

import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo-permissions";
// import * as Location from "expo-location";

import MyButton from "./MyButton"
import ListItem from './ListItem';


const myWidth = Dimensions.get("window").width
const myHeight = Dimensions.get("window").height

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            /**@type {MediaLibrary.Asset[]} */
            images: [],
            numCollumns: 5,

            /** @type {ListItem[]} */
            listArray: [],

            // allEnabled: false,

            // positions: []
        };

    }

    async componentDidMount() {

        this.setState({ loading: false })


        const albumName = "DCIM";
        const getPhotos = await MediaLibrary.getAlbumAsync(albumName);

        let obj = await MediaLibrary.getAssetsAsync({
            first: 100,           // ilość pobranych assetów
            mediaType: 'photo',    // typ pobieranych danych, photo jest domyślne            
            album: getPhotos,
            sortBy: ['creationTime']
        })

        this.setState({ loading: true })



        this.setState({ images: obj.assets })

    }
    gridChange() {
        let grid = this.state.numCollumns
        if (grid == 5) {
            this.setState({
                numCollumns: 1
            })
        } else {
            this.setState({
                numCollumns: 5
            })
        }
    }
    async del() {
        this.setState({ loading: false })
        /** @type {ListItem[]} */
        let table = this.state.listArray.filter(el => (el.state.selected)).map(el => (el.props.img.id))

        await MediaLibrary.deleteAssetsAsync(table);

        this.setState({ loading: true })

        this.componentDidMount();
    }

    render() {
        this.state.listArray = [];


        const { images, numCollumns, listArray, loading } = this.state


        return (
            loading
                ?
                (
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <MyButton txt="Grid/Lista" fun={this.gridChange.bind(this)} />
                            <MyButton txt="Kamera" fun={() => this.props.navigation.navigate("Camera", { refresh: this.componentDidMount.bind(this) })} />
                            <MyButton txt="Usuń zdjecia" fun={this.del.bind(this)} />

                        </View>
                        <View style={styles.flatlist}>

                            <FlatList style={styles.viw}
                                data={images}
                                numColumns={numCollumns}
                                key={numCollumns}
                                keyExtractor={(item, id) => id.toString()}
                                renderItem={({ item }) => <ListItem ref={el => { listArray.push(el) }}
                                    img={item}
                                    width={(myWidth / numCollumns) * 0.9}
                                    height={numCollumns == 5 ? (myWidth / numCollumns) * 0.9 : myHeight * 0.2}
                                    navi={this.props.navigation.navigate}
                                    refresh={this.componentDidMount.bind(this)}
                                />}

                            />

                        </View>

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
    conatainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        width: myWidth,

        // justifyContent: "center",
        alignItems: "center",
        fontFamily: "myfont",
    },
    viw: {
        flex: 1,
        fontFamily: "myfont",




    },
    flatlist: {
        display: "flex",
        flexDirection: "row",
        width: myWidth,

        justifyContent: "center",

        fontFamily: "myfont",
    }
})