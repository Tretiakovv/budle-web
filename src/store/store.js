import {create} from "zustand";
import {orderDeskSlice} from "./slices/orderDeskSlice";
import {authorizationSlice} from "./slices/authorizationSlice";
import {establishmentListSlice} from "./slices/establishmentListSlice";
import {workerSlice} from "./slices/workerSlice";

export const useStore = create((set, get) => ({
    ...orderDeskSlice(set, get),
    ...authorizationSlice(set, get),
    ...establishmentListSlice(set, get),
    ...workerSlice(set, get)
}))