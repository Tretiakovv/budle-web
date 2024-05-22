import orderList from "../../data/entity/OrderList";
import {OrderStatus} from "../../data/enum/OrderStatus";
import {api} from "../../api/API";

export const orderDeskSlice = (set, get) => ({

    selectedEstablishmentId : 0,

    orders : [],
    orderDesk: [],

    currentOrder: null,
    currentStack: null,
    selectedOrder: null,

    setCurrentOrder: (order) => set({currentOrder: order}),
    setCurrentStack: (stack) => set({currentStack: stack}),

    getOrders : async (id) => {
        if (id === null) return
        api.get("/business/orders", {params : {establishmentId : id}})
            .then(response => set({orders : response.data.result}))
            .catch(error => console.log(error))
    },

    setOrderDesk: (newOrderDesk) => set({orderDesk: newOrderDesk}),
    selectOrder: (order) => set({selectedOrder: order})

})