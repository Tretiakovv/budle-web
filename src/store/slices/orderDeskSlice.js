import orderList from "../../data/entity/OrderList";
import {OrderStatus} from "../../data/enum/OrderStatus";

export const orderDeskSlice = (set) => ({

    orderDesk: [],

    currentOrder: null,
    currentStack: null,
    selectedOrder: null,

    setCurrentOrder: (order) => set({currentOrder: order}),
    setCurrentStack: (stack) => set({currentStack: stack}),

    initOrderDesk: () => {
        const defaultOrderDesk = Object.keys(OrderStatus).map((key, index) => {
            return {
                id: index,
                name: OrderStatus[key],
                items: orderList.filter((order) => order.status === index)
            }
        })
        console.log(defaultOrderDesk)
        set({orderDesk: defaultOrderDesk})
    },

    setOrderDesk: (newOrderDesk) => set({orderDesk: newOrderDesk}),
    selectOrder: (order) => set({selectedOrder: order})

})