import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop:40,
        alignItems: 'center',
    },
    cardContainer: {
        width: 400,
        height: 250,
    },
    cardStyle: {
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'gray',
        width: 400,
        height: 250,
        padding: 5,
    },
    fieldsContainer: {
        width: 400,
        height: 250,
        marginTop: 20,
    },
    field: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 10,
        fontSize: 15,
        padding: 4,
    },
    payButton: {
        width: 400,
        backgroundColor: '#58ACFA',
        textAlign: 'center',
        borderRadius: 10,
        borderRadius: 4,
        borderWidth: 1,
        fontSize: 15,
        borderColor: 'gray',
        marginTop: 10,
        padding: 4,
    },
    payTextStyle : {
        fontSize: 15
    },
    errorMessage: {
        marginTop: 10,
        color: 'red',
    },
    successMessage: { 
        marginTop: 10,
        color: 'green',
    }
});