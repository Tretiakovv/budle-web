import style from './Card.module.css'

const className = `${style.layout} ${style.style}`

const Card = (props) => {
    return (
        <div className={className}>
            {props.children}
        </div>
    )
}

export default Card