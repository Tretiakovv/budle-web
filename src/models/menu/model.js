import {createEffect, createEvent, createStore} from "effector";
import {getEstablishmentsFx} from "../establishment-list/model";
import {api} from "../../api/API";

const getMenu = async (establishmentId) => {
    return api.get('/establishment/menu', {params: {establishmentId}})
        .then(data => data.result)
}

export const getMenuFx = createEffect(getMenu)
export const $menu = createStore(null)

$menu.on(getMenuFx.doneData, (_, menu) => menu)

export const $establishmentOptions = createStore([])
export const $activeEstablishmentOption = createStore(null)
export const changeActiveOptionEvent = createEvent()

$activeEstablishmentOption
    .on(changeActiveOptionEvent, (_, option) => option)
    .on(getEstablishmentsFx.doneData, (_, options) => {
        return ({name: options[0].name, id: options[0].id})
    })

$establishmentOptions.on(getEstablishmentsFx.doneData, (_, options) => {
    return options.map(op => ({name: op.name, id: op.id}))
})

export const $editMode = createStore(false)
export const toggleEditModeEvent = createEvent()

$editMode.on(toggleEditModeEvent, (state) => !state)