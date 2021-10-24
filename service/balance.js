
import axios from 'axios';

const url = "http://localhost:3000/api/balance/";

const getBalanceById = async (balanceId) => {
    return await axios({
        method: 'GET',
        url: url.concat(balanceId),
    }).then((response) => {
        return response.data;
    });
}

export default getBalanceById;