import React, { Component } from 'react';
import { View, Text, StyleSheet, BackHandler, ToastAndroid, } from 'react-native';
import CircleButton from "./CircleButton"
import { Camera } from "expo-camera";
import rotate from "../assets/rotate.png";
import plus2 from "../assets/plus2.png";

import * as MediaLibrary from "expo-media-library";

export default class CameraScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,         
            type: Camera.Constants.Type.back,  
        };
        this.backToGallery = this.backToGallery.bind(this)
    }

    async componentDidMount() {
        let { status } = await Camera.requestCameraPermissionsAsync();
        this.setState({ hasCameraPermission: status == 'granted' });
        BackHandler.addEventListener("hardwareBackPress", this.backToGallery);
    }
    componentWillUnmount() {
        this.props.route.params.refresh()
        BackHandler.removeEventListener("hardwareBackPress", this.backToGallery);
    }
    rotate() {
        this.setState({
            type: this.state.type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back,
        });

    }
    async takePhoto() {
        if (this.camera) {
            let foto = await this.camera.takePictureAsync();
            let asset = await MediaLibrary.createAssetAsync(foto.uri); // domyślnie zapisuje w folderze DCIM

            ToastAndroid.showWithGravity(
                "Zrobiono zdjęcie",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }
    }
    backToGallery() {
        this.props.navigation.goBack()
        return true
    }


    render() {
 

        const { hasCameraPermission } = this.state; 


        if (hasCameraPermission == null) {
            return <View />;
        } else if (hasCameraPermission == false) {
            return <Text>brak dostępu do kamery</Text>;
        } else {
            return (
                <View style={styles.cont}>
                    <Camera
                        ref={ref => {
                            this.camera = ref; 
                        }}
                        style={{ flex: 1 }}
                        type={this.state.type}>
                        <View style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "flex-end", flexDirection: "row" }}>
                            
                            <CircleButton fun={this.rotate.bind(this)} src={rotate} style={{ flex: 1 }} />
                            <CircleButton fun={this.takePhoto.bind(this)} src={plus2} style={{ flex: 1 }} />
                        </View>
                    </Camera>
                </View>
            );
        }


        // return (
        //     <View style={styles.cont}>

        //     </View>
        // );
    }
}
let styles = StyleSheet.create({
    cont: {
        height: "100%",
        width: "100%",
        display: "flex",
        // justifyContent: "center",
        alignItems: "stretch",
    },

    img: {
        width: 300,
        height: 300,

    },
    txt: {
        fontSize: 20
    }
})