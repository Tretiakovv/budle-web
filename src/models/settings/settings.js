import {api} from "../../api/API";
import {createEffect, createStore} from "effector";

const getToken = async () => {
    return api.get('/business/token')
        .then(response => response.result)
}

export const getTokenFx = createEffect(getToken)
export const $token = createStore(null)
$token.on(getTokenFx.doneData, (_, token) => token)