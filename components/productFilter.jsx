import React, { useContext, useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import categories from '../util/category';
import string from '../util/string';
import Button from './generic/button';
import BarContext from '../contexts/barContext';
import { SearchBar } from 'react-native-elements';
import ButtonIcon from './generic/buttonIcon';


const ProductFilter = (props) => {
    const { setProductsFilter, searchProduct, cleanFilter } = useContext(BarContext);
    const [searchValue, setSearchValue] = useState('');
    const [filterButton, setFilterButton] = useState(false);

    const setSelectedValue = (category) => {
        setFilterButton(true);
        setProductsFilter(category);
    }

    const handleProductSearch = (searchValue) => {
        setSearchValue(searchValue);
        if (searchValue.length >= 3) {
            searchProduct(searchValue);
        } else {
            cleanFilter();
        }
    }

    const removeFilters = () => {
        cleanFilter();
        setFilterButton(false);
    };

    return (
        <View style={styles.container}>
            <SearchBar
                containerStyle={styles.search}
                inputContainerStyle={styles.search}
                inputStyle={styles.input}
                lightTheme={true}
                placeholder={string.SCREEN_BAR_FILTER_PRODUCTS_PLACEHOLDER.name}
                onChangeText={(searchValue) => handleProductSearch(searchValue)}
                value={searchValue}
                searchIcon={false}
                clearIcon
            />
            <View style={styles.buttons}>
                <Button 
                    onPress={() => setSelectedValue(categories.FOODS)} 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.textStyle} 
                    title={string.SCREEN_BAR_FOODS.name}>
                </Button>
                <Button 
                    onPress={() => setSelectedValue(categories.DRINKS)} 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.textStyle} 
                    title={string.SCREEN_BAR_DRINKS.name}>
                </Button>
                <Button 
                    onPress={() => setSelectedValue(categories.DESSERTS)} 
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textStyle} 
                    title={string.SCREEN_BAR_DESSERTS.name}>
                </Button>

                {filterButton &&
                    <ButtonIcon 
                        name="trash" onPress={() => removeFilters()} >
                    </ButtonIcon>
                }

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
        backgroundColor: 'white'
    },
    search: {
        flex: 1,
        paddingBottom: 20,
        paddingTop: 20,
        alignItems: 'center',
        backgroundColor: 'white'
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
        borderColor: '#009688'
    }
});

export default ProductFilter;


