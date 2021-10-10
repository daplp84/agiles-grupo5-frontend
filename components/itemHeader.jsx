import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
const ItemHeader = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: props.item.image }} resizeMode="contain"/>
            </View>
            <View style={styles.dataContainer}>
                <View style={styles.row}><Text style={styles.name}>{props.item.name}</Text></View>
                <View style={styles.row}><Text style={styles.price}>$ {props.item.price}</Text></View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff'
    },
    imageContainer:{
        flex: 3,
        paddingTop: 50,
        paddingBottom: 10,
        alignItems: "center"
    },
    image: {
        width: 150,
        height: 150
    },
    dataContainer:{
        flex: 1,
        flexDirection: "row",
    },
    row:{
        flex: 1,
        alignItems: "center"
    },
    name:{
        fontSize: 20
    },
    price:{
        fontSize: 20,
        fontWeight: 'bold'
    }
});
export default ItemHeader;