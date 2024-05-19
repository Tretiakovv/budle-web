import {FormProvider} from "react-hook-form";
import {useEffect, useRef} from "react";
import ControlledTextInput from "../../../../ui/atoms/inputs/text-input/ControlledTextInput";
import ControlledSelectInput from "../../../../ui/atoms/inputs/select-input/ControlledSelectInput";
import {Colors} from "../../../../theme/Colors";
import {useAddEstablishmentPopup} from "../establishment-list/popups/add-establishment/AddEstablishmentPopup.hooks";
import TextArea from "../../../../ui/atoms/inputs/text-area/TextArea";
import AdminPanelWrapper from "../../../../ui/wrappers/AdminPanelWrapper";
import selectData from '../../../../data/entity/CreateEstablishmentData'
import Button from "../../../../ui/atoms/buttons/button/Button";
import {useNavigate} from "react-router-dom";
import PopupHeaderRow from "./ui/PopupHeaderRow";
import FormRow from "./ui/FormRow";
import PhotosList from "./ui/PhotosList";
import DayInputRow from "./ui/DayInputRow";
import {useUnit} from "effector-react";
import {
    $categories,
    $tags,
    createEstablishmentFx,
    getCategoriesFx,
    getTagsEvent
} from "../../../../models/new-establishment/model";
import Toast from "../../../../ui/moleculas/toast/Toast";

const NewEstablishmentForm = () => {

    const [categories, getCategories] = useUnit([$categories, getCategoriesFx])
    const createEstablishment = useUnit(createEstablishmentFx)

    const successToast = useRef(null);
    const warningToast = useRef(null);

    const showSuccess = () => {
        successToast.current.show({
            severity: 'success',
            summary: 'Заведение создалось успешно!',
            detail: 'Вы можете вернуться назад',
        });
    };

    const showWarning = (message) => {
        if (typeof message === 'string') {
            successToast.current.show({
                severity: 'error',
                summary: 'Произошла ошибка при создании заведения',
                detail: message,
            });
        }
    };

    const [tags, getTags] = useUnit([$tags, getTagsEvent])

    const context = useAddEstablishmentPopup()
    const {methods: {formState: {errors}}} = context

    const onSubmit = (data) => {
        const request = {
            ...data,
            cuisineCountry: data.cuisine_country.value,
            image: data.photosInput[0],
            photosInput: data.photosInput.slice(1).map(image => ({image: image})),
            subway: data.subway.value,
            tags: data.tags.map(tag => ({name: tag.value})),
            category: data.category.value,
            workingHours: data.workingHours.map(w => ({
                startTime: w.startTime.slice(2),
                endTime: w.endTime.slice(3),
                days: w.days.map(d => d.value)
            }))
        }
        delete request['cuisine_country']
        createEstablishment(request)
            .then(showSuccess)
            .catch(message => showWarning(message))
    }

    useEffect(() => {
        getCategories()
        getTags()
        context.methods.reset({
            rating: 5.0
        })
    }, []);

    if (categories) return (
        <FormProvider {...context.methods}>
            <Toast ref={warningToast} />
            <Toast ref={successToast} />
            <form
                className={"w-full flex flex-col gap-[20px]"}
                onSubmit={context.methods.handleSubmit(onSubmit)}
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
                        options={categories}
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
                        options={tags}
                    />
                </FormRow>
                <PhotosList/>
                <FormRow>
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
                </FormRow>
                <DayInputRow/>
                <FormRow>
                    <ControlledSelectInput
                        control={context.methods.control}
                        label={"Метро"}
                        inputName={"subway"}
                        required={false}
                        options={context.createOptionsArray(selectData.subway)}
                        validatorMessage={context.getMessage("subway")}
                    />
                </FormRow>
                <FormRow>
                    <ControlledTextInput
                        name={'address'}
                        errorMessage={errors.address?.message}
                        placeholder={"Введите адрес заведения"}
                        color={Colors["background-light-blue"]}
                        labelText={"Адрес заведения"}
                    />
                </FormRow>
                <Button
                    buttonType={"submit"}
                    buttonText={"Добавить заведение"}
                    className={"w-[400px]"}
                />
            </form>
        </FormProvider>
    )
}

const NewEstablishmentScreen = () => {

    const navigate = useNavigate()

    return (
        <AdminPanelWrapper className={'py-5'}>
            <PopupHeaderRow onClick={() => navigate(-1)}/>
            <NewEstablishmentForm/>
        </AdminPanelWrapper>
    )
}

export default NewEstablishmentScreen