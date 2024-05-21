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
import {useNavigate, useSearchParams} from "react-router-dom";
import {useUnit} from "effector-react";
import {
    $categories,
    $tags,
    createEstablishmentFx,
    getCategoriesFx,
    getTagsEvent
} from "../../../../models/new-establishment/model";
import Toast from "../../../../ui/moleculas/toast/Toast";
import {$establishmentInfo, editEstablishmentFx, getEstablishmentFx} from "../../../../models/edit-establishment/model";
import FormRow from "../new-establishment/ui/FormRow";
import PhotosList from "../new-establishment/ui/PhotosList";
import DayInputRow from "../new-establishment/ui/DayInputRow";
import PopupHeaderRow from "../new-establishment/ui/PopupHeaderRow";

function groupByTime(schedule) {
    const grouped = {};

    schedule.forEach(entry => {
        const key = `${entry.startTime}-${entry.endTime}`;
        if (!grouped[key]) {
            grouped[key] = {
                startTime: entry.startTime.slice(0,5),
                endTime: entry.endTime.slice(0,5),
                days: []
            };
        }
        grouped[key].days.push({label: entry.dayOfWeek, value: entry.dayOfWeek});
    });

    return Object.values(grouped);
}

const EditEstablishmentForm = () => {

    const [searchParams, _] = useSearchParams()
    const id = searchParams.get('establishmentId')

    const [establishmentToEdit, getEstablishment] = useUnit([$establishmentInfo, getEstablishmentFx])
    const [categories, getCategories] = useUnit([$categories, getCategoriesFx])
    const [tags, getTags] = useUnit([$tags, getTagsEvent])
    const editEstablishment = useUnit(editEstablishmentFx)

    const successToast = useRef(null);
    const warningToast = useRef(null);

    const showSuccess = () => {
        successToast.current.show({
            severity: 'success',
            summary: 'Заведение отредактировано успешно!',
            detail: 'Вы можете вернуться назад',
        });
    };

    const showWarning = (message) => {
        if (typeof message === 'string') {
            successToast.current.show({
                severity: 'error',
                summary: 'Произошла ошибка при редактировании заведения',
                detail: message,
            });
        }
    };

    const context = useAddEstablishmentPopup()
    const {methods: {formState: {errors}}} = context

    const onSubmit = (data) => {
        const body = {
            ...data,
            cuisineCountry: data.cuisine_country.value,
            image: data.photosInput[0],
            photosInput: data.photosInput.slice(1).map(image => ({image: image})),
            subway: data.subway.value,
            tags: data.tags.map(tag => ({name: tag.value})),
            category: data.category.value,
            workingHours: data.workingHours.map(w => ({
                startTime: w.startTime.includes('с') ? w.startTime.slice(2) : w.startTime,
                endTime: w.endTime.includes('д') ? w.endTime.slice(3) : w.endTime,
                days: w.days.map(d => d.value)
            }))
        }
        delete body['cuisine_country']
        delete body['map']
        delete body['photos']
        const request = {establishmentId: establishmentToEdit.id, request: body}
        editEstablishment(request)
            .then(showSuccess)
            .catch(message => showWarning(message))
    }

    useEffect(() => {
        if (establishmentToEdit) {
            context.methods.reset({
                ...establishmentToEdit,
                rating : 5.0,
                workingHours : groupByTime(establishmentToEdit.workingHours),
                photosInput: [establishmentToEdit?.image, ...establishmentToEdit?.photos.map(p => p.image)],
                cuisine_country: {label: establishmentToEdit?.cuisineCountry, value: establishmentToEdit?.cuisineCountry},
                category: categories?.find(cat => cat.value === establishmentToEdit.category),
                tags: tags?.filter(tag => establishmentToEdit.tags.map(t => t.name).includes(tag.value))
            })
        }
    }, [establishmentToEdit, categories, tags]);

    useEffect(() => {
        getEstablishment(id)
        getCategories()
        getTags()
    }, []);

    if (establishmentToEdit) return (
        <FormProvider {...context.methods}>
            <Toast ref={warningToast}/>
            <Toast ref={successToast}/>
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

const EditEstablishmentScreen = () => {

    const navigate = useNavigate()

    return (
        <AdminPanelWrapper className={'py-5'}>
            <PopupHeaderRow
                name={"Редактирование заведения"}
                onClick={() => navigate(-1)}
            />
            <EditEstablishmentForm/>
        </AdminPanelWrapper>
    )

}

export default EditEstablishmentScreen