import {api} from "../../api/API";
import {createEffect, createEvent, createStore, sample} from "effector";
import {getEstablishmentsFx} from "../establishment-list/model";

const getReviews = async (establishmentId) => {
    return api.get('/establishment/review/all', {params: {establishmentId: establishmentId}})
        .then(data => data.result)
}

const getReviewById = async (reviewId) => {
    return api.get('/establishment/review', {params: {reviewId: reviewId}})
        .then(data => data.result)
}

const answerReview = async (data) => {
    return api.post('/business/review/answer', data)
        .then(data => data.result)
}

export const answerReviewFx = createEffect(answerReview)

export const getReviewsFx = createEffect(getReviews)
export const getReviewByIdFx = createEffect(getReviewById)

export const $currentReview = createStore(null)
$currentReview.on(getReviewByIdFx.doneData, (_, review) => review)

export const $reviews = createStore([])
$reviews.on(getReviewsFx.doneData, (_, reviews) => reviews)

export const $reviewScreenOptions = createStore([])
export const $reviewScreenActiveOption = createStore(null)
export const setReviewScreenActiveOption = createEvent()

$reviewScreenActiveOption
    .on(getEstablishmentsFx.doneData, (_, op) => ({name: op[0].name, id: op[0].id}))
    .on(setReviewScreenActiveOption, (_, option) => option)

$reviewScreenOptions.on(getEstablishmentsFx.doneData, (_, options) => options.map(o => ({
    name: o.name, id: o.id, value: o.id, label: o.name
})))

sample({
    clock: $reviewScreenActiveOption,
    filter: clock => clock !== null,
    fn: clock => clock.id,
    target: getReviewsFx
})