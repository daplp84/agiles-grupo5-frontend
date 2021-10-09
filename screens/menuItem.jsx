import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
            <View style={styles.column}></View>
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
    }
});
export default MenuItem;