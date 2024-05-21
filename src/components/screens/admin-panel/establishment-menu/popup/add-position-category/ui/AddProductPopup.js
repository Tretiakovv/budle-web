import React, {useEffect, useRef} from 'react';
import {zodResolver} from "@hookform/resolvers/zod";
import {FormProvider, useForm} from "react-hook-form";
import ControlledTextInput from "../../../../../../../ui/atoms/inputs/text-input/ControlledTextInput";
import Button from "../../../../../../../ui/atoms/buttons/button/Button";
import {CreateProductSchema} from "../../../../../../../schemas/menu/CreateProductSchema";
import {useUnit} from "effector-react";
import Toast from "../../../../../../../ui/moleculas/toast/Toast";
import ControlledSelectInput from "../../../../../../../ui/atoms/inputs/select-input/ControlledSelectInput";
import TextArea from "../../../../../../../ui/atoms/inputs/text-area/TextArea";
import ControlledSwitch from "../../../../../../../ui/atoms/buttons/switch/ControlledSwitch";
import {
    $activeEstablishmentOption,
    $selectedMenuCategories,
    createProductFx
} from "../../../../../../../models/menu/model";

const textarea = 'Придумайте интересное описание блюда. Идеальное количество символов — 100.'

const AddProductPopup = (props) => {

    const successRef = useRef(null)

    const [selectableItems, establishment] = useUnit([$selectedMenuCategories, $activeEstablishmentOption])
    const createProduct = useUnit(createProductFx)

    const methods = useForm({
        resolver: zodResolver(CreateProductSchema),
        mode: "onSubmit"
    })

    const showSuccess = () => {
        successRef.current.show({
            severity: 'success',
            summary: 'Позиция успешно добавлена!',
            detail: 'Вы можете вернуться назад',
        });
    };

    const showFailure = (message) => {
        successRef.current.show({
            severity: 'error',
            summary: 'Возникли ошибки при создании позиции.',
            detail: message,
        });
    };

    const onSubmit = (data) => {
        createProduct(data)
            .then(_ => {
                props.onClose()
                showSuccess()
            })
            .catch(showFailure)
    }

    useEffect(() => {
        methods.reset({
            establishmentId: String(establishment?.id),
            isOnSale: false
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
                    <ControlledTextInput
                        placeholder={"Введите цену блюда"}
                        name={'price'} color={"#EEF5F9"}
                        labelText={"Цена, ₽"}
                    />
                </div>
                <div className={'w-full flex flex-row justify-between gap-5 items-center'}>
                    <ControlledTextInput
                        placeholder={"Введите граммовку блюда"}
                        name={'weightG'} color={"#EEF5F9"}
                        labelText={"Граммовка"}
                    />
                    <ControlledSelectInput
                        backgroundColor={"#EEF5F9"}
                        label={"Категория"}
                        placeholder={"Выберите категорию блюда"}
                        inputName={'categoryId'}
                        options={selectableItems}
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
                    onClick={methods.handleSubmit(onSubmit)}
                    buttonText={"Добавить элемент"}
                />
            </div>
        </FormProvider>
    );
};

export default AddProductPopup;