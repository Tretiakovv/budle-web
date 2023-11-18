import {create} from "zustand";
import {orderDeskSlice} from "./slices/orderDeskSlice";
import {authorizationSlice} from "./slices/authorizationSlice";

export const useStore = create((set, get) => ({
    ...orderDeskSlice(set, get),
    ...authorizationSlice(set, get)
}))