import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ItemHeader from '../components/itemHeader';
import QuantitySelector from '../components/quantitySelector';
import OrderContext from "../contexts/orderContext";

const MenuItem = ({route}) => {
    const {item} = route.params;
    const navigation = useNavigation();
    const [quantity, setQuantity] = useState(item.quantity > 0 ? item.quantity : 1);
    const { changeProductQuantity, setCurrentOrderProduct, currentOrderProduct, resetCurrentOrderProduct, addProduct } = useContext(OrderContext);
    
    const receiveValue = (value) => {
        setQuantity(value);
    }

    useEffect(() => {
        setCurrentOrderProduct(item);
    },[]);

    const performAction = () => {
        if(currentOrderProduct.state === "Pending"){
            changeProductQuantity(item, quantity);
        } else {
            
            addProduct(item, quantity);
        }



        resetCurrentOrderProduct();
        navigation.navigate("menuBar");
    }

    return(
        <View style={styles.container}>
            <ItemHeader item={item} />
            <QuantitySelector style={styles.column} value={quantity} onChange={(value) => receiveValue(value)} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={performAction} style={styles.touchable}>
                    <Text style={styles.touchableText}>AGREGAR AL PEDIDO</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
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
        width: '80%',
        height: 50,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        backgroundColor: '#58ACFA',
        alignItems: 'center'
    },
    touchableText:{
        color: '#ffffff',
        fontWeight: 'bold'
    }
});

export default MenuItem;
