
import axios from 'axios';
const url = "http://localhost:3000/api/bar/";

export const getBar = async (barId) => {
    return await axios({
        method: 'GET',
        url: url.concat(barId),
    }).then((response) => {
        return response.data;
    });
}

export const getProductsByBar = async (barId) => {
    return await axios({
        method: 'GET',
        url: url.concat("productByBar/" + barId),
    }).then((response) => {
        return response.data;
    });
}