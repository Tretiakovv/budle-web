import {api} from "../../api/API";
import {createEffect, createStore, sample} from "effector";
import {createEstablishmentFx} from "../new-establishment/model";

const getEstablishments = async (name) => {
    return api.get('/business/establishment/all', {params : {name}})
        .then(data => data.result)
}

const deleteEstablishment = async (establishmentId) => {
    return api.delete('/business/v2/company', {params : {establishmentId}})
        .then(data => data)
}

export const getEstablishmentsFx = createEffect(getEstablishments)
export const deleteEstablishmentFx = createEffect(deleteEstablishment)

export const $establishments = createStore([])
$establishments.on(getEstablishmentsFx.doneData, (_, establishments) => establishments)

sample({
    clock : [createEstablishmentFx.doneData, deleteEstablishmentFx.doneData],
    target : getEstablishmentsFx
})