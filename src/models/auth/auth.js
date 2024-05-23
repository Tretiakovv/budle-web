import {api} from "../../api/API";
import {createEffect, createStore} from "effector";

const registerUser = async (formData) => {
    return api.post('/business/registration', formData)
        .then(response => response.data)
}

const loginUser = async (formData) => {
    return api.post('/business/login/jwt', formData)
        .then(response => {
            sessionStorage.setItem("ACCESS_TOKEN", response.result.accessToken)
            return response.data
        })
}

const getMe = async () => {
    return api.get('/business/me')
        .then(data => data.result)
}

export const getMeFx = createEffect(getMe)
export const $me = createStore(null)

$me.on(getMeFx.doneData, (_, me) => me)

export const registerUserFx = createEffect(registerUser)
export const loginUserFx = createEffect(loginUser)