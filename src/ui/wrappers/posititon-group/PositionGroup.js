import style from "./PositionGroup.module.css"
import PositionSubgroup from "../../moleculas/position-subgroup/PositionSubgroup";
import {FiMoreHorizontal} from "react-icons/fi";
import Tooltip from "../../moleculas/tooltip/Tooltip";
import {useUnit} from "effector-react";
import {$activeEstablishmentOption} from "../../../models/menu/model";
import {useRef} from "react";
import Toast from "../../moleculas/toast/Toast";
import {deleteCategoryFx} from "../../../models/menu/edit_delete_menu/model";

const PositionGroup = (props) => {

    const ref = useRef(null)

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

    const handleEdit = () => console.log("AAAA")

    return (
        <div className={style.card}>
            <Toast ref={ref}/>
            <div className={'col-span-full pr-10 flex flex-row items-center justify-between'}>
                <h3 className={style.header}>{props.groupName}</h3>
                <Tooltip onEdit={handleEdit} onDelete={handleDelete}>
                    <div className={'cursor-pointer'}>
                        <FiMoreHorizontal
                            className={'text-gray-400'}
                            size={'20px'}
                        />
                    </div>
                </Tooltip>
            </div>
            {props.childCategories.map(subgroup => {
                return <PositionSubgroup
                    categoryId={subgroup.id}
                    subgroupName={subgroup.name}
                    products={subgroup.products}
                    isEdit={props.isEdit}
                />
            })}
        </div>
    )

}

export default PositionGroup

