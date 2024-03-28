import {useForm} from "react-hook-form";
import {useStore} from "../../../../../../store/store";
import {useMutation, useQueryClient} from "react-query";

export const useAddEstablishmentPopup = () => {

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

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                let encoded = reader.result.toString().replace(/^data:(.*,)?/, '');
                if ((encoded.length % 4) > 0) {
                    encoded += '='.repeat(4 - (encoded.length % 4));
                }
                resolve(encoded);
            };
            reader.onerror = error => reject(error);
        });
    }

    const {
        register, handleSubmit, control,
        formState: {errors}
    } = useForm({
        mode: "all",
        defaultValues: {
            name: "",
            category: "",
            tags: [],
            image: "",
            description: "",
            hasMap: false,
            hasCardPayment: false,
            address: "",
            subway: "",
            price: 500,
            rating: 4.3,
            workingHours: [],
            photosInput: [],
            cuisineCountry: "",
        }
    })

    const updateData = (data) => {

        const newData = {}

        for (const [key, value] of Object.entries(data)) {
            newData[key] = value
            if (value instanceof Array) {
                if (value.length !== 0) {
                    for (const item of value) {
                        newData[key][value.indexOf(item)] = {name: item["value"]}
                    }
                }
            } else if (value instanceof Object) {
                newData[key] = value["value"]
            }
        }

        delete newData["timezone"]
        return newData

    }

    const queryClient = useQueryClient()

    const addEstablishment = useStore(state => state.addEstablishment)

    const addEstablishmentMutation = useMutation({
        mutationKey: ["post", "establishment"],
        mutationFn: (data) => addEstablishment(data),
        onMutate: () => queryClient.invalidateQueries({queryKey: ["get", "establishmentList"]})
    })

    const onSubmit = (data) => {

        data["cuisineCountry"] = data["cuisine_country"]
        delete data["cuisine_country"]

        getBase64(data["image"]).then((base64) => {

            data["image"] = base64
            const validData = updateData(data)
            validData["workingHours"] = [
                {days: ["Пн", "Вт", "Ср", "Чт"], startTime: "12:00", endTime: "23:00"},
                {days : ["Пт", "Сб", "Вс"], startTime : "13:00", endTime: "22:00"}
            ]
            addEstablishmentMutation.mutate(validData)

        })

    }

    return {
        handleSubmit: handleSubmit(onSubmit),
        register, control, errors, getMessage,
        createOptionsArray
    }

}