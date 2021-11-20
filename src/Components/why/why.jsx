import React, { useState } from "react";
import ParentCon from "../UI/Container/ParentCon";
import Heading from "../UI/Heading/Heading";
import InputBox from "../UI/input/InputBox";
import ColumnCon from "../UI/Container/ColumnCon";
import RowCon from "../UI/Container/RowCon";
import Button from "../UI/Button/Button";
import Dropdown from "../UI/Dropdown/Dropdown";
import Radio from "../UI/Radio/Radio";
import Area from "../UI/Area/Area";

const Why = () => {
  return (
    <ParentCon backgroundURL={"./images/9.svg"}>
      <ColumnCon>
        <Heading text={"Why Pixonoids?"} />
        <Area
          placeholder={
            "We want to know what makes you join pixo (more than 50 words)"
          }
        />
        <RowCon>
          <Button type="solid" text={"Back"} />
          <Button type="hollow" text={"Finish"} />
        </RowCon>
      </ColumnCon>
      <ColumnCon>three.js</ColumnCon>
    </ParentCon>
  );
};

export default Why;
