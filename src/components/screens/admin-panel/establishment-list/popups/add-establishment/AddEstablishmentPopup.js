import style from "./AddEstablishemnt.module.css"
import Popup from "../../../../../../ui/wrappers/popup/Popup";
import {FiX} from "react-icons/fi";
import TextInput from "../../../../../../ui/atoms/inputs/text-input/TextInput";
import DropdownInput from "../../../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import establishmentTagList from "../../../../../../data/entity/EstablishmentTagListData";
import FileInput from "../../../../../../ui/atoms/inputs/file-input/FileInput";
import TextArea from "../../../../../../ui/atoms/inputs/text-area/TextArea";

import {useForm} from "react-hook-form";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod";

const tagSchema = z.object({
    name : z.string()
})

const establishmentSchema = z.object({
    name : z.string(),
    category : z.string(),
    cuisineCountry : z.string(),
    tags : z.array(tagSchema),
    image : z.string(),
    description : z.string(),
    address : z.string(),
    subway : z.string(),
    timezone : z.string(),
})

const AddEstablishmentPopup = (props) => {

    const selectedOption = {id: 0, name: ""}

    const {
        register, handleSubmit,
        formState : {errors, isSubmitting},
    } = useForm({
        resolver : zodResolver(establishmentSchema)
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Popup
            onClick={props.onClick}
            cardWidth={980}
        >
            <div className={style.dataRow}>
                <h2 className={style.header}>Добавить заведение</h2>
                <FiX
                    size={"20px"}
                    className={style.xIcon}
                    onClick={props.onClick}
                />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.dataRow}>
                    <TextInput
                        {...register("name")}
                        labelText={"Название"}
                        placeholder={"Введите название заведения"}
                        color={"#EEF5F9"}
                    />
                    <DropdownInput
                        {...register("category")}
                        backgroundColor={"#EEF5F9"}
                        labelText={"Категория"}
                        placeholder={"Выберите категорию заведения"}
                        selectedOption={selectedOption}
                        options={establishmentTagList}
                    />
                </div>
                <div className={style.dataRow}>
                    <DropdownInput
                        {...register("cuisineCountry")}
                        backgroundColor={"#EEF5F9"}
                        labelText={"Вид кухни"}
                        placeholder={"Выберите вид кухни заведения"}
                        selectedOption={selectedOption}
                        options={establishmentTagList}
                    />
                    <DropdownInput
                        {...register("tags")}
                        backgroundColor={"#EEF5F9"}
                        labelText={"Теги"}
                        placeholder={"Выберите теги заведения"}
                        selectedOption={selectedOption}
                        options={establishmentTagList}
                    />
                </div>
                <FileInput
                    {...register("image")}
                    labelText={"Фотография"}
                    placeholder={"Выберите фотографию с диска или перетащите её в данное поле"}
                />
                <TextArea
                    {...register("description")}
                    placeholder={"" +
                        "Придумайте завлекающее описание заведения.\n" +
                        "Идеальная длина описания — 500 символов."}
                />
                <TextInput
                    {...register("address")}
                    labelText={"Адрес заведения"}
                    placeholder={"Введите адрес заведения"}
                    color={"#EEF5F9"}
                />
                <div className={style.dataRow}>
                    <DropdownInput
                        {...register("subway")}
                        backgroundColor={"#EEF5F9"}
                        labelText={"Метро"}
                        placeholder={"Выберите ближайшее метро"}
                        selectedOption={selectedOption}
                        options={establishmentTagList}
                    />
                    <DropdownInput
                        {...register("timezone")}
                        backgroundColor={"#EEF5F9"}
                        labelText={"Часовой пояс"}
                        placeholder={"Выберите часовой пояс"}
                        selectedOption={selectedOption}
                        options={establishmentTagList}
                    />
                </div>
            </form>

        </Popup>
    )
}

export default AddEstablishmentPopup