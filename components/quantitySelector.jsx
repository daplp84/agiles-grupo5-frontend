import React, { useEffect } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { useState } from "react";

const QuantitySelector = (props) => {
    const [qty, setQty] = useState(props.value);
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
            <View style={styles.controlsContainer}>
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>Cantidad:</Text>
                </View>
                <View style={styles.rowButtonLeft}>
                    <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <Text style={styles.quantity}>{qty}</Text>
                </View>
                <View style={styles.rowButtonRight}>
                    <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 30
    },
    controlsContainer:{
        height: 100,
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#f9f9f9'
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
        width: '50%',
        height: 30,
        borderRadius: 3,
        backgroundColor: '#58ACFA',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#ffffff',
        fontWeight: 'bold'
    }
});
export default QuantitySelector;