import React, { useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BarContextProvider } from '../contexts/barContext';
import BarContext from '../contexts/barContext';
import GList from '../components/generic/genericList';
import MenuItem from '../components/menuItem';
import ProductFilter from '../components/productFilter';

const MenuBar = (props) => {
    const navigation = useNavigation();
    const { currentBar, setCurrentBar, products } = useContext(BarContext);
    useEffect(() => {
        //props.barId
        setCurrentBar("1");
    }, []);

    const renderItem = ({ item }) => {
        return (
            <MenuItem onPress={() => { navigation.navigate("login") }} item={item} ></MenuItem>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.container2}><Text>...</Text></View>
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
    container2: {
        height: 200
    },
    filterContainer: {
        height: 150
    },
    menuListContainer: {
        flex: 6,
    }
});