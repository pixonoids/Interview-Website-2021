import React from "react";
import ParentCon from "../UI/Container/ParentCon";
import Heading from "../UI/Heading/Heading";
import InputBox from "../UI/input/InputBox";
import ColumnCon from "../UI/Container/ColumnCon";
import RowCon from "../UI/Container/RowCon";
import classes from "./upload.module.css";
import Button from "../UI/Button/Button";
import Hover from "../Tilt/Hover";

const Upload = () => {
  return (
    <ParentCon backgroundURL={"./images/1.svg"}>
      <ColumnCon>
        <Heading text={"Upload Documents"} />
        <InputBox placeholder={"Your CV Here"} />

        <RowCon>
          <Button type="solid" text={"Back"} to={"/dept"} />
          <Button type="hollow" text={"Next"} to={"/priority"} />
        </RowCon>
      </ColumnCon>
      <Hover location=".\images\tiltjs\contact.png" />
    </ParentCon>
  );
};

export default Upload;
