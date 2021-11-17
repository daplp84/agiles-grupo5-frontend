
import axios from 'axios';

const url = "http://localhost:3000/api/balance/";

export const getBalanceById = async (balanceId) => {
    return await axios({
        method: 'GET',
        url: url.concat(balanceId),
    }).then((response) => {
        return response.data;
    });
}

export const updateBalance = async (id, amount) => {
    await axios.patch(url + id, { amount: parseFloat(amount) }).catch(error => console.log(error));
}
