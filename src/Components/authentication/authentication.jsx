import React from "react";
import ParentCon from "../UI/Container/ParentCon";
import Heading from "../UI/Heading/Heading";
import ColumnCon from "../UI/Container/ColumnCon";
import RowCon from "../UI/Container/ColumnCon";
import { FcGoogle } from "react-icons/fc";
import classes from "./authentication.module.css";
import Button from "../UI/Button/Button";

const Authentication = () => {
  return (
    <ParentCon backgroundURL={"./images/8.svg"}>
      <ColumnCon>
        <Heading text={"Choose an Account..."} />
        <FcGoogle className={classes.authicon} />
        <RowCon>
          <Button type="solid" text={"Back"} to={"/"} />
          <Button type="hollow" text={"Next"} to={"/user"} />
        </RowCon>
      </ColumnCon>
    </ParentCon>
  );
};
export default Authentication;
