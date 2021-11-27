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
import Hover from "../Tilt/Hover";

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
          <Button type="solid" text={"Back"} to={"/priority"} />
          <Button type="hollow" text={"Finish"} to={"/footer"} />
        </RowCon>
      </ColumnCon>
      <Hover location=".\images\tiltjs\pixonoid.png" />
    </ParentCon>
  );
};

export default Why;