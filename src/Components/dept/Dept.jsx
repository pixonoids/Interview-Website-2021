import React, { useState } from 'react'
import ParentCon from '../UI/Container/ParentCon'
import Heading from '../UI/Heading/Heading'
import InputBox from "../UI/input/InputBox"
import ColumnCon from "../UI/Container/ColumnCon"
import RowCon from "../UI/Container/RowCon"
import Button from '../UI/Button/Button'
import Dropdown from '../UI/Dropdown/Dropdown'

const Dept = () => {
    const [selected, setSelected] = useState("Choose Your Branch")
    return (
        <ParentCon backgroundURL={"./images/11.svg"}>
        <ColumnCon> 
        <Heading text={"Department for Application"} />
        
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

export default Dept
