import {createEffect, createStore} from "effector";
import {api} from "../../api/API";

export const getEstablishmentInfo = async (id) => {
    return api.get('/establishment', {params : {establishmentId  : id}})
        .then(data => data.result)
}

export const editEstablishment = async (data) => {
    const {establishmentId, request} = data
    return api.put('/business/v2/company', request, {params : {establishmentId}})
        .then(data => data.result)
}

export const editEstablishmentFx = createEffect(editEstablishment)
export const getEstablishmentFx = createEffect(getEstablishmentInfo)
export const $establishmentInfo = createStore(null)

$establishmentInfo.on(getEstablishmentFx.doneData, (_, data) => data)