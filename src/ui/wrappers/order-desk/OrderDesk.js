import style from "./OrderDesk.module.css"
import OrderStack from "../order-stack/OrderStack";
import orderList from "../../../data/entity/OrderList";

const OrderDesk = () => {

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
                        orders={orderList}
                        orderStatus={orderStatus}
                    />
                })
            }
        </div>
    )
}

export default OrderDesk