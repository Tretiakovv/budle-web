import {api} from "../../api/API";

export const workerSlice = (set, get) => ({

    workers : [],

    getWorkers : async (establishmentId) => {
        return api.get('/business/worker', {params : {establishmentId : establishmentId}})
            .then((response) => set({workers : response.data.result}))
            .catch((error) => console.error(error))
    },

    addWorker : async (worker) => {
        return api.post('/business/worker', worker)
            .then((response) => console.log(response))
            .catch((exception) => console.error(exception))
    },

    removeWorker : async (establishmentId, workerId) => {
        return api.delete('/business/worker', {
            params : {
                establishmentId : establishmentId,
                workerId : workerId
            }
        })
            .then((response) => console.log(response))
            .catch((exception) => console.error((exception)))
    }

})