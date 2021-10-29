import React, { useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/generic/button';
import GList from '../components/generic/genericList';
import OrderItem from '../components/orderItem';
import ButtonIcon from '../components/generic/buttonIcon';
import BarContext from "../contexts/barContext";
import OrderContext from "../contexts/orderContext";



const Order = () => {
    const navigation = useNavigation();
    const { products, setCurrentOrderProduct } = useContext(OrderContext);
    const { bar } = useContext(BarContext);

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <ButtonIcon name='arrow-left' buttonStyle={styles.headerIcon} onPress={ () => navigation.navigate("menuBar", { bar:bar }) } />
            )
        })
    }, []);

    const renderItem = ({ item }) => {
        return (
            
            <OrderItem item={item} onPress={() => { setCurrentOrderProduct(item), navigation.navigate("menuItem", {item:item}) }}></OrderItem>
        );
    }

    const getTotalAmountToPay = () => {
        const filtered = products.filter(product => {
           return product.state !== 'Pending';
        });

        return totalPrice(filtered);
    }

    const getTotalAmountToAdd = () => {
        const filtered = products.filter(product => {
           return product.state === 'Pending';
        });

        return totalPrice(filtered);
    }

    const totalPrice = (products) => {
        return products.reduce((total, product) => {
            return total + product.price
        }, 0);
    }

    return (
        <View>
            <GList data={products} item={renderItem}/>
            <View style={styles.buttonsContainer}>
                <Button 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonsTextStyle} 
                    title={ "Pedir $" + getTotalAmountToAdd(products) }>
                </Button>
                <Button 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonsTextStyle} 
                    title={ "Pagar $" + getTotalAmountToPay(products) }>
                </Button>
            </View>
        </View>
    );
}

export default () => {
    return (
        <Order/>
    );
};

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'flex-end',
    },
    buttonsTextStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    buttonStyle: {
        margin: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        paddingVertical: '2%',
        paddingHorizontal: '3%'
    },
    headerIcon: {
        margin: 10
    }
});