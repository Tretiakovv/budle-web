import React, {useEffect, useRef} from 'react';
import {useUnit} from "effector-react";
import {
    $checkboxOptions,
    $managerScreenOptions,
    $workersOptions,
    addExistingWorkerFx, getAllWorkersFx, getOptionsFx
} from "../../../../../../models/workers/model";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {AddRealWorkerSchema} from "../../../../../../schemas/workers/CreateWorkerSchema";
import Toast from "../../../../../../ui/moleculas/toast/Toast";
import ControlledSelectInput from "../../../../../../ui/atoms/inputs/select-input/ControlledSelectInput";
import Button from "../../../../../../ui/atoms/buttons/button/Button";
import ControlledCheckboxGroup from "../../../../../../ui/atoms/checkbox/ControlledCheckboxGroup";
import {createAccessEnum} from "../../../../../../utils/getAccessEnum";

const AddRealWorkerPopup = (props) => {

    const successRef = useRef(null)
    const [establishmentOptions, getAllWorkers] = useUnit([$managerScreenOptions, getAllWorkersFx])
    const [checkboxOptions, getOptions] = useUnit([$checkboxOptions, getOptionsFx])
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
        const checkedOptions = checkboxOptions.map((item, index) => ({
            option: createAccessEnum(item.optionName),
            isEnabled: data.options[index]
        }))
        const request = {
            options: checkedOptions,
            workerId: data.workerId.value,
            establishmentId: data.establishmentId.value
        }
        addWorker(request)
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
        getAllWorkers()
        getOptions()
    }, []);

    return (
        <FormProvider {...methods}>
            <Toast ref={successRef}/>
            <div className={'w-full flex flex-row justify-between gap-5 items-center border-y-2 border-gray-100 py-5'}>
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
            <ControlledCheckboxGroup
                options={checkboxOptions}
                name={'options'}
            />
            <Button
                onClick={methods.handleSubmit(onSubmit)}
                buttonText={"Добавить сотрудника"}
            />
        </FormProvider>
    )

};

export default AddRealWorkerPopup;