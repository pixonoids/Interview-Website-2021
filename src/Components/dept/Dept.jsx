import React, { useState } from "react";
import ParentCon from "../UI/Container/ParentCon";
import Heading from "../UI/Heading/Heading";
import InputBox from "../UI/input/InputBox";
import ColumnCon from "../UI/Container/ColumnCon";
import RowCon from "../UI/Container/RowCon";
import Button from "../UI/Button/Button";
import Dropdown from "../UI/Dropdown/Dropdown";
import Radio from "../UI/Radio/Radio";
import Hover from "../Tilt/Hover";

const Dept = () => {
  return (
    <ParentCon backgroundURL={"./images/6.svg"}>
      <ColumnCon>
        <Heading text={"Department for Application"} />
        <Radio />
        <RowCon>
          <Button type="solid" text={"Back"} />
          <Button type="hollow" text={"Next"} />
        </RowCon>
      </ColumnCon>
      <Hover location=".\images\tiltjs\tilt-camera.png" />
    </ParentCon>
  );
};

export default Dept;
