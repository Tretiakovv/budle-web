import {api} from "../../api/API";

export const authorizationSlice = (set, get) => ({

    loginUser : async (data) => {
        return api.post("/business/login", data)
            .then((response) => response.data.exception)
            .catch((error) => console.log(error))
    },

    registerUser : async (data) => {
        return api.post("/business/registration", data)
            .then((response) => response.data.exception)
            .catch((error) => console.log(error))
    }

})