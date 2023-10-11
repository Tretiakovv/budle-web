import style from "./OrderStack.module.css"
import OrderCard from "../../moleculas/order-card/OrderCard";
import {useRef, useState} from "react";
import {useSprings, animated, config} from "@react-spring/web";
import {useDrag} from "@use-gesture/react";
import clamp from "lodash.clamp"
import swap from "lodash-move"

const OrderStack = (props) => {

    const filteredOrders = props.orders.filter(order => order.status === props.orderStatus.id)
    const [isDragging, setDragging] = useState(false)
    const stackColor = isDragging ? "#D4EAFF" : "#EEF5F9"

    const onDrag = (order, active = false, originalIndex = 0, curIndex = 0, y = 0) => {
        return (index) => {
            return active && index === originalIndex
                ? {
                    y: curIndex + y,
                    zIndex: 1,
                    immediate: (key) => key === 'zIndex',
                    config: (key) => (key === 'y' ? config.stiff : config.default),
                }
                : {
                    y: order.indexOf(index),
                    zIndex: 0,
                    immediate: false,
                }
        }
    }

    const order = useRef(filteredOrders.map((_, index) => index))
    const [springs, api] = useSprings(filteredOrders.length, onDrag(order.current))

    const bindDrag = useDrag((
        {
            args: [originalIndex],
            active,
            movement: [my],
            event,
            tap
        }) => {

        if (tap) props.onSelectOrder(filteredOrders[originalIndex])
        else {
            event.stopPropagation()
            event.preventDefault()

            const curIndex = order.current.indexOf(originalIndex)
            const curRow = clamp(Math.round((curIndex * 100 + my) / 100), 0, filteredOrders.length - 1)
            const newOrder = swap(order.current, curIndex, curRow)

            api.start(onDrag(newOrder, active, originalIndex, curIndex, my))
            if (!active) order.current = newOrder
        }

    }, {})

    return (
        <div className={style.wrapper}>
            <div className={style.stackHeader}>
                <h4 className={style.headerData}>{props.orderStatus.header}</h4>
                <h4 className={style.headerData}>{filteredOrders.length}</h4>
            </div>
            <div
                style={{backgroundColor: stackColor}}
                className={style.stackCol}
            >
                {
                    springs.map(({y, zIndex}, i) => (
                        <animated.div
                            {...bindDrag(i)}
                            key={i}
                            style={{
                                y: y,
                                zIndex: zIndex
                            }}
                        >
                            <OrderCard
                                order={filteredOrders[i]}
                                onSelectOrder={props.onSelectOrder}
                                setDragging={(isDragging) => setDragging(isDragging)}
                            />
                        </animated.div>
                    ))
                }
            </div>
        </div>
    )
}

export default OrderStack