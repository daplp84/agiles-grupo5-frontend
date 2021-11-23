
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, ScrollView } from 'react-native';
import CardFlip from 'react-native-card-flip';
import FrontCard from '../../components/frontCard';
import BackCard from '../../components/backCard';
import Input from '../../components/generic/input';
import Button from '../../components/generic/button';
import ButtonIcon from '../../components/generic/buttonIcon';
import styles from './deposit.component.style';
import { MaskedTextInput } from "react-native-mask-text";
import payment from '../../service/payment';
import { useNavigation } from '@react-navigation/native';
import { getBalanceById, updateBalance } from '../../service/balance';
import validate from '../../service/cardValidation';


const Deposit = () => {
    const [card, setCard] = useState({});
    const [cardIcon, setCardIcon] = useState({});
    const [cardNumber, setCardNumber] = useState('');
    const [fullName, setFullName] = useState('');
    const [amount, setAmount] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCVV] = useState('');
    const [validationError, setValidationError] = useState(false);
    const [successfulDeposit, setSuccessfulDeposit] = useState(false);
    const [depositText, setDepositText] = useState('Ingresar Dinero');
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <ButtonIcon name='arrow-left' onPress={() => navigation.goBack()} />
            )
        })
    }, []);

    const updateCardNumber = (number) => {
        if (number.length == 4) {
            if (number == payment.VISA.id) {
                setCardIcon(payment.VISA.url);
            } else if (number == payment.MASTER.id) {
                setCardIcon(payment.MASTER.url);
            }
        }
        setCardNumber(number);
    }

    const depositHandle = async () => {
        const balance = await getBalanceById("1");
        const card = {
            'cardNumber': cardNumber,
            'name': fullName,
            'amount': amount,
            'expDate': expirationDate,
            'cvv': cvv,
        }
        if (validate(card)) {
            setValidationError(false);
            const newBalance = parseFloat(balance.amount) + parseFloat(amount.split(" ")[1]);
            updateBalance("1", newBalance);
            setSuccessfulDeposit(true);
            setTimeout(() => {
                navigation.navigate("Saldo");
            }, 2000)
        } else {
            setValidationError(true);
            setTimeout(() => {
                setValidationError(false);
            }, 2000)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <CardFlip style={styles.cardContainer} ref={(card) => setCard(card)} duration={1100}>
                    <TouchableOpacity style={styles.cardStyle}>
                        <FrontCard
                            cardNumber={cardNumber}
                            fullName={fullName.toUpperCase()}
                            expDate={expirationDate}
                            icon={cardIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardStyle} onPress={() => card.flip()} >
                        <BackCard
                            cvv={cvv}
                        />
                    </TouchableOpacity>
                </CardFlip>
                <View style={styles.fieldsContainer}>
                    <MaskedTextInput
                        type="currency"
                        options={{
                            prefix: '$ ',
                            decimalSeparator: '.',
                            precision: 2
                        }}
                        onChangeText={(text, rawText) => {
                            setAmount(text);
                        }}
                        style={styles.field}
                        keyboardType="numeric"
                    />
                    <MaskedTextInput
                        mask="9999 9999 9999 9999"
                        onChangeText={(text, rawText) => {
                            updateCardNumber(text);
                        }}
                        placeholder="Número de Tarjeta"
                        style={styles.field}
                    />
                    <Input
                        value={fullName}
                        onChangeText={(val) => setFullName(val)}
                        inputStyle={styles.field}
                        placeholder="Apellido y Nombre"
                        length = {19}
                    />
                    <MaskedTextInput
                        mask="99/99"
                        onChangeText={(text, rawText) => {
                            setExpirationDate(text);
                        }}
                        placeholder="Fecha expiración MM/AA"
                        style={styles.field}
                    />
                    <MaskedTextInput
                        mask="999"
                        onChangeText={(text, rawText) => {
                            setCVV(text);
                        }}
                        onFocus={() => card.flip()}
                        onBlur={() => card.flip()}
                        placeholder="CVV"
                        style={styles.field}
                    />
                    <Button
                        buttonStyle={styles.payButton}
                        textStyle={styles.payTextStyle}
                        title={depositText}
                        onPress={() => depositHandle()}
                    ></Button>
                    {validationError &&
                        <Text style={styles.errorMessage} >Verifica los valores ingresados</Text>
                    }
                    {successfulDeposit &&
                        <Text style={styles.successMessage} >Carga realizada</Text>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Deposit;