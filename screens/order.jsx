import React, { useEffect, useContext } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GList from '../components/generic/genericList';
import MenuItem from '../components/menuItem';
import ButtonIcon from '../components/generic/buttonIcon';
import OrderContext from "../contexts/orderContext";

const Order = (props) => {
    const navigation = useNavigation();
    const { products } = useContext(OrderContext);

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <ButtonIcon name='arrow-left' buttonStyle={styles.headerIcon} onPress={ () => navigation.navigate("menuBar") } />
            )
        })
    }, []);

    const renderItem = ({ item }) => {
        return (
            <MenuItem onPress={() => { navigation.navigate("menuItem", {item:item}) }} item={item} ></MenuItem>
        );
    }

    return (
        <View>
            <GList data={products} item={renderItem}/>
        </View>
    );
}

export default ( { route } ) => {
    const { order } = route.params;
    return (
        <Order order={order} />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    filterContainer: {
        height: 150
    },
    menuListContainer: {
        flex: 6,
    },
    barContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        width: '100%',
        height: '40%'
    },
    barTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    barImage: {
        width: '50%',
        height: '80%'
    },
    barAddress: {
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center'
    },
    headerIcon: {
        margin: 10
    }
});