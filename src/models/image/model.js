import {api} from "../../api/API";
import {createEffect} from "effector/compat";

const uploadImage = async (image) => {
    const formData = new FormData()
    formData.append('image', image)
    return api.post('/establishment/image', formData, {
        headers : {
            'Content-type' : 'multipart/form-data'
        }
    })
        .then(data => data.result)
}

export const uploadImageFx = createEffect(uploadImage)