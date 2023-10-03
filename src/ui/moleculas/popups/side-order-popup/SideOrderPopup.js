import style from "./SideOrderPopup.module.css"
import {useLayoutEffect, useRef, useState} from "react";
import {FiX} from "react-icons/fi";

const SideOrderPopup = (props) => {

    const order = props.order

    const cardData = [
        {
            header: "ID",
            data: order.id
        },
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

    const ref = useRef(null)
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)

    useLayoutEffect(() => {
        setHeight(ref.current.offsetHeight)
        setWidth(ref.current.offsetWidth)
    }, [])

    const popupHeight = height < window.innerHeight ? window.innerHeight : height

    const calculatedSum = order.menu.reduce((acc, position) => acc + position.price, 0)

    return(
        <div style={{height: popupHeight}} className={style.popupLayout}>

            <div className={style.sidebar} ref={ref}>

                <div className={style.dataCol}>

                    <div className={style.headerRow}>
                        <h2 className={style.header}>{`Столик №${order.spotNumber}`}</h2>
                        <h5 className={style.infoHeader}>{order.createTime}</h5>
                        <div
                            onClick={props.onClosePopup}
                            className={style.xButton}
                            style={{right: width + 30}}
                        >
                            <FiX size={"22px"} className={style.xIcon}/>
                        </div>
                    </div>

                    <div className={style.infoCol}>
                        {
                            cardData.map(element => {
                                return (
                                    <div className={style.infoRow}>
                                        <h4 className={style.infoHeader}>
                                            {element.header}
                                        </h4>
                                        <h4 className={style.infoData}>
                                            {element.data}
                                        </h4>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

                <div className={style.dataCol}>

                    <div className={style.headerRow}>
                        <h2 className={style.header}>Позиции меню</h2>
                    </div>

                    <div className={style.infoCol}>
                        {
                            order.menu.map(position => {
                                return (
                                    <div className={style.positionRow}>

                                        <div className={style.nameAmountRow}>
                                            <h4 className={style.positionName}>
                                                {position.name}
                                            </h4>
                                            <h4 className={style.positionAmount}>
                                                {`${position.amount} шт.`}
                                            </h4>
                                        </div>

                                        <div className={style.nameAmountRow}>
                                            {
                                                position.amount > 1 ? <h4 className={style.positionAmount}>
                                                    {position.price / position.amount} ₽ / шт.
                                                </h4> : null
                                            }
                                            <h4 className={style.positionPrice}>
                                                {`${position.price} ₽`}
                                            </h4>
                                        </div>



                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

                <div className={style.headerRow}>
                    <h2 className={style.header}>Итого</h2>
                    <h2 className={style.header}>{`${calculatedSum} ₽`}</h2>
                </div>

            </div>

            <div
                className={style.background}
                onClick={props.onClosePopup}
                style={{height: popupHeight}}
            />

        </div>
    )
}

export default SideOrderPopup