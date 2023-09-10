import style from './Card.module.css'

const Card = (props) => {
    return (
        <div className={style.layout}>
            {props.children}
        </div>
    )
}

export default Card