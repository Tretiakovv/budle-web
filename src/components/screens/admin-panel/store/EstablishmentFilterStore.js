import {create} from "zustand"
import establishmentTagListData from "../../../../data/entity/EstablishmentTagListData";
import branchTagListData from "../../../../data/entity/BranchTagListData";

export const useEstablishmentFilterStore = create((set) => ({


    establishmentTagData: establishmentTagListData,
    branchTagData: [],

    selectedEstablishment: {id: 0, name: ""},
    selectedBranch: {id: 0, name: ""},

    selectEstablishment: (establishment) => set(() => ({
        selectedEstablishment: establishment,
        selectedBranch: {id: 0, name: ""}
    })),
    selectBranch: (branch) => set(() => ({
        selectedBranch: {id: branch.id, name: branch.name}
    })),
    filterBranches: () => set((state) => ({
        branchTagData: branchTagListData.filter(branch => {
            return branch.establishmentID === state.selectedEstablishment.id
        })
    }))

}))