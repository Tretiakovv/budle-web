import style from "./AddPositionPopup.module.css"
import Popup from "../../../../../../ui/wrappers/popup/Popup";
import PopupHeader from "../../../../../../ui/atoms/rows/popup-header/PopupHeader";
import SwitchButton from "../../../../../../ui/moleculas/switch-button/SwitchButton";
import TextInput from "../../../../../../ui/atoms/inputs/text-input/TextInput";
import DropdownInput from "../../../../../../ui/atoms/inputs/dropdown-input/DropdownInput";
import FileInput from "../../../../../../ui/atoms/inputs/file-input/FileInput";
import TextArea from "../../../../../../ui/atoms/inputs/text-area/TextArea";
import Button from "../../../../../../ui/atoms/buttons/button/Button";
import Switch from "../../../../../../ui/atoms/buttons/switch/Switch";
import {useState} from "react";
import menuData from "../../../../../../data/entity/MenuData";
import {useBranchMenuStore} from "../../store/BranchMenuStore";
import {useMutation} from "react-query";
import {queryClient} from "../../../../../../index";

const AddPositionPopup = (props) => {

    const addProduct = useBranchMenuStore((state) => (
        (product) => state.addProduct(product)
    ))

    const addProductQuery = useMutation("addProduct", (product) => addProduct(product), {
        onSuccess: () => queryClient.invalidateQueries(["establishments"])
    })

    const [text, setText] = useState("")

    const [subgroupNames, setSubgroupNames] = useState([])
    const [selectedOption, selectOption] = useState({name: "", id: 0})

    const switchOptions = [
        {id: 0, message: "Блюдо"},
        {id: 1, message: "Категория"}
    ]

    const [isActiveSwitch, setActiveSwitch] = useState(false)
    const [activeOption, setActiveOption] = useState(switchOptions[0])

    const [positionData, setPositionData] = useState(
        {
            categoryId: 3,
            establishmentId: 1,
            onSale: false,
            description: "",
            name: "",
            price: "",
            weightG: ""
        }
    )

    const addPositionToMenu = (newPosition) => {
        menuData.map(group => {
            return group.subgroups.map(subgroup => {
                if (subgroup.subgroupName === newPosition.category) {
                    const newPositions = [...subgroup.positions, newPosition]
                    return {...subgroup, newPositions}
                }
            })
        })
    }

    return (
        <Popup
            cardWidth={980}
            cardJustify={"start"}
            onClick={props.onClose}
        >
            <PopupHeader
                header={"Добавить элемент"}
                onClick={props.onClose}
            />

            <SwitchButton
                options={switchOptions}
                activeOption={activeOption}
                onSelect={(option) => setActiveOption(option)}
            />

            {
                activeOption.id === 0 ?
                    <div className={"flex flex-col gap-5"}>
                        <div className={style.dataRow}>
                            <TextInput
                                labelText={"Название"}
                                onChange={(text) => setPositionData({
                                    ...positionData,
                                    name: text
                                })}
                                placeholder={"Введите название блюда"}
                                color={"#EEF5F9"}
                            />
                            <TextInput
                                labelText={"Цена, ₽"}
                                onChange={(text) => setPositionData({
                                    ...positionData,
                                    price: text
                                })}
                                placeholder={"Введите цену блюда"}
                                color={"#EEF5F9"}
                            />
                        </div>
                        <div className={style.dataRow}>
                            <TextInput
                                labelText={"Граммовка"}
                                onChange={(text) => setPositionData({
                                    ...positionData,
                                    weightG: text
                                })}
                                placeholder={"Введите граммовку блюда"}
                                color={"#EEF5F9"}
                            />
                            <DropdownInput
                                backgroundColor={"#EEF5F9"}
                                labelText={"Категория"}
                                placeholder={"Выберите категорию блюда"}
                                selectedOption={selectedOption}
                                selectOption={(option) => {
                                    selectOption(option)
                                }}
                                options={subgroupNames}
                            />
                        </div>
                        <FileInput/>
                        <TextArea
                            placeholder={"Придумайте интересное описание блюда." +
                                " Идеальное количество символов — 100."}
                            text={text}
                            setText={(event) => {
                                setText(event)
                                setPositionData({
                                    ...positionData,
                                    description: text
                                })
                            }}
                        />
                        <Switch
                            labelText={"Продаётся"}
                            isActive={isActiveSwitch}
                            onClick={() => {
                                setActiveSwitch(!isActiveSwitch)
                                setPositionData({
                                    ...positionData,
                                    onSale: !isActiveSwitch
                                })
                            }}
                        />
                    </div> :

                    <div>
                        <div className={style.dataRow}>
                            <TextInput
                                labelText={"Название"}
                                onChange={(text) => setPositionData({
                                    ...positionData,
                                    name: text
                                })}
                                placeholder={"Введите название категории"}
                                color={"#EEF5F9"}
                            />
                            <DropdownInput
                                backgroundColor={"#EEF5F9"}
                                labelText={"Родительская категория"}
                                placeholder={"Выберите родительскую категорию"}
                                selectedOption={selectedOption}
                                selectOption={(option) => {
                                    setPositionData({
                                        ...positionData,
                                        category: option.name
                                    })
                                    selectOption(option)
                                }}
                                options={subgroupNames}
                            />
                        </div>
                    </div>
            }

            <div className={style.buttonRow}>
                <Button
                    buttonText={"Добавить элемент"}
                    onClick={() => {
                        console.log(positionData)
                        addProductQuery.mutate(positionData)}
                    }
                />
            </div>

        </Popup>
    )
}

export default AddPositionPopup