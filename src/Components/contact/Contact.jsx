import React from "react";
import ParentCon from "../UI/Container/ParentCon";
import Heading from "../UI/Heading/Heading";
import InputBox from "../UI/input/InputBox";
import ColumnCon from "../UI/Container/ColumnCon";
import RowCon from "../UI/Container/RowCon";
import Button from "../UI/Button/Button";
import Hover from "../Tilt/Hover";

const Contact = () => {
  return (
    <ParentCon backgroundURL={"./images/12.svg"}>
      <ColumnCon>
        <Heading text={"Contact Details"} />
        <InputBox placeholder={"Phone Number"}></InputBox>
        <RowCon>
          <Button type="solid" text={"Back"} to={"/college"} />
          <Button type="hollow" text={"Next"} to={"/dept"} />
        </RowCon>
      </ColumnCon>
      <Hover location=".\images\tiltjs\contact2.png" />
    </ParentCon>
  );
};

export default Contact;
