import {createEffect, createEvent, createStore, sample} from "effector";
import {getEstablishmentsFx} from "../establishment-list/model";
import {api} from "../../api/API";
import {deleteCategoryFx, deleteProductFx, editCategoryFx, editProductFx} from "./edit_delete_menu/model";

const getMenu = async (establishmentId) => {
    return api.get('/establishment/menu', {params: {establishmentId}})
        .then(data => data.result)
}

const createCategory = async (data) => {
    const request = {...data, parentCategoryId: data.parentCategoryId ? data.parentCategoryId.value : null}
    return api.post('/business/menu', request)
        .then(data => data.result)
}

const createProduct = async (data) => {
    const request = {...data, categoryId: data.categoryId.value}
    return api.post('/business/menu/product', request)
        .then(data => data.result)
}

export const createCategoryFx = createEffect(createCategory)
export const createProductFx = createEffect(createProduct)

export const getMenuFx = createEffect(getMenu)
export const $menu = createStore(null)

$menu.on(getMenuFx.doneData, (_, menu) => menu)

export const $establishmentOptions = createStore([])
export const $activeEstablishmentOption = createStore(null)
export const changeActiveOptionEvent = createEvent()

export const $selectedMenuItems = createStore([])
$selectedMenuItems.on(getMenuFx.doneData, (_, menu) => {
    return menu.map(group => ({label: group.name, value: group.id}))
})

export const $selectedMenuCategories = createStore([])
$selectedMenuCategories.on(getMenuFx.doneData, (_, menu) => {
    return menu.map(group => group.childCategories.map(cat => ({label: cat.name, value: cat.id}))).flat()
})

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

sample({
    clock: [
        createCategoryFx.doneData, createProductFx.doneData,
        deleteProductFx.doneData, deleteCategoryFx.doneData,
        editCategoryFx.doneData, editProductFx.doneData
    ],
    source: $activeEstablishmentOption,
    fn: source => source.id,
    target: getMenuFx
})