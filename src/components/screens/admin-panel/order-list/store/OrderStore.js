import {create} from "zustand"
import orderList from "../../../../../data/entity/OrderList";

export const useOrderStore = create((set) => (
    {
        orders: orderList,
        selectedOrder: null,
        selectOrder: (order) => set(() => (
            {
                selectedOrder: order
            }
        ))
    }
))