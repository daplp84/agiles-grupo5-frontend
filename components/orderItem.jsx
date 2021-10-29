import React from 'react';
import { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import ButtonIcon from './generic/buttonIcon';
import OrderContext from '../contexts/orderContext';
import { useNavigation } from '@react-navigation/native';

const OrderItem = (props) => {
    const { products } = useContext(OrderContext);
    const { deleteProduct, setCurrentOrderProduct } = useContext(OrderContext);
    const navigation = useNavigation();
   
    const performDelete = () => {
        deleteProduct(props.item, products)
        setCurrentOrderProduct(props.item);
        navigation.navigate("order");
    };

    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <View style={styles.column}>
                <Text style={styles.name}>{props.item.name} <ButtonIcon name='trash' onPress={() => performDelete (props.item, products)}></ButtonIcon></Text>
                <Text style={styles.description}>x {props.item.quantity}</Text>
                <Text style={styles.description}>{props.item.state}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>$ {(props.item.price * props.item.quantity).toFixed(2)}</Text>
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
        padding: 20,
        flexDirection: "row",
        backgroundColor: 'white'
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
    priceContainer: {
        flex: 1,
        marginRight: 10,
        paddingRight: 0,
    },
    column: {
        flex: 3,
    }
});

export default OrderItem;


