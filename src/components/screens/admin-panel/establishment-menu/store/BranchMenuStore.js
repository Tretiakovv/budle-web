import {create} from "zustand"
import menuData from "../../../../../data/entity/MenuData";
import axios from "axios";

export const useBranchMenuStore = create((set) => ({

    branchMenu: null,
    testBranchMenu: null,

    filterBranchMenu: (establishmentID, branchID) => set(() => ({
        branchMenu: menuData.filter(branch => {
            return branch.establishmentID === establishmentID &&
                branch.branchID === branchID
        })[0]
    })),

    fetchBranchMenu: async () => {
        const response = await axios.get("http://192.168.1.119:8080/menu?establishmentId=1")
        set({testBranchMenu: await response.data})
    },

    deletePosition: async (productId) => {
        const response = await axios.delete(`http://192.168.1.119:8080/menu/product?productId=${productId}`)
        if (response.status !== 200) console.log("DELETE ERROR")
    }

}))