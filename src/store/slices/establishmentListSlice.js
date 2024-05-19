import {api} from "../../api/API";

export const establishmentListSlice = (set, get) => ({

    establishmentList: [],

    addEstablishment: async (data) => {
        return api.post("/business/v2/company", data)
            .then((response) => response.status)
            .catch((error) => console.log(error))
    },

    getEstablishmentList: async (name) => {
        api.get("/business/establishments", {params: {name: name}})
            .then((data) => set({establishmentList: data.result}))
            .catch((error) => console.log(error))
    }

})