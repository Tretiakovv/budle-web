import {api} from "../../api/API";

export const authorizationSlice = (set, get) => ({

    loginUser : async (data) => {
        api.post("/business/login", data)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    },

    registerUser : async (data) => {
        api.post("/business/registration", data)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }

})