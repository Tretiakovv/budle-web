import {useForm} from "react-hook-form";
import {useStore} from "../../../../../../store/store";
import {useMutation, useQueryClient} from "react-query";
import {useUnit} from "effector-react";
import {createEstablishmentFx} from "../../../../../../models/new-establishment/model";
import {useState} from "react";

export const useAddEstablishmentPopup = () => {

    const [isSuccess, setSuccess] = useState(undefined)

    const messageMap = {
        "name": "имя пользователя",
        "category": "категорию",
        "cuisine_country": "вид кухни",
        "address": "адрес",
        "description": "Описание заведения не может быть меньше 50 символов",
        "timezone": "часовой пояс",
        "image": "фотографию"
    }

    const getMessage = (name) => {
        if (name === "description") return messageMap[name]
        return `Выберите ${messageMap[name]}`
    }

    const createOptionsArray = (arr) => {
        return arr.map(item => new Object({value: item, label: item}))
    }

    const methods = useForm({
        mode: "onSubmit",
        defaultValues: {
            price: 500,
            rating: 4.3
        }
    })

    return {
        methods, getMessage, createOptionsArray,
        isSuccess
    }

}