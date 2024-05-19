import {useFieldArray, useFormContext} from "react-hook-form";
import {useEffect} from "react";
import TextButton from "../../../../../ui/atoms/buttons/text-button/TextButton";
import ControlledTextInput from "../../../../../ui/atoms/inputs/text-input/ControlledTextInput";
import {Colors} from "../../../../../theme/Colors";
import ControlledSelectInput from "../../../../../ui/atoms/inputs/select-input/ControlledSelectInput";
import SquareButton from "../../../../../ui/atoms/buttons/square-button/SquareButton";
import FormRow from "./FormRow";

const selectOptions = [
    {label: 'Пн', value: 'Пн'},
    {label: 'Вт', value: 'Вт'},
    {label: 'Ср', value: 'Ср'},
    {label: 'Чт', value: 'Чт'},
    {label: 'Пт', value: 'Пт'},
    {label: 'Сб', value: 'Сб'},
    {label: 'Вс', value: 'Вс'},
]

const DayInputRow = () => {

    const {formState: {errors}, ...methods} = useFormContext()
    const {fields, append, remove} = useFieldArray({
        control: methods.control,
        name: "workingHours",
    })

    useEffect(() => {
        methods.reset({
            workingHours: [
                {
                    startTime: '',
                    endTime: '',
                    days: ''
                }
            ]
        })
    }, []);

    console.log(methods.watch())

    return (
        <FormRow>
            <section className={'w-full flex flex-col gap-5'}>
                <div className={'flex flex-row items-center justify-between'}>
                    <h4 className={'font-medium text-medium'}>Дни работы</h4>
                    <TextButton onClick={append}>Добавить ещё</TextButton>
                </div>
                {fields.map((field, index) => (
                    <div className={'w-full grid grid-cols-5 gap-5 items-end'}>
                        <ControlledTextInput
                            className={'col-span-1'}
                            errorMessage={errors.workingHours?.[index]?.startTime?.message}
                            color={Colors["background-light-blue"]}
                            name={`workingHours.${index}.startTime`}
                            placeholder={"c 08:00"}
                            mask={'с 99:99'}
                        />
                        <ControlledTextInput
                            className={'col-span-1'}
                            errorMessage={errors.workingHours?.[index]?.endTime?.message}
                            color={Colors["background-light-blue"]}
                            name={`workingHours.${index}.endTime`}
                            placeholder={"до 22:00"}
                            mask={'до 99:99'}
                        />
                        <div className={'col-span-3 flex flex-row gap-5 items-center'}>
                            <ControlledSelectInput
                                isMulti
                                inputName={`workingHours.${index}.days`} options={selectOptions}
                                validatorMessage={errors.workingHours?.[index]?.days?.message}
                            />
                            <SquareButton onClick={() => remove(index)}/>
                        </div>
                    </div>
                ))}
            </section>
        </FormRow>
    )

}

export default DayInputRow