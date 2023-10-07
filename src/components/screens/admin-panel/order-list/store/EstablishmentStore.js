import {create} from "zustand"
import establishmentTagList from "../../../../../data/entity/EstablishmentTagListData";

export const useEstablishmentStore = create((set) => (
    {

        popupVisible: false,
        establishmentTags: establishmentTagList,
        branchTags: establishmentTagList,
        selectedEstablishmentTag: {id: 0, name: ""},
        selectedBranchTag: {id: 0, name: ""},

        setPopupVisible: (isVisible) => set(() => ({
            popupVisible: isVisible
        }))

    }
))