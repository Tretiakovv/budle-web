import {api} from "../../api/API";
import {createEffect, createEvent, createStore, sample} from "effector";
import {getEstablishmentsFx} from "../establishment-list/model";

const getOrders = async (establishmentId) => {
    return api.get("/business/orders", {params: {establishmentId: establishmentId}})
        .then(data => data.result)
}

const changeOrderStatus = async (data) => {
    return api.post('/business/order', null, {
        params: {
            orderId: data.orderId,
            establishmentId: data.establishmentId,
            status: data.status
        }
    })
        .then(data => data.result)
}

export const $orderScreenOptions = createStore([])
$orderScreenOptions.on(getEstablishmentsFx.doneData, (_, data) => data.map(e => ({name: e.name, id: e.id})))

export const $activeOrdersOption = createStore(null)

export const setActiveOrdersOption = createEvent()

$activeOrdersOption
    .on(getEstablishmentsFx.doneData, (_, data) => ({name: data[0].name, id: data[0].id}))
    .on(setActiveOrdersOption, (_, option) => option)


export const changeOrderStatusFx = createEffect(changeOrderStatus)
export const getOrdersFx = createEffect(getOrders)

export const $orders = createStore([])
$orders.on(getOrdersFx.doneData, (_, orders) => orders)

sample({
    clock: $activeOrdersOption,
    filter: option => option !== null,
    fn: option => option.id,
    target: getOrdersFx
})

sample({
    clock: changeOrderStatusFx.doneData,
    target: getOrdersFx
})