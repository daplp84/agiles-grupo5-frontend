import React, { useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useState } from "react";

const QuantitySelector = (props) => {
    const [qty, setQty] = useState(1);
    useEffect(() => {
        sendValue();
    })

    const increaseQuantity = () => {
        setQty(qty+1);
        sendValue();
    }
    const decreaseQuantity = () => {
        setQty(qty > 1 ? qty-1 : qty);
        sendValue();
    }
    const sendValue = () => {
        props.onChange(qty);
    }

    return(
        <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>Cantidad:</Text>
                </View>
                <View style={styles.rowButtonLeft}>
                    <Button title="-" style={styles.button} onPress={decreaseQuantity} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.quantity}>{qty}</Text>
                </View>
                <View style={styles.rowButtonRight}>
                    <Button title="+" style={styles.button} onPress={increaseQuantity} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 30
    },
    container2:{
        height: 100,
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
    labelContainer:{
        flex: 5,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    row:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rowButtonLeft:{
        flex: 3,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    rowButtonRight:{
        flex: 3,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    label:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    quantity:{
        fontSize: 20
    },
    button: {
        width: 100
    }
});

export default QuantitySelector;