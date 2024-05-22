import style from "./OrderStack.module.css"
import OrderCard from "../../moleculas/order-card/OrderCard";
import {useState} from "react";
import {useStore} from "../../../store/store";
import {useShallow} from "zustand/react/shallow";
import {useUnit} from "effector-react";
import {changeOrderStatusFx} from "../../../models/orders/model";

const OrderStack = ({stack, establishmentId}) => {

    const [isDragging, setDragging] = useState(false)

    const [orderDesk, setOrderDesk, selectOrder] = useStore(
        useShallow(state => [state.orderDesk, state.setOrderDesk, state.selectOrder])
    )

    const [setCurrentOrder, setCurrentStack] = useStore(
        useShallow(state => [state.setCurrentOrder, state.setCurrentStack])
    )

    const [currentOrder, currentStack] = useStore(
        useShallow(state => [state.currentOrder, state.currentStack])
    )

    const changeOrderStatus = useUnit(changeOrderStatusFx)

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

        changeOrderStatus({
            orderId: order.id,
            establishmentId: establishmentId,
            status: stack.id
        })

        setDragging(false)

    }

    const dropCardHandler = (e, stack) => {

        stack.items.push(currentOrder)

        const currentOrderIndex = currentStack.items.indexOf(currentOrder)
        currentStack.items.splice(currentOrderIndex, 1)

        setOrderDesk(orderDesk.map((s) => {
            return s.id === stack.id ? stack :
                s.id === currentStack.id ? currentStack : s
        }))

        changeOrderStatus({
            orderId: currentOrder.id,
            establishmentId: establishmentId,
            status: stack.id
        })

    }

    return (
        <div className={style.wrapper}>
            <div className={style.stackHeader}>
                <h4 className={style.headerData}>{stack.name}</h4>
                <h4 className={style.headerData}>{stack.items.length}</h4>
            </div>
            <div
                onDragOver={handleDragOver}
                onDrop={(e) => dropCardHandler(e, stack)}
                className={style.stackCol}
            >
                {stack.items.map((order) => (
                    <OrderCard
                        onDragStart={(e) => handleDragStart(e, stack, order)}
                        onDrop={(e) => handleDrop(e, stack, order)}
                        selectOrder={() => selectOrder(order)}
                        onDragLeave={handleDragLeave}
                        stack={stack} order={order}
                        onDragOver={handleDragOver}
                        onDragEnd={handleDragEnd}
                    />
                ))}
            </div>
        </div>
    )
}

export default OrderStack