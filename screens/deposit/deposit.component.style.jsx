import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        alignSelf: 'center'
    },
    cardContainer: {
        width: '100%',
        height: '80%',
    },
    cardStyle: {
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'gray',
        width: '100%',
        height: '100%',
        padding: 5,
    },
    fieldsContainer: {
        width: '100%',
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
        width: '100%',
        height: 40,
        backgroundColor: '#58ACFA',
        borderRadius: 10,
        borderRadius: 4,
        borderWidth: 1,
        fontSize: 15,
        borderColor: 'gray',
        marginTop: 10,
        padding: 4,
    },
    payTextStyle: {
        fontSize: 15,
        textAlign: 'center',
        textAlignVertical: 'center'
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