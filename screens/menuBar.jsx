import React, { useEffect, useContext } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BarContextProvider } from '../contexts/barContext';
import BarContext from '../contexts/barContext';
import GList from '../components/generic/genericList';
import MenuItem from '../components/menuItem';
import ProductFilter from '../components/productFilter';
import ButtonIcon from '../components/generic/buttonIcon';

const MenuBar = (props) => {
    const navigation = useNavigation();
    const { currentBar, setCurrentBar, products } = useContext(BarContext);

    useEffect(() => {
        //props.barId
        setCurrentBar("1");
        navigation.setOptions({
            headerRight: () => (
                <ButtonIcon name='shopping-cart' buttonStyle={styles.headerIcon} />
            )
        });
        navigation.setOptions({
            headerLeft: () => (
                <ButtonIcon name='arrow-left' buttonStyle={styles.headerIcon} />
            )
        });
    }, []);

    const renderItem = ({ item }) => {
        return (
            <MenuItem onPress={() => { navigation.navigate("login") }} item={item} ></MenuItem>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.barContainer}>
                <Image style={styles.barImage} source={{ uri: currentBar.image }} />
                <Text style={styles.barTitle}> {currentBar.name} </Text>
                <Text style={styles.barAddress}> {currentBar.address} </Text>
            </View>
            <View style={styles.filterContainer}>
                <ProductFilter />
            </View>
            <View style={styles.menuListContainer} >
                <GList data={products} item={renderItem} />
            </View>
        </View>
    );
}
export default () => {
    return (
        <BarContextProvider>
            <MenuBar />
        </BarContextProvider>
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