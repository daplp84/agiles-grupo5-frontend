import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OrderContext from "../contexts/orderContext";
import BarContext from '../contexts/barContext';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';

const QRScanner = () => {
    const navigation = useNavigation();
    const { setCurrentOrder } = useContext(OrderContext);
    const { setCurrentBar } = useContext(BarContext);
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const onBarCodeScanned = (data) => {
        setScanned(true);
        try{
            const qrContent = JSON.parse(data.data);
            if(qrContent.App == "BirraYa"){
                const bar = qrContent.BarId;
                setCurrentBar(bar);
                setCurrentOrder("1", bar);
                navigation.push("menuBar")
            }else{
                setScanned(false);
            }
        }catch{
            setScanned(false);
        }
    }
  
    return(
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} flashMode={flashMode} onBarCodeScanned={scanned ? null : onBarCodeScanned} barCodeScannerSettings={{ barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr]}}>
                <View style={styles.waitContainer}>
                    <Image style={styles.waitImage} source={!scanned ? require('../images/sight.png') : require('../images/loading.gif')}></Image>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => {setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);}}>
                        <Image style={styles.image} source={require('../images/flip.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setFlashMode(flashMode === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off)}>
                        <Image style={styles.image} source={ flashMode === Camera.Constants.FlashMode.off ? require('../images/led-off.png') : require('../images/led-lamp.png')}></Image>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    waitContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    waitImage: {
        width: '50%',
        height: '50%',
        aspectRatio: 1,
    },
    buttonContainer: {
        flex: 0.5,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 50,
        width:  '200%'
    },
    button: {
       flex: 0.1,
       alignSelf: 'flex-end',
       alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
    image: {
      width: 50,
      height: 50
    }
});

export default QRScanner;