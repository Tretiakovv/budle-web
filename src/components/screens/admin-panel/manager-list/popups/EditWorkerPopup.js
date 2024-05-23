import Popup from "../../../../../ui/wrappers/popup/Popup";
import PopupHeader from "../../../../../ui/atoms/rows/popup-header/PopupHeader";
import ControlledCheckboxGroup from "../../../../../ui/atoms/checkbox/ControlledCheckboxGroup";
import React, {useEffect, useRef} from "react";
import {useUnit} from "effector-react";
import {
    $checkboxOptions,
    $selectedWorkerOptions,
    $workerToEdit,
    editWorkerFx,
    getAllWorkersFx,
    getOptionsFx,
    getWorkerOptionsFx
} from "../../../../../models/workers/model";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {AddRealWorkerSchema, EditWorkerSchema} from "../../../../../schemas/workers/CreateWorkerSchema";
import {createAccessEnum} from "../../../../../utils/getAccessEnum";
import Toast from "../../../../../ui/moleculas/toast/Toast";
import {$activeEstablishmentOption} from "../../../../../models/menu/model";
import Button from "../../../../../ui/atoms/buttons/button/Button";

const EditWorkerPopup = (props) => {

    const successRef = useRef(null)

    const [selectedWorkerOptions, getWorkerOptions] = useUnit([$selectedWorkerOptions, getWorkerOptionsFx])
    const [establishment, editWorker] = useUnit([$activeEstablishmentOption, editWorkerFx])
    const [workerToEdit, getAllWorkers] = useUnit([$workerToEdit, getAllWorkersFx])
    const [checkboxOptions, getOptions] = useUnit([$checkboxOptions, getOptionsFx])

    const methods = useForm({
        resolver: zodResolver(EditWorkerSchema),
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
        const checkedOptions = selectedWorkerOptions.map((item, index) => ({
            option: createAccessEnum(item.optionName),
            isEnabled: data.options[index]
        }))
        const request = {
            options: checkedOptions,
            workerId: data.workerId,
            establishmentId: data.establishmentId
        }
        editWorker(request)
            .then(_ => {
                props.onClose()
                showSuccess()
            })
            .catch(showFailure)
    }

    useEffect(() => {
        methods.reset({
            establishmentId : String(establishment.id),
            workerId : String(workerToEdit.id),
            options: selectedWorkerOptions.map(i => i.isAvailable)
        })
    }, [selectedWorkerOptions]);

    useEffect(() => {
        getWorkerOptions({establishmentId : establishment.id, workerId : workerToEdit.id})
        getAllWorkers()
    }, []);

    return (
        <Popup
            cardWidth={980}
            cardJustify={"start"}
            onClick={props.onClose}
            fullscreen
        >
            <FormProvider {...methods}>
                <Toast ref={successRef}/>
                <PopupHeader
                    header={"Редактирование сотрудника"}
                    onClick={props.onClose}
                    rightContent={
                        <div className={'flex flex-row items-baseline gap-2 text-gray-400'}>
                            <div>{workerToEdit.middleName} {workerToEdit.firstName}</div>
                            —
                            <div>{establishment.name}</div>
                        </div>
                    }
                />
                <ControlledCheckboxGroup
                    options={selectedWorkerOptions}
                    name={'options'}
                />
                <Button
                    onClick={methods.handleSubmit(onSubmit)}
                    buttonText={"Редактировать сотрудника"}
                />
            </FormProvider>
        </Popup>
    )
}

export default EditWorkerPopup