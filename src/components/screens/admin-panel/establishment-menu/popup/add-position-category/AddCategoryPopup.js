import React, {useEffect, useRef} from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import ControlledTextInput from "../../../../../../ui/atoms/inputs/text-input/ControlledTextInput";
import Button from "../../../../../../ui/atoms/buttons/button/Button";
import ControlledSelectInput from "../../../../../../ui/atoms/inputs/select-input/ControlledSelectInput";
import {useUnit} from "effector-react";
import Toast from "../../../../../../ui/moleculas/toast/Toast";
import {$activeEstablishmentOption, $selectedMenuItems, createCategoryFx} from "../../../../../../models/menu/model";
import {CreateCategorySchema} from "../../../../../../schemas/menu/CreateCategorySchema";

const AddCategoryPopup = (props) => {

    const successRef = useRef(null)
    const selectableCategories = useUnit($selectedMenuItems)
    const [establishment, createCategory] = useUnit([$activeEstablishmentOption, createCategoryFx])

    const methods = useForm({
        resolver: zodResolver(CreateCategorySchema),
        mode: 'onSubmit'
    })

    const showSuccess = () => {
        successRef.current.show({
            severity: 'success',
            summary: 'Категория успешно добавлена!',
            detail: 'Вы можете вернуться назад',
        });
    };

    const showFailure = (message) => {
        successRef.current.show({
            severity: 'error',
            summary: 'Возникли ошибки при создании категории.',
            detail: message,
        });
    };

    const onSubmit = (data) => {
        createCategory(data)
            .then(_ => {
                props.onClose()
                showSuccess()
            })
            .catch(showFailure)
    }

    useEffect(() => {
        methods.reset({
            parentCategoryId: null,
            establishmentId: String(establishment?.id)
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
                <ControlledSelectInput
                    isClearable={true}
                    backgroundColor={"#EEF5F9"}
                    placeholder={"Выберите родительскую категорию"}
                    label={"Родительская категория"}
                    inputName={'parentCategoryId'}
                    options={selectableCategories}
                />
            </div>
            <Button
                onClick={methods.handleSubmit(onSubmit)}
                buttonText={"Добавить элемент"}
            />
        </FormProvider>
    )

};

export default AddCategoryPopup;