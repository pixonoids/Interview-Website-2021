import React from 'react'
import ParentCon from '../UI/Container/ParentCon'
import Heading from '../UI/Heading/Heading'
import InputBox from "../UI/input/InputBox"
import ColumnCon from "../UI/Container/ColumnCon"
import RowCon from "../UI/Container/RowCon"
import Button from '../UI/Button/Button'

const Contact = () => {
    return (
        <ParentCon backgroundURL={"./images/4.svg"}>
        <ColumnCon> 
        <Heading text={"Contact Details"} />
        <InputBox placeholder={"Phone Nunber"}></InputBox>
        <RowCon>
        <Button type="solid" text={"Back"} />
        <Button type="hollow" text={"Next"} />
        </RowCon>
        </ColumnCon>
        <ColumnCon> 
        three.js
        </ColumnCon>

        </ParentCon>
    )
}

export default Contact
