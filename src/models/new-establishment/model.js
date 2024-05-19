import {api} from "../../api/API";
import {createEffect, createEvent, createStore, sample} from "effector";

const getTags = async () => {
    return api.get('/establishment/tags')
        .then(data => data.result)
}

const getCategories = async () => {
    return api.get('/establishment/category')
        .then(data => data.result)
}

const createEstablishment = async (data) => {
    return api.post("/business/v2/company", data)
        .then((data) => data)
}

export const createEstablishmentFx = createEffect(createEstablishment)

const getTagsFx = createEffect(getTags)
export const getTagsEvent = createEvent()

sample({
    clock : getTagsEvent,
    target : getTagsFx
})

export const getCategoriesFx = createEffect(getCategories)
export const $categories = createStore([])

$categories.on(getCategoriesFx.doneData, (_, categories) => categories.map(cat => ({label : cat, value : cat})))

export const $tags = createStore([])

$tags.on(getTagsFx.doneData, (_, tags) => tags.map(t => ({label : t.name, value : t.name})))

