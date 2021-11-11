import React from 'react'
import ParentCon from '../UI/Container/ParentCon'
import Heading from '../UI/Heading/Heading'
import InputBox from "../UI/input/InputBox"
import ColumnCon from "../UI/Container/ColumnCon"
import classes from "./user.module.css"
import Button from '../UI/Button/Button'

const User = () => {
    return (
        <ParentCon backgroundURL={"./images/1.svg"}>
        <ColumnCon> 
        <Heading text={"Personal Information"} />
        <InputBox placeholder={"First Name"} />
        <InputBox placeholder={"Last Name"} />
        <Button text={"Next"} />
        </ColumnCon>
        </ParentCon>
    )}
export default User
