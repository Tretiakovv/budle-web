import orderList from "../../data/entity/OrderList";
import {OrderStatus} from "../../data/enum/OrderStatus";
import {api} from "../../api/API";

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

    changeOrderStatus: async (status, orderId) => {
        api.post('/business/order', null, {
            params: {
                orderId: orderId,
                status: status
            }
        })
            .then(console.log)
            .catch(console.log)
    },

    setOrderDesk: (newOrderDesk) => set({orderDesk: newOrderDesk}),
    selectOrder: (order) => set({selectedOrder: order})

})