import axios from "axios";
import {jwtDecode} from "jwt-decode";

const BASEURL = 'https://www.budle.ru'

export const api = axios.create({
    baseURL: BASEURL,
    withCredentials: true
})

const handleResponseError = async (error) => {
    const originalRequest = error.config
    if ((error.response.status === 400 || error.response.status === 401) && !originalRequest._retry) {
        originalRequest._retry = true
        const response = await axios.post(
            `${BASEURL}/business/refresh`,
            null, {withCredentials: true})
        localStorage.setItem("ACCESS_TOKEN", response.data.result.accessToken)
        return api(originalRequest)
    } else {
        const message = error.response.data.exception.message
        return Promise.reject(message)
    }
}

const handleResponseFulfilled = async (config) => {
    if (config.status === 200 && !config.data.exception) {
        return config.data
    } else return Promise.reject(config.data.exception.message)
}

api.interceptors.request.use(config => {
    const accessToken = localStorage.getItem("ACCESS_TOKEN")
    if (typeof accessToken === 'string') {
        const token = jwtDecode(accessToken)
        if (Date.now() <= token.exp * 1000) {
            config.headers.Authorization = `Bearer ${accessToken}`
        } else {
            localStorage.removeItem("ACCESS_TOKEN")
        }
    }
    return config
})

api.interceptors.response.use(handleResponseFulfilled, handleResponseError)