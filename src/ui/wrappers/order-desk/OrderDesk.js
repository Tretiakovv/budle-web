import style from "./OrderDesk.module.css"
import OrderStack from "../order-stack/OrderStack";

const OrderDesk = (props) => {

    const orderStatusList = [
        {header: "В ожидании", id: 0},
        {header: "В работе", id: 1},
        {header: "Отменённые", id: 2},
        {header: "Выполненные", id: 3},
    ]

    return (
        <div className={style.wrapper}>
            {
                orderStatusList.map(orderStatus => {
                    return <OrderStack
                        orders={props.orders}
                        orderStatus={orderStatus}
                        onSelectOrder={props.onSelectOrder}
                    />
                })
            }
        </div>
    )
}

export default OrderDesk