import React, { useState } from "react";
import ParentCon from "../UI/Container/ParentCon";
import Heading from "../UI/Heading/Heading";
import InputBox from "../UI/input/InputBox";
import ColumnCon from "../UI/Container/ColumnCon";
import RowCon from "../UI/Container/RowCon";
import classes from "./college.module.css";
import Button from "../UI/Button/Button";
import Dropdown from "../UI/Dropdown/Dropdown";
import Hover from "../Tilt/Hover";

const College = () => {
  const [selected, setSelected] = useState("Choose Your Branch");
  const [disable, setdisable] = useState("");
  return (
    <ParentCon backgroundURL={"./images/2.svg"}>
      <ColumnCon>
        <Heading text={"College Information"} />
        <InputBox
          placeholder={
            "College Email Id                                     @nith.ac.in"
          }
        />
        <Dropdown selected={selected} setSelected={setSelected} />
        <RowCon>
          <Button type="solid" text={"Back"} to={"/user"} />
          <Button type="hollow" text={"Next"} to={"/contact"} />
        </RowCon>
      </ColumnCon>
      <Hover location=".\images\tiltjs\cap.png" />
    </ParentCon>
  );
};

export default College;
