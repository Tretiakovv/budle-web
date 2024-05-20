import {createEffect} from "effector";
import {api} from "../../../api/API";

export const deleteCategory = async (data) => {
    return api.delete("/business/menu", {params : data})
        .then(data => data.result)
}

export const deleteProduct = async (data) => {
    return api.delete("/business/menu/product", {params : data})
        .then(data => data.result)
}

export const deleteCategoryFx = createEffect(deleteCategory)
export const deleteProductFx = createEffect(deleteProduct)