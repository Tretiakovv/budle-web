import React, {useEffect, useRef} from 'react';
import Popup from "../../../../../../../ui/wrappers/popup/Popup";
import PopupHeader from "../../../../../../../ui/atoms/rows/popup-header/PopupHeader";
import {useUnit} from "effector-react";
import {$activeEstablishmentOption, $selectedMenuCategories} from "../../../../../../../models/menu/model";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {CreateProductSchema, EditProductSchema} from "../../../../../../../schemas/menu/CreateProductSchema";
import Toast from "../../../../../../../ui/moleculas/toast/Toast";
import ControlledTextInput from "../../../../../../../ui/atoms/inputs/text-input/ControlledTextInput";
import ControlledSelectInput from "../../../../../../../ui/atoms/inputs/select-input/ControlledSelectInput";
import TextArea from "../../../../../../../ui/atoms/inputs/text-area/TextArea";
import ControlledSwitch from "../../../../../../../ui/atoms/buttons/switch/ControlledSwitch";
import Button from "../../../../../../../ui/atoms/buttons/button/Button";
import {$productToEdit, editProductFx} from "../../../../../../../models/menu/edit_delete_menu/model";

const textarea = 'Придумайте интересное описание блюда. Идеальное количество символов — 100.'

const EditProductForm = (props) => {

    const successRef = useRef(null)

    const [selectableItems, establishment] = useUnit([$selectedMenuCategories, $activeEstablishmentOption])
    const [productToEdit, editProduct] = useUnit([$productToEdit, editProductFx])

    const methods = useForm({
        resolver: zodResolver(EditProductSchema),
        mode: "onSubmit"
    })

    const showSuccess = () => {
        successRef.current.show({
            severity: 'success',
            summary: 'Позиция успешно отредактирована!',
        });
    };

    const showFailure = (message) => {
        successRef.current.show({
            severity: 'error',
            summary: 'Возникли ошибки при редактировании позиции.',
            detail: message,
        });
    };

    const onSubmit = (data) => {
        editProduct(data)
            .then(_ => {
                props.onClose()
                showSuccess()
            })
            .catch(showFailure)
    }

    useEffect(() => {
        methods.reset({
            ...productToEdit,
            productId: String(productToEdit.id),
            isOnSale : productToEdit.isOnSale ?? false
        })
    }, []);

    return (
        <FormProvider {...methods}>
            <Toast ref={successRef}/>
            <div className={"flex flex-col gap-5"}>
                <div className={'w-full flex flex-row justify-between gap-5 items-center'}>
                    <ControlledTextInput
                        placeholder={"Введите название блюда"}
                        name={'name'} color={"#EEF5F9"}
                        labelText={"Название"}
                    />
                </div>
                <div className={'w-full flex flex-row justify-between gap-5 items-center'}>
                    <ControlledTextInput
                        placeholder={"Введите цену блюда"}
                        name={'price'} color={"#EEF5F9"}
                        labelText={"Цена, ₽"}
                    />
                    <ControlledTextInput
                        placeholder={"Введите граммовку блюда"}
                        name={'weightG'} color={"#EEF5F9"}
                        labelText={"Граммовка"}
                    />
                </div>
                <TextArea
                    register={methods.register("description")}
                    errorMessage={methods.formState.errors.description?.message}
                    placeholder={textarea}
                />
                <ControlledSwitch
                    labelText={"Продаётся"}
                    name={'isOnSale'}
                />
                <Button
                    buttonText={methods.formState.isSubmitting ? 'Отправка..' : "Редактировать элемент"}
                    disabled={methods.formState.isSubmitting}
                    onClick={methods.handleSubmit(onSubmit)}
                />
            </div>
        </FormProvider>
    )
}

const EditProductPopup = (props) => {
    return (
        <Popup
            cardWidth={980}
            cardJustify={"start"}
            onClick={props.onClose}
        >
            <PopupHeader
                header={"Редактирование продукта"}
                onClick={props.onClose}
            />
            <EditProductForm {...props}/>
        </Popup>
    )
};

export default EditProductPopup;