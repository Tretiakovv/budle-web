import style from "./PositionSubgroup.module.css"
import PositionRow from "../position-row/PositionRow";
import ChevronIcon from "../../atoms/icons/chevron-icon/ChevronIcon";
import {useRef, useState} from "react";
import {FiMoreHorizontal} from "react-icons/fi";
import {useUnit} from "effector-react";
import {$activeEstablishmentOption} from "../../../models/menu/model";
import {deleteCategoryFx, setCategoryToEditEvent} from "../../../models/menu/edit_delete_menu/model";
import Toast from "../toast/Toast";
import Tooltip from "../tooltip/Tooltip";

const PositionSubgroup = (props) => {

    const ref = useRef(null)

    const setCategoryToEdit = useUnit(setCategoryToEditEvent)
    const establishment = useUnit($activeEstablishmentOption)
    const deleteSection = useUnit(deleteCategoryFx)

    const showSuccess = () => {
        ref.current.show({
            severity: 'success',
            summary: 'Категория успешно удалена!'
        });
    };

    const showFailure = (message) => {
        ref.current.show({
            severity: 'error',
            summary: 'Возникли ошибки при удалении категории',
            detail: message,
        });
    };

    const handleDelete = () => deleteSection({
        establishmentId: establishment.id,
        categoryId: props.categoryId
    })
        .then(showSuccess)
        .catch(showFailure)

    const handleEdit = () => setCategoryToEdit(props.subgroup)

    const [iconState, setState] = useState(true)

    return (
        <div className={style.subgroup}>
            <Toast ref={ref}/>
            <div className={style.headerRow}>
                <h4 className={style.header}>{props.subgroupName}</h4>
                <div className={style.iconRow}>
                    <Tooltip onEdit={handleEdit} onDelete={handleDelete}>
                        <div className={'cursor-pointer'}>
                            <FiMoreHorizontal
                                className={'text-gray-400'}
                                size={'20px'}
                            />
                        </div>
                    </Tooltip>
                    <ChevronIcon
                        iconState={iconState}
                        setState={() => setState(!iconState)}
                    />
                </div>
            </div>

            {iconState && props.products.map(position => (
                <PositionRow position={position} productId={position.id}>
                    {position.name}
                    {"-"}
                    {position.price + " ₽"}
                    {position.weightG + " гр."}
                    {position.onSale ? "Да" : "Нет"}
                </PositionRow>
            ))}

        </div>
    )
}

export default PositionSubgroup