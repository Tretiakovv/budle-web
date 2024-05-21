import {createEffect, createEvent, createStore} from "effector";
import {api} from "../../../api/API";

export const deleteCategory = async (data) => {
    return api.delete("/business/menu", {params : data})
        .then(data => data.result)
}

export const deleteProduct = async (data) => {
    return api.delete("/business/menu/product", {params : data})
        .then(data => data.result)
}

const editCategory = async (data) => {
    return api.put("/business/menu", data)
        .then(data => data.result)
}

const editProduct = async (data) => {
    return api.put("/business/menu/product", data)
        .then(data => data.result)
}

export const deleteCategoryFx = createEffect(deleteCategory)
export const deleteProductFx = createEffect(deleteProduct)

export const editCategoryFx = createEffect(editCategory)
export const editProductFx = createEffect(editProduct)

export const setCategoryToEditEvent = createEvent()
export const setProductToEditEvent = createEvent()

export const $categoryToEdit = createStore(null)
export const $productToEdit = createStore(null)

$categoryToEdit.on(setCategoryToEditEvent, (_, data) => data)
$productToEdit.on(setProductToEditEvent, (_, data) => data)