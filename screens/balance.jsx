import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/generic/button';
import Card from '../components/generic/card';
import { useNavigation } from '@react-navigation/native';
import BarContext from '../contexts/barContext';
import OrderContext from '../contexts/orderContext';
import getBalanceById from '../service/balance';

const Balance = () => {
    const navigation = useNavigation();
    const { setCurrentOrder } = useContext(OrderContext);
    const { setCurrentBar } = useContext(BarContext);
    const [balanceAmount, setBalanceAmount] = useState("-");
    const pressHandler = () => navigation.navigate("qrScanner");

    const updateBalance = async () => {
        const balance = await getBalanceById("1");
        setBalanceAmount(balance.amount);
    };

    useEffect(() => {
        updateBalance();
        setCurrentBar("1");
        setCurrentOrder("1", "1");
    }, []);

    return (
        <View style={styles.container}>
            <Card>
                <Text style={styles.balanceText}>$ {balanceAmount}</Text>
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
    qrButtonStyle: {
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
    qrButtonTextStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#ffffff',
    },
    buttonsTextStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
    }
});