import {create} from "zustand"
import establishmentData from "../../../../data/entity/EstablishmentData";

export const useEstablishmentStore = create((set) => ({

    branchToDelete: null,
    establishmentList: [],
    testEstablishments: [],

    addBranch: (branchToAdd) => set((state) => ({
        establishmentList: state.establishmentList.map(establishment => {
            if (branchToAdd.establishmentID === establishment.id) {
                return {
                    ...establishment,
                    branches: [
                        ...this.branches,
                        branchToAdd
                    ]
                }
            } else return establishment
        })
    })),

    deleteBranch: (branchToDelete) => set((state) => ({
        establishmentList: state.establishmentList.map(establishment => {
            if (branchToDelete.establishmentName === establishment.establishmentName) {
                return {
                    ...establishment,
                    branches: establishment.branches.filter(branch => branch.address !== branchToDelete.branch.address)
                }
            } else return establishment
        })
    })),

    getEstablishments: () => set(() => ({
        establishmentList: establishmentData
    })),

    selectBranch: (branch) => console.log(set(() => ({
        branchToDelete: branch
    }))),

    filterEstablishments: (establishmentName) => set((state) => ({
        establishmentList: establishmentName === "" ? state.establishmentList :
            establishmentData.filter(establishment => {
                return establishment.establishmentName === establishmentName
            })
    }))

}))