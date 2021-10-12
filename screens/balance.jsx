import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/generic/button';
import Card from '../components/generic/card';
import { useNavigation } from '@react-navigation/native';

const Balance = () => {
    const [ bar, setBar ] = useState({ id: "1" });
    const navigation = useNavigation();
    const pressHandler = () => navigation.navigate("menuBar", { bar:bar });

    return (
        <View style={styles.container}>
            <Card>
                <Text style={styles.balanceText}>$ 4.06</Text>
                <View style={styles.buttons}>
                    <Button 
                        buttonStyle={styles.cardButtonStyle} 
                        textStyle={styles.buttonsTextStyle} 
                        title={"Ingresar dinero"}>
                    </Button>
                    <Button 
                        buttonStyle={styles.cardButtonStyle} 
                        textStyle={styles.buttonsTextStyle} 
                        title={"Retirar dinero"}>
                    </Button>
                </View>
            </Card>
            <Button onPress={pressHandler} buttonStyle={styles.qrButtonStyle} textStyle={styles.qrButtonTextStyle} title='Escanear QR'></Button>
        </View>
    );
};

export default Balance;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
    },
    balanceText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 15,
        marginBottom: 15,
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
    },
    cardButtonStyle: {
        width: 75,
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        paddingVertical: '2%',
        paddingHorizontal: '3%'
    },
    qrButtonStyle:{
        alignSelf: 'center',
        position: 'absolute',
        bottom: 35,
        width: 90,
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#58ACFA', 
        paddingVertical: '2%',
        paddingHorizontal: '3%'
    },
    qrButtonTextStyle:{
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#ffffff',
    },
    buttonsTextStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
    }
});