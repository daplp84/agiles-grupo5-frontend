
import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

const BackCard = (props) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./../images/card-back.png')} style={styles.image}>
                <View style={styles.fieldContainer}>
                    <Text style={styles.cvv}>{props.cvv}</Text>
                </View>     
            </ImageBackground>      
        </View>  
    );
};

export default BackCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    fieldContainer: {
        alignSelf: 'flex-end',
        marginTop: 110,
        marginRight: 30,
    },
    cvv: {
        fontSize: 22,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
