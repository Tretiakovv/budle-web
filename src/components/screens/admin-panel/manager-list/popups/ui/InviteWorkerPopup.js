import React, {useRef} from 'react';
import {useUnit} from "effector-react";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import Toast from "../../../../../../ui/moleculas/toast/Toast";
import ControlledTextInput from "../../../../../../ui/atoms/inputs/text-input/ControlledTextInput";
import ControlledSelectInput from "../../../../../../ui/atoms/inputs/select-input/ControlledSelectInput";
import Button from "../../../../../../ui/atoms/buttons/button/Button";
import {InviteWorkerSchema} from "../../../../../../schemas/workers/CreateWorkerSchema";
import {$managerScreenOptions, inviteWorkerByTokenFx} from "../../../../../../models/workers/model";

const InviteWorkerPopup = (props) => {

    const successRef = useRef(null)
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
        const request = {...data, establishmentId: data.establishmentId.value}
        inviteWorker(request)
            .then(_ => {
                props.onClose()
                showSuccess()
            })
            .catch(showFailure)
    }

    return (
        <FormProvider {...methods}>
            <Toast ref={successRef}/>
            <div className={'w-full flex flex-row justify-between gap-5 items-center'}>
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
            <Button
                onClick={methods.handleSubmit(onSubmit)}
                buttonText={"Добавить элемент"}
            />
        </FormProvider>
    )
};

export default InviteWorkerPopup;