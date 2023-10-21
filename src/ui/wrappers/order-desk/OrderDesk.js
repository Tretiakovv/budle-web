import style from "./OrderDesk.module.css"
import OrderStack from "../order-stack/OrderStack";
import {useStore} from "../../../store/store";
import {useEffect} from "react";
import {useShallow} from "zustand/shallow";

const OrderDesk = () => {

    const [orderDesk, initOrderDesk] = useStore(
        useShallow(state => [state.orderDesk, state.initOrderDesk])
    )

    useEffect(() => {
        initOrderDesk()
    }, [])

    return (
        <div className={style.wrapper}>
            {
                orderDesk === null || orderDesk === undefined ? null :
                    orderDesk.map(stack => {
                        return <OrderStack stack={stack}/>
                    })
            }
        </div>
    )
}

export default OrderDesk