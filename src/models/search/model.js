import {createEffect} from "effector";
import axios from "axios";

const url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/metro";
const secret = '7e585157ab3fafecdc2fde0f0a396cd169716230'
const token = "8e43ca6441c60822c1e98a68b5eff023854b81a3";

const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Token " + token,
    "X-Secret": secret,
};

const getSubways = async (query) => {
    return axios.post(url, {query}, {headers : headers, withCredentials : true})
        .then(result => console.log(result))
}

export const getSubwaysFx = createEffect(getSubways)