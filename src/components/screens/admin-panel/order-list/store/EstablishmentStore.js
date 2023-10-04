import {create} from "zustand"
import optionList from "../../../../../data/entity/OptionData";

export const useEstablishmentStore = create((set) => (
    {
        popupVisible: false,
        establishmentTags: optionList,
        branchTags: optionList,
        selectedEstablishmentTag: {id: 0, name: ""},
        selectedBranchTag: {id: 0, name: ""},
        selectEstablishmentTag: (establishmentTag) => set(() => (
            {
                selectedEstablishmentTag: establishmentTag
            }
        )),
        selectBranchTag: (branchTag) => set(() => ({
            selectedBranchTag: branchTag
        })),
        setPopupVisible: (isVisible) => set(() => ({
            popupVisible: isVisible
        }))
    }
))