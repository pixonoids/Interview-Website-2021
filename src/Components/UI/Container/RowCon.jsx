import React from 'react'
import classes from "./ColumnCon.module.css"

const ColumnCon = (props) => {
    return (
        <div className={classes["flex-row"]}>
            {props.children}
        </div>
    )
}

export default ColumnCon
