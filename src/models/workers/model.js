import {api} from "../../api/API";
import {createEffect, createEvent, createStore, sample} from "effector";
import {getEstablishmentsFx} from "../establishment-list/model";

const inviteWorkerByToken = async (data) => {
    return api.put('/business/worker/invite', null, {
        params: {
            establishmentId: data.establishmentId,
            token: data.token
        }
    })
        .then(data => data.result)
}

const addExistingWorker = async (data) => {
    return api.put('/business/worker', null, {
        params: {
            establishmentId: data.establishmentId,
            workerId: data.workerId
        }
    })
        .then(data => data.result)
}

const deleteWorker = async (data) => {
    return api.delete('/business/worker', {
        params: {
            establishmentId: data.establishmentId,
            workerId: data.workerId
        }
    })
        .then(data => data.result)
}

const getAllWorkers = async () => {
    return api.get('/business/worker/all')
        .then(data => data.result)
}

export const inviteWorkerByTokenFx = createEffect(inviteWorkerByToken)
export const addExistingWorkerFx = createEffect(addExistingWorker)
export const deleteWorkerFx = createEffect(deleteWorker)
export const getAllWorkersFx = createEffect(getAllWorkers)

export const $workersOptions = createStore([])
$workersOptions.on(getAllWorkersFx.doneData, (_, workers) => workers.map(w => ({
    label: `${w.middleName} ${w.firstName} ${w.lastName}`,
    value: w.id
})))

export const $workers = createStore([])

export const $managerScreenOptions = createStore([])
export const $managerScreenActiveOption = createStore(null)
export const setManagerScreenActiveOption = createEvent()

$managerScreenActiveOption
    .on(getEstablishmentsFx.doneData, (_, op) => ({name: op[0].name, id: op[0].id}))
    .on(setManagerScreenActiveOption, (_, option) => option)

$managerScreenOptions.on(getEstablishmentsFx.doneData, (_, options) => options.map(o => ({
    name: o.name, id: o.id, value: o.id, label: o.name
})))

$workers.on(getAllWorkersFx.doneData, (_, workers) => workers)

sample({
    clock: [deleteWorkerFx.doneData, inviteWorkerByTokenFx.doneData, addExistingWorkerFx.doneData],
    target: getAllWorkersFx
})