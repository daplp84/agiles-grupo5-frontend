
import React, { useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/generic/button';
import ButtonIcon from '../components/generic/buttonIcon';


const Tax = () => {
    const navigation = useNavigation();
    

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <ButtonIcon name='arrow-left' buttonStyle={styles.headerIcon} onPress={ () => navigation.navigate("menuBar") } />
            )
        })
    }, []);

    return(
        <View style={styles.buttons}>
        <Button 
            onPress={() => { navigation.navigate("order")}}
            buttonStyle={styles.buttonStyle} 
            textStyle={styles.textStyle} 
            title={"Sin Propina"}>
        </Button>
        <Button 
            onPress={() => { navigation.navigate("order")}} 
            buttonStyle={styles.buttonStyle} 
            textStyle={styles.textStyle} 
            title={"10%"}>
        </Button>
        <Button 
            onPress={() => { navigation.navigate("order")}} 
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle} 
            title={"20%"}>
        </Button>     
    </View>
    )
}


export default () => {
    return (
        <Tax/>
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