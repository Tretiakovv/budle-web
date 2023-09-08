import style from './Card.module.css'
import {Component} from "react";

const className = `${style.layout} ${style.style}`

const Card = ({components}) => {
    return (
        <div className={className}>
            {components.map(
                (Component,index) => (
                    <div key={index}>
                        <Component/>
                    </div>
                )
            )}
        </div>
    )
}

export default Card