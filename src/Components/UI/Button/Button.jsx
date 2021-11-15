import React from 'react'
import "./Button.css";
const Button = (props) => {

    return (
        <button className={`button ${props.type}`} type="submit">{props.text}</button>
    )
}

export default Button
