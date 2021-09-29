import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, Platform } from 'react-native';


const MenuItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <View style={styles.column}>
                <Text style={styles.name}>{props.item.name}</Text>
                <Text style={styles.description}>{props.item.description}</Text>
                <Text style={styles.price}>$ {props.item.price}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: props.item.image}} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginBottom: 10,
        padding: 5,
        flexDirection: "row"
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 20,
        color: '#2F4F4F'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 4,
    },
    imageContainer: {
        flex: 1,
        marginRight: 10,
        paddingRight: 0,
    },
    column: {
        flex: 4,
    },
    image: {
        width: 50,
        height: 50,
    }
});

export default MenuItem;


