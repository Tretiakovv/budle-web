import React, {useEffect, useRef} from 'react';
import {useUnit} from "effector-react";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import Toast from "../../../../../../ui/moleculas/toast/Toast";
import ControlledTextInput from "../../../../../../ui/atoms/inputs/text-input/ControlledTextInput";
import ControlledSelectInput from "../../../../../../ui/atoms/inputs/select-input/ControlledSelectInput";
import Button from "../../../../../../ui/atoms/buttons/button/Button";
import {InviteWorkerSchema} from "../../../../../../schemas/workers/CreateWorkerSchema";
import {
    $checkboxOptions,
    $managerScreenOptions,
    getOptionsFx,
    inviteWorkerByTokenFx
} from "../../../../../../models/workers/model";
import ControlledCheckboxGroup from "../../../../../../ui/atoms/checkbox/ControlledCheckboxGroup";
import {createAccessEnum} from "../../../../../../utils/getAccessEnum";

const InviteWorkerPopup = (props) => {

    const successRef = useRef(null)
    const [checkboxOptions, getOptions] = useUnit([$checkboxOptions, getOptionsFx])
    const [options, inviteWorker] = useUnit([$managerScreenOptions, inviteWorkerByTokenFx])

    const methods = useForm({
        resolver: zodResolver(InviteWorkerSchema),
        mode: 'onSubmit'
    })

    const showSuccess = () => {
        successRef.current.show({
            severity: 'success',
            summary: 'Новый сотрудник успешно добавлен!',
        });
    };

    const showFailure = (message) => {
        successRef.current.show({
            severity: 'error',
            summary: 'Возникли ошибки при добавлении сотрудника.',
            detail: message,
        });
    };

    const onSubmit = (data) => {
        const checkedOptions = checkboxOptions.map((item, index) => ({
            option: createAccessEnum(item.optionName),
            isEnabled: data.options[index]
        }))
        const request = {
            ...data,
            options: checkedOptions,
            establishmentId: data.establishmentId.value
        }
        inviteWorker(request)
            .then(_ => {
                props.onClose()
                showSuccess()
            })
            .catch(showFailure)
    }

    useEffect(() => {
        methods.reset({options: checkboxOptions.map(i => i.isAvailable)})
    }, [checkboxOptions]);

    useEffect(() => {
        getOptions()
    }, []);

    if (options) return (
        <FormProvider {...methods}>
            <Toast ref={successRef}/>
            <div className={'w-full flex flex-row justify-between gap-5 items-center border-y-2 border-gray-100 py-5'}>
                <ControlledTextInput
                    placeholder={"Введите персональный токен сотрудника"}
                    name={'token'} color={"#EEF5F9"}
                    labelText={"Токен"}
                />
                <ControlledSelectInput
                    isClearable={true}
                    label={"Заведение"}
                    backgroundColor={"#EEF5F9"}
                    placeholder={"Выберите заведение"}
                    inputName={'establishmentId'}
                    options={options}
                />
            </div>
            <ControlledCheckboxGroup
                options={checkboxOptions}
                name={'options'}
            />
            <Button
                onClick={methods.handleSubmit(onSubmit)}
                buttonText={"Добавить элемент"}
            />
        </FormProvider>
    )
};

export default InviteWorkerPopup;