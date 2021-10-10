import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ItemHeader from '../components/itemHeader';
import QuantitySelector from '../components/quantitySelector';
const MenuItem = (props) => {
    const navigation = useNavigation();
    const [quantity, setQuantity] = useState(1);
 
    const receiveValue = (q) => {
        setQuantity(q);
    }

    return(
        <View style={styles.container}>
            <ItemHeader item={props.item}/>
            <QuantitySelector style={styles.column} value={quantity} onChange={(q) => receiveValue(q)}/>
            <View style={styles.buttonContainer}><TouchableOpacity style={styles.touchable}><Text style={styles.touchableText}>AGREGAR AL PEDIDO</Text></TouchableOpacity></View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    column: {
        flex: 1,
        alignItems: 'center'
    },
    buttonContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    touchable:{
        width: "80%", 
        height: 50, 
        justifyContent: 'center', 
        borderWidth: 1,
        borderRadius: 5, 
        marginTop: 10, 
        backgroundColor: "#58ACFA", 
        alignItems: 'center'
    },
    touchableText:{
        color: "#ffffff",
        fontWeight: 'bold'
    }
});
export default MenuItem;