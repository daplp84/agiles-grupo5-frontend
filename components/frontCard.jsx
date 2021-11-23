import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';

const FrontCard = (props) => {
    const image = require('./../images/card-front.png');
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.fieldContainer}>
                    <Text style={styles.cardNumber} >{props.cardNumber} </Text>
                    <View style={styles.fieldRow}>
                        <Text style={styles.nameLabel}>Apellido y Nombre</Text>
                        <Text style={styles.dateLabel}>Vencimiento</Text>
                    </View>
                    <View style={styles.fieldRow}>
                        <Text style={styles.name}>{props.fullName}</Text>
                        <Text style={styles.date}>{props.expDate}</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default FrontCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fieldContainer: {
        marginTop: 30,
    },
    fieldRow: {
        flexDirection: 'row',
        flexWrap: "wrap",
        marginLeft: 20,
    },
    name: {
        fontSize: 15,
        marginTop: 10,
        color: 'white',
        alignSelf: 'flex-start',
        width: '70%',
    },
    nameLabel: {
        fontSize: 13,
        color: 'gray',
        width: '70%',
        alignSelf: 'flex-start',
    },
    date: {
        fontSize: 15,
        marginTop: 10,
        color: 'white',
        alignSelf: 'flex-end',
        width: '30%',
    },
    dateLabel: {
        fontSize: 13,
        alignSelf: 'flex-end',
        color: 'gray',
        width: '30%'
    },
    cardNumber: {
        marginBottom: 20,
        marginTop: 35,
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
    },
    image: {
        width: '100%',
        height: '100%',
    }
});