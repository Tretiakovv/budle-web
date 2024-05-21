import React, {useEffect, useRef} from 'react';
import Popup from "../../../../../../../ui/wrappers/popup/Popup";
import PopupHeader from "../../../../../../../ui/atoms/rows/popup-header/PopupHeader";
import {useUnit} from "effector-react";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {EditCategorySchema} from "../../../../../../../schemas/menu/CreateCategorySchema";
import Toast from "../../../../../../../ui/moleculas/toast/Toast";
import ControlledTextInput from "../../../../../../../ui/atoms/inputs/text-input/ControlledTextInput";
import Button from "../../../../../../../ui/atoms/buttons/button/Button";
import {$categoryToEdit, editCategoryFx} from "../../../../../../../models/menu/edit_delete_menu/model";

const EditCategoryForm = (props) => {

    const successRef = useRef(null)
    const [editCategory, categoryToEdit] = useUnit([editCategoryFx, $categoryToEdit])

    const methods = useForm({
        resolver: zodResolver(EditCategorySchema),
        mode: 'onSubmit'
    })

    const showSuccess = () => {
        successRef.current.show({
            severity: 'success',
            summary: 'Категория успешно отредактирована!',
        });
    };

    const showFailure = (message) => {
        successRef.current.show({
            severity: 'error',
            summary: 'Возникли ошибки при редактировании категории.',
            detail: message,
        });
    };

    const onSubmit = (data) => {
        editCategory(data)
            .then(_ => {
                props.onClose()
                showSuccess()
            })
            .catch(showFailure)
    }

    useEffect(() => {
        methods.reset({
            id: String(categoryToEdit.id),
            name: categoryToEdit.name
        })
    }, []);

    return (
        <FormProvider {...methods}>
            <Toast ref={successRef}/>
            <div className={'w-full flex flex-row justify-between gap-5 items-center'}>
                <ControlledTextInput
                    placeholder={"Введите название категории"}
                    name={'name'} color={"#EEF5F9"}
                    labelText={"Название"}
                />
            </div>
            <Button
                buttonText={methods.formState.isSubmitting ? 'Отправка..' : "Редактировать категорию"}
                disabled={methods.formState.isSubmitting}
                onClick={methods.handleSubmit(onSubmit)}
            />
        </FormProvider>
    )
}

const EditCategoryPopup = (props) => {
    return (
        <Popup
            cardWidth={500}
            cardJustify={"start"}
            onClick={props.onClose}
            fullscreen
        >
            <PopupHeader
                header={"Редактирование категории"}
                onClick={props.onClose}
            />
            <EditCategoryForm {...props}/>
        </Popup>
    )
};

export default EditCategoryPopup;