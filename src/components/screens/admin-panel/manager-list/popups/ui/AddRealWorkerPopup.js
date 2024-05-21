import React, {useRef} from 'react';
import {useUnit} from "effector-react";
import {$managerScreenOptions, $workersOptions, addExistingWorkerFx} from "../../../../../../models/workers/model";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {AddRealWorkerSchema} from "../../../../../../schemas/workers/CreateWorkerSchema";
import Toast from "../../../../../../ui/moleculas/toast/Toast";
import ControlledSelectInput from "../../../../../../ui/atoms/inputs/select-input/ControlledSelectInput";
import Button from "../../../../../../ui/atoms/buttons/button/Button";

const AddRealWorkerPopup = (props) => {

    const successRef = useRef(null)
    const establishmentOptions = useUnit($managerScreenOptions)
    const [workerOptions, addWorker] = useUnit([$workersOptions, addExistingWorkerFx])

    const methods = useForm({
        resolver: zodResolver(AddRealWorkerSchema),
        mode: 'onSubmit'
    })

    const showSuccess = () => {
        successRef.current.show({
            severity: 'success',
            summary: 'Сотрудник успешно добавлен!',
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
        const request = {
            establishmentId: data.establishmentId.value,
            workerId: data.workerId.value
        }
        addWorker(request)
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
                <ControlledSelectInput
                    isClearable={true}
                    label={"Сотрудник"}
                    backgroundColor={"#EEF5F9"}
                    placeholder={"Выберите сотрудника"}
                    inputName={'workerId'}
                    options={workerOptions}
                />
                <ControlledSelectInput
                    isClearable={true}
                    label={"Заведение"}
                    backgroundColor={"#EEF5F9"}
                    placeholder={"Выберите заведение"}
                    inputName={'establishmentId'}
                    options={establishmentOptions}
                />
            </div>
            <Button
                onClick={methods.handleSubmit(onSubmit)}
                buttonText={"Добавить элемент"}
            />
        </FormProvider>
    )

};

export default AddRealWorkerPopup;