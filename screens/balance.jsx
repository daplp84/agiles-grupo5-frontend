import React, { useState } from 'react';
import Card from '../components/generic/card';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/generic/button';

const Balance = (props) => {
    const navigation = useNavigation();
    const [ bar, setBar ] = useState({ id: "1" });
    const pressHandler = () => navigation.navigate("menuBar", { bar });

    return (
        <View style={styles.buttons}>
            <Button onPress={pressHandler} buttonStyle={styles.buttonStyle} textStyle={styles.textStyle} title='test'></Button>
        </View>
    );
};

export default () => {
    return (
        <Balance/>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
    },
    search: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
    },
    buttonStyle: {
        width: 100,
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        paddingVertical: '2%',
        paddingHorizontal: '3%'
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        fontWeight: 'bold',
        fontSize: 15,
        height: 30,
        width: '90%',
        borderWidth: 2,
        borderRadius: 10,
        color: '#009688',
        paddingLeft: 5,
        borderColor: '#009688',
    }
});