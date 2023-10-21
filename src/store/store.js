import {create} from "zustand";
import {orderDeskSlice} from "./slices/orderDeskSlice";

export const useStore = create((set, get) => ({
    ...orderDeskSlice(set, get)
}))