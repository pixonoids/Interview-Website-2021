import React, { useContext, useState } from "react";

export const UserDataContext = React.createContext();

export const UserDataProvider = (props) => {
  const [userData, setUserData] = useState({
    id: 1,
    firstName: "Pranjal",
    lastName: "Goyal",
    phoneNumber: "8929467816",
    emailId: "20bec035@nith.ac.in",
    branchName: "ECE",
    pixoDept: "Web",
    clubPriority: "pixo>exe",
    whyPixo: "wbtpbtu",
    uploadUrl: "www.drive.google.com",
    terms: true,
  });
  return (
    <UserDataContext.Provider value={[userData, setUserData]}>
      {props.children}
    </UserDataContext.Provider>
  );
};
