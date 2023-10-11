import style from "./OrderCard.module.css"
import {animated} from "@react-spring/web";

const OrderCard = (props) => {

    /*
    const [{x, y}, api] = useSpring(() => ({x: 0, y: 0}))

    const bindDrag = useDrag(({down, movement: [mx, my], tap, dragging}) => {
        tap ? props.onSelectOrder(order) : api.start({x: down ? mx : 0, y: down ? my : 0})
        props.setDragging(dragging)
    }, {})
     */

    const order = props.order

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

    return (
        <animated.div
            className={style.wrapper}
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

        </animated.div>
    )
}

export default OrderCard