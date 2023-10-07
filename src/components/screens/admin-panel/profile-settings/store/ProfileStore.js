import {create} from "zustand"

export const useProfileStore = create((set) => ({

    username: "",
    email: "",
    phoneNumber: "",
    isPopupVisible: false,

    setPopupVisible: (isVisible) => set(() => ({
        isPopupVisible: isVisible
    })),
    confirmPhoneNumber: () => set(() => console.log("CONFIRM_PHONE_NUMBER"))

}))