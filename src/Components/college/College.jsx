import React from 'react'
import ParentCon from '../UI/Container/ParentCon'
import Heading from '../UI/Heading/Heading'
import InputBox from "../UI/input/InputBox"
import ColumnCon from "../UI/Container/ColumnCon"
import classes from "./college.module.css"
import Button from '../UI/Button/Button'

const College = () => {
    return (
        <ParentCon  backgroundURL={"./images/main.svg"}>
            <ColumnCon>
                <Heading text={"College Details"} />
                <InputBox placeholder={"Email Id"} />
                <Button text={"Chalo Next"} />
            </ColumnCon>
        </ParentCon>
    )
}

export default College
