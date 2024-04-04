import {api} from "../../api/API";

export const authorizationSlice = (set, get) => ({

    loginUser: async (data) => {
        return api.post("/business/login", data)
    },

    registerUser: async (data) => {
        return api.post("/business/registration", data)
            .then((response) => response.data.exception)
            .catch((error) => console.log(error))
    }

})