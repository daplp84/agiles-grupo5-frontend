import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RenderTicket = (props) => {
    
    const navigation = useNavigation();
   
    return (
        <TouchableOpacity style={styles.container}>
             <View style={styles.column}>
                <Text style={styles.name}>{props.item.name} </Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>X{props.item.quantity} = $ {(props.item.price * props.item.quantity).toFixed(2)}</Text>
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
        fontSize: 23,
        fontWeight: 'bold',
        color: 'black'
    },
    description: {
        fontSize: 20,
        color: '#2F4F4F'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 4,
        color: '#5688ec'
    },
    priceContainer: {
        flex: 2,
        marginRight: 1,
        paddingRight: 0,

    },
    column: {
        flex: 3,
    }
});

export default RenderTicket;
