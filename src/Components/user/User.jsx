import React from "react";
import ParentCon from "../UI/Container/ParentCon";
import Heading from "../UI/Heading/Heading";
import InputBox from "../UI/input/InputBox";
import ColumnCon from "../UI/Container/ColumnCon";
import RowCon from "../UI/Container/RowCon";
import classes from "./user.module.css";
import Button from "../UI/Button/Button";
import Hover from "../Tilt/Hover";

const User = () => {
  return (
    <ParentCon backgroundURL={"./images/4.svg"}>
      <ColumnCon>
        <Heading text={"Personal Information"} />
        <InputBox placeholder={"First Name"} />
        <InputBox placeholder={"Last Name"} />
        <RowCon className={classes.container}>
          <Button type="solid" text={"Back"} />
          <Button type="hollow" text={"Next"} />
        </RowCon>
      </ColumnCon>
      <Hover location=".\images\tiltjs\idcard.png" />
    </ParentCon>
  );
};
export default User;
