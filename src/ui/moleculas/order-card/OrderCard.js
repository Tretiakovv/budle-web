import style from "./OrderCard.module.css"
import {useStore} from "../../../store/store";
import {useShallow} from "zustand/shallow";

const OrderCard = ({order, stack, setDragging}) => {

    const cardData = [
        {
            header: "Время",
            data: order.date
        }, {
            header: "Кол-во гостей",
            data: order.guests
        }, {
            header: "Бронь на имя",
            data: order.orderCreator
        },
    ]

    const [orderDesk, setOrderDesk, selectOrder] = useStore(
        useShallow(state => [state.orderDesk, state.setOrderDesk, state.selectOrder])
    )

    const [currentOrder, currentStack] = useStore(
        useShallow(state => [state.currentOrder, state.currentStack])
    )

    const [setCurrentOrder, setCurrentStack] = useStore(
        useShallow(state => [state.setCurrentOrder, state.setCurrentStack])
    )

    const changeOrderStatus = useStore(state => state.changeOrderStatus)

    const handleDragOver = (e) => {
        e.preventDefault()
        setDragging(true)
    }

    const handleDragStart = (e, stack, order) => {
        setCurrentStack(stack)
        setCurrentOrder(order)
    }

    const handleDragEnd = (e) => {
        setDragging(false)
    }

    const handleDragLeave = (e) => {
        setDragging(false)
    }

    const handleDrop = (e, stack, order) => {

        e.preventDefault()

        const currentOrderIndex = currentStack.items.indexOf(currentOrder)
        currentStack.items.splice(currentOrderIndex, 1)

        const dropIndex = stack.items.indexOf(order)
        stack.items.splice(dropIndex + 1, 0, currentOrder)

        setOrderDesk(orderDesk.map((s) => {
            return s.id === stack.id ? stack :
                s.id === currentStack.id ? currentStack : s
        }))

        changeOrderStatus(stack.id, order.orderId)

        setDragging(false)

    }

    return (
        <div
            className={style.wrapper}
            draggable={true}
            onDragOver={(e) => handleDragOver(e)}
            onDragStart={(e) => handleDragStart(e, stack, order)}
            onDragEnd={(e) => handleDragEnd(e)}
            onDragLeave={(e) => handleDragLeave(e)}
            onDrop={(e) => handleDrop(e, stack, order)}
            onClick={() => selectOrder(order)}
        >

            <div className={style.headerRow}>
                <h4 className={style.header}>
                    {`Столик ${order.spotNumber}`}
                </h4>
                {
                    order.preorder ? <div className={style.preorderTag}>
                        <h4 className={style.tagHeader}>Предзаказ</h4>
                    </div> : null
                }
            </div>

            <div className={style.infoCol}>
                {
                    cardData.map(element => {
                        return <div className={style.infoRow}>
                            <h4 className={style.infoHeader}>
                                {element.header}
                            </h4>
                            <h4 className={style.infoData}>
                                {element.data}
                            </h4>
                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default OrderCard