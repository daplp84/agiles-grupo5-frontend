import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';

const FrontCard = (props) => {  
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./../images/card-front.png')} style={styles.image}>
                <Image
                    style={styles.logo}
                    source={{uri: props.icon}}
                />
                <View style={styles.fieldContainer}>    
                    <Text style={styles.cardNumber}>{props.cardNumber} </Text>
                    <View style={styles.fieldRow}>
                        <Text style={styles.nameLabel}>Apellido y Nombre</Text>
                        <Text style={styles.dateLabel}>Exp. Date</Text>
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
        marginLeft: 30,
    },
    name: {
        fontSize: 18,
        marginTop: 10,
        color: 'white',
        alignSelf: 'flex-start',
        width: 180,
    }, 
    nameLabel: {
        fontSize: 15,
        color: 'gray',
        width: 180,
        alignSelf: 'flex-start',
    }, 
    date: {
        fontSize: 18,
        marginTop: 10,
        marginLeft: 30,
        color: 'white',
        alignSelf: 'flex-end',
        width: 100,
    }, 
    dateLabel: {
        fontSize: 15,
        marginLeft: 30,
        alignSelf: 'flex-end',
        color: 'gray',
        width: 100,
    }, 
    cardNumber: {
        marginBottom: 20,
        marginTop: 10,
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    logo: {
        width: 60,
        height: 45,
        alignSelf: 'flex-end',
        margin: 10,
    }
});