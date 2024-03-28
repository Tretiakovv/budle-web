import style from "./AddEstablishemnt.module.css"
import Popup from "../../../../../../ui/wrappers/popup/Popup";
import {FiX} from "react-icons/fi";
import TextInput from "../../../../../../ui/atoms/inputs/text-input/TextInput";
import TextArea from "../../../../../../ui/atoms/inputs/text-area/TextArea";
import {useAddEstablishmentPopup} from "./AddEstablishmentPopup.hooks";
import {Colors} from "../../../../../../theme/Colors";
import Button from "../../../../../../ui/atoms/buttons/button/Button";
import selectData from "../../../../../../data/entity/CreateEstablishmentData";
import ControlledSelectInput from "../../../../../../ui/atoms/inputs/select-input/ControlledSelectInput";
import ControlledFileInput from "../../../../../../ui/atoms/inputs/file-input/ControlledFileInput";

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

const PopupForm = (props) => {

    const {
        register, errors,
        control, ...context
    } = useAddEstablishmentPopup()

    return (
        <form
            className={"w-full flex flex-col gap-[20px]"}
            onSubmit={(e) => {
                context.handleSubmit(e)
                props.onClick()
            }}
        >
            <FormRow>
                <TextInput
                    register={register("name", {
                        required: context.getMessage("name")
                    })}
                    errorMessage={errors.name?.message}
                    labelText={"Название"}
                    placeholder={"Введите название заведения"}
                    color={Colors["background-light-blue"]}
                />
                <ControlledSelectInput
                    control={control}
                    label={"Категория"}
                    inputName={"category"}
                    errMessage={errors.category?.message}
                    options={context.createOptionsArray(selectData.category)}
                    validatorMessage={context.getMessage("category")}
                />
            </FormRow>
            <FormRow>
                <ControlledSelectInput
                    control={control}
                    label={"Вид кухни"}
                    inputName={"cuisine_country"}
                    errMessage={errors.cuisine_country?.message}
                    options={context.createOptionsArray(selectData.cuisineCountry)}
                    validatorMessage={context.getMessage("cuisine_country")}
                />
                <ControlledSelectInput
                    isMulti
                    control={control}
                    required={false}
                    label={"Теги заведения"}
                    inputName={"tags"}
                    options={context.createOptionsArray(selectData.tags)}
                />
            </FormRow>
            <ControlledFileInput
                control={control}
                inputName={"image"}
                error={errors.image?.message}
                validatorMessage={context.getMessage("image")}
                label={"Фотография"}
                placeholder={"Выберите фотографию с диска"}
            />
            <TextArea
                register={register("description", {
                    minLength : {
                        value : 50,
                        message : context.getMessage("description")
                    }
                })}
                errorMessage={errors.description?.message}
                placeholder={"" +
                    "Придумайте завлекающее описание заведения.\n" +
                    "Идеальная длина описания — 500 символов."}
            />
            <TextInput
                register={register("address", {
                    required: context.getMessage("address")
                })}
                errorMessage={errors.address?.message}
                labelText={"Адрес заведения"}
                placeholder={"Введите адрес заведения"}
                color={Colors["background-light-blue"]}
            />
            <FormRow>
                <ControlledSelectInput
                    control={control}
                    label={"Метро"}
                    inputName={"subway"}
                    required={false}
                    options={context.createOptionsArray(selectData.subway)}
                    validatorMessage={context.getMessage("subway")}
                />
                <ControlledSelectInput
                    control={control}
                    label={"Часовой пояс"}
                    inputName={"timezone"}
                    errMessage={errors.timezone?.message}
                    options={context.createOptionsArray(selectData.timezone)}
                    validatorMessage={context.getMessage("timezone")}
                />
            </FormRow>
            <Button
                buttonType={"submit"}
                buttonText={"Добавить заведение"}
                className={"w-[440px]"}
            />
        </form>
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