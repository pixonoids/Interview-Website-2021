import React from 'react'
import classes from "./Heading.module.css"

const Heading = (props) => {
    
    return (
        <h1 className={classes["heading-main"]}>
            {props.text} 
        </h1>
    )
}

    export default Heading