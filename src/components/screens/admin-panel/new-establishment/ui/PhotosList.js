import React from 'react';
import {useUnit} from "effector-react";
import {uploadImageFx} from "../../../../../models/image/model";
import {useFieldArray, useFormContext} from "react-hook-form";
import ControlledPhotoCard from "../../../../../ui/atoms/inputs/file-input/ControlledPhotoCard";
import FileInput from "../../../../../ui/atoms/inputs/file-input/FileInput";
import FormRow from "./FormRow";

const PhotosList = () => {

    const uploadImage = useUnit(uploadImageFx)

    const methods = useFormContext()
    const {fields, append, remove} = useFieldArray({
        control: methods.control,
        name: 'photosInput'
    })

    const handleAppend = async (event) => {
        const file = event.target.files?.[0]
        const imageURL = await uploadImage(file)
        append(imageURL)
    }

    return (
        <FormRow>
            <div className={'w-full flex flex-col gap-4'}>
                <h4 className={'font-medium text-medium'}>Фотографии заведения</h4>
                <section className={'w-full grid grid-cols-3 gap-5 pb-10'}>
                    {fields.map((field, index) => (
                        <ControlledPhotoCard
                            name={`photosInput.${index}`}
                            onDelete={() => remove(index)}
                            key={index}
                        />
                    ))}
                    <FileInput
                        placeholder={"Выберите фотографию"}
                        label={"Фотография"}
                        onChange={handleAppend}
                    />
                </section>
            </div>
        </FormRow>
    )

}

export default PhotosList;