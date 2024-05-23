import style from "./AddEstablishemnt.module.css"
import Popup from "../../../../../../ui/wrappers/popup/Popup";
import {FiX} from "react-icons/fi";
import TextArea from "../../../../../../ui/atoms/inputs/text-area/TextArea";
import {useAddEstablishmentPopup} from "./AddEstablishmentPopup.hooks";
import {Colors} from "../../../../../../theme/Colors";
import Button from "../../../../../../ui/atoms/buttons/button/Button";
import selectData from "../../../../../../data/entity/CreateEstablishmentData";
import ControlledSelectInput from "../../../../../../ui/atoms/inputs/select-input/ControlledSelectInput";
import {FormProvider, useFieldArray, useFormContext} from "react-hook-form";
import ControlledTextInput from "../../../../../../ui/atoms/inputs/text-input/ControlledTextInput";
import FileInput from "../../../../../../ui/atoms/inputs/file-input/FileInput";
import ControlledPhotoCard from "../../../../../../ui/atoms/inputs/file-input/ControlledPhotoCard";
import {useUnit} from "effector-react/compat";
import {uploadImageFx} from "../../../../../../models/image/model";
import TextButton from "../../../../../../ui/atoms/buttons/text-button/TextButton";
import IconButton from "../../../../../../ui/atoms/buttons/icon-button/IconButton";
import SquareButton from "../../../../../../ui/atoms/buttons/square-button/SquareButton";
import {useEffect} from "react";

const FormRow = (props) => {
    return (
        <div className={style.dataRow}>
            {props.children}
        </div>
    )
}

const PopupHeaderRow = (props) => {
    return (
        <FormRow>
            <h2 className={style.header}>Добавить заведение</h2>
            <FiX
                size={"20px"}
                className={style.xIcon}
                onClick={props.onClick}
            />
        </FormRow>
    )
}

const PhotosList = () => {

    const uploadImage = useUnit(uploadImageFx)

    const methods = useFormContext()
    const {fields, append, remove} = useFieldArray({
        control: methods.control,
        name: 'photosInput'
    })

    const handleAppend = async (event) => {
        const file = event.target.files?.[0]
        const imageURL = await uploadImage(file)
        append(imageURL)
    }

    return (
        <section className={'w-full grid grid-cols-3 gap-5 pb-10'}>
            {fields.map((field, index) => (
                <ControlledPhotoCard
                    name={`photosInput.${index}`}
                    onDelete={() => remove(index)}
                    key={index}
                />
            ))}
            <FileInput
                placeholder={"Выберите фотографию"}
                label={"Фотография"}
                onChange={handleAppend}
            />
        </section>
    )

}

const DayInputRow = () => {

    const selectOptions = [
        {label: 'Пн', value: 'Пн'},
        {label: 'Вт', value: 'Вт'},
        {label: 'Ср', value: 'Ср'},
        {label: 'Чт', value: 'Чт'},
        {label: 'Пт', value: 'Пт'},
        {label: 'Сб', value: 'Сб'},
        {label: 'Вс', value: 'Вс'},
    ]

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

    console.log(methods.watch('workingHours'))

    return (
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
    )

}

const PopupForm = (props) => {

    const context = useAddEstablishmentPopup()
    const {methods: {formState: {errors}}} = context

    const onSubmit = (fieldValues) => {
        context.handleSubmit(fieldValues)
        props.onClick()
    }

    return (
        <FormProvider {...context.methods}>
            <form
                className={"w-full flex flex-col gap-[20px]"}
                onSubmit={onSubmit}
            >
                <FormRow>
                    <ControlledTextInput
                        name={'name'}
                        errorMessage={errors.name?.message}
                        labelText={"Название"}
                        placeholder={"Введите название заведения"}
                        color={Colors["background-light-blue"]}
                    />
                    <ControlledSelectInput
                        control={context.methods.control}
                        label={"Категория"}
                        inputName={"category"}
                        errMessage={errors.category?.message}
                        options={context.createOptionsArray(selectData.category)}
                        validatorMessage={context.getMessage("category")}
                    />
                </FormRow>
                <FormRow>
                    <ControlledSelectInput
                        control={context.methods.control}
                        label={"Вид кухни"}
                        inputName={"cuisine_country"}
                        errMessage={errors.cuisine_country?.message}
                        options={context.createOptionsArray(selectData.cuisineCountry)}
                        validatorMessage={context.getMessage("cuisine_country")}
                    />
                    <ControlledSelectInput
                        isMulti
                        control={context.methods.control}
                        required={false}
                        label={"Теги заведения"}
                        inputName={"tags"}
                        options={context.createOptionsArray(selectData.tags)}
                    />
                </FormRow>
                <PhotosList/>
                <TextArea
                    register={context.methods.register("description", {
                        minLength: {
                            value: 50,
                            message: context.getMessage("description")
                        }
                    })}
                    errorMessage={errors.description?.message}
                    placeholder={"" +
                        "Придумайте завлекающее описание заведения.\n" +
                        "Идеальная длина описания — 500 символов."}
                />
                <ControlledTextInput
                    name={'address'}
                    errorMessage={errors.address?.message}
                    placeholder={"Введите адрес заведения"}
                    color={Colors["background-light-blue"]}
                    labelText={"Адрес заведения"}
                />
                <DayInputRow/>
                <Button
                    buttonType={"submit"}
                    buttonText={"Добавить заведение"}
                    className={"w-[440px]"}
                />
            </form>
        </FormProvider>
    )
}

const AddEstablishmentPopup = (props) => {
    return (
        <Popup onClick={props.onClick} cardWidth={980}>
            <PopupHeaderRow {...props} />
            <PopupForm {...props} />
        </Popup>
    )
}

export default AddEstablishmentPopup