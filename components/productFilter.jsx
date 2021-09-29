import React, { useContext } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import categories from '../util/category';
import string from '../util/string';
import Button from './generic/button';
import Input from './generic/input';
import BarContext from '../contexts/barContext';


const ProductFilter = (props) => {
    const { setProductsFilter } = useContext(BarContext);

    const setSelectedValue = (category) => {
        setProductsFilter(category);
    }
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Input inputStyle={styles.input} placeholder={string.SCREEN_BAR_FILTER_PRODUCTS_PLACEHOLDER.name} />
            </View>
            <View style={styles.buttons}>
                <Button onPress={() => setSelectedValue(categories.FOODS)} buttonStyle={styles.buttonStyle} textStyle={styles.textStyle} title={string.SCREEN_BAR_FOODS.name}></Button>
                <Button onPress={() => setSelectedValue(categories.DRINKS)} buttonStyle={styles.buttonStyle} textStyle={styles.textStyle} title={string.SCREEN_BAR_DRINKS.name}></Button>
                <Button onPress={() => setSelectedValue(categories.DESSERTS)} buttonStyle={styles.buttonStyle} textStyle={styles.textStyle} title={string.SCREEN_BAR_DESSERTS.name}></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
    },
    search: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
    },
    buttonStyle: {
        width: 100,
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        paddingVertical: '2%',
        paddingHorizontal: '3%'
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        fontWeight: 'bold',
        fontSize: 15,
        height: 30,
        width: '90%',
        borderWidth: 2,
        borderRadius: 10,
        color: '#009688',
        paddingLeft: 5,
        borderColor: '#009688',
    }
});

export default ProductFilter;


