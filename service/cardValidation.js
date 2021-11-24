
const validateCard = (cardNumber) => {
    return cardNumber.length == 19;
};

const validateDate = (date) => {
    let isValid = false;
    const month = parseInt(date.split("/")[0]);
    const currentMonth = parseInt(new Date().getMonth() + 1);
    const year = parseInt(date.split("/")[1]);
    const currentYear = parseInt(new Date().getFullYear()) - 2000;
    console.log(currentYear + " - " + year);
    if (date.length == 5 && month <= 12 && year >= currentYear) {
        isValid = (year == currentYear && month < currentMonth) ? false : true;
    }
    return isValid;
};

const validateAmount = (amount) => {
    return parseFloat(amount.split(" ")[1]) > 0;
};

const validateName = (name) => {
    return name.length > 0;
}

const validateCVV = (cvv) => {
    return cvv.length == 3;
}

const validate = (card) => {
    return validateCard(card.cardNumber) && validateAmount(card.amount) && validateName(card.name) && validateCVV(card.cvv) && validateDate(card.expDate);
}

export default validate;