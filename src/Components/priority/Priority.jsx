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

const Priority = () => {
  return (
    <ParentCon backgroundURL={"./images/10.svg"}>
      <ColumnCon>
        <Heading text={"Club Priority"} />
        <Area
          placeholder={
            "If you applying for multiple club then we need to know your priority.."
          }
        />
        <RowCon>
          <Button type="solid" text={"Back"} to={"/upload"} />
          <Button type="hollow" text={"Next"} to={"/why"} />
        </RowCon>
      </ColumnCon>
      <Hover location=".\images\tiltjs\prior.png" />
    </ParentCon>
  );
};

export default Priority;
