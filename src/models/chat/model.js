import {api} from "../../api/API";
import {createEffect, createEvent, createStore, sample} from "effector";
import dayjs from "dayjs";

//region getChatHistory

const getChatHistory = async (orderId: number) => {
    return api.get("/business/chat/history", {params: {orderId: orderId}})
        .then(response => response.result)
}

const getChatHistoryFx = createEffect(getChatHistory)
export const getChatHistoryEvent = createEvent()
export const $chatHistory = createStore([])

$chatHistory.on(getChatHistoryFx.doneData, (_, hist) => mapHistoryToMessages(hist))

sample({
    clock: getChatHistoryEvent,
    target: getChatHistoryFx
})

const mapHistoryToMessages = (history) => {
    return history.map(item => ({
        message: item.message,
        timestamp: dayjs(item.timestamp).format("HH:mm"),
        type: item.senderType === "BUSINESS" ? "incoming" : "outgoing"
    }))
}

//endregion

//region getUserInfo

const getUserInformation = async () => {
    return api.get("/business/me")
        .then(response => response.result)
}

const getUserInformationFx = createEffect(getUserInformation)
export const getUserInformationEvent = createEvent()
export const $userInfo = createStore(null)

$userInfo.on(getUserInformationFx.doneData, (_, info) => info)

sample({
    clock: getUserInformationEvent,
    target: getUserInformationFx
})

//endregion