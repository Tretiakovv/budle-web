import {create} from "zustand"
import menuData from "../../../../../data/entity/MenuData";

export const useBranchMenuStore = create((set) => ({

    branchMenu: null,

    filterBranchMenu: (establishmentID, branchID) => set(() => ({
        branchMenu: menuData.filter(branch => {
            return branch.establishmentID === establishmentID &&
                branch.branchID === branchID
        })[0]
    }))

}))