import React, { useEffect, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/generic/button';
import GList from '../components/generic/genericList';
import RenderTicket from '../components/renderTicket';
import ButtonIcon from '../components/generic/buttonIcon';
import BarContext from "../contexts/barContext";
import OrderContext from "../contexts/orderContext";



const Ticket = () => {
    const navigation = useNavigation();
    const { products } = useContext(OrderContext);
    const { bar } = useContext(BarContext);
   

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <ButtonIcon name='arrow-left' buttonStyle={styles.headerIcon} onPress={ () => navigation.navigate("menuBar", { bar:bar }) } />
            )
        })
    }, []);

    const renderTicket = ({ item }) => {
        return (
            <RenderTicket item={item}></RenderTicket>
        );
    }

    const getTotalAmountToTicket = () => {
        const filtered = products.filter(product => {
           return product.state !== 'Pending';
        });

        return ticketPrice(filtered);
    }

    const ticketPrice = (products) => {
        return products.reduce((total, product) => {
            return total + (product.price * product.quantity)
        }, 0);
    }

    return (
        <View>
            <GList data={products} item={renderTicket}/>
            <View>
                <Text style={styles.touchableText}> Total: ${getTotalAmountToTicket(products).toFixed(2)}</Text>           
                <Button
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonsTextStyle} 
                    title={ "Descargar Ticket" }>
                </Button>
            </View>
        </View>
    );

}

export default () => {
    return (
        <Ticket/>
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
    },
    touchableText:{
        textAlign: 'right',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
        marginRight:15
    }
});