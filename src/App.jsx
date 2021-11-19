import { useState } from "react";
import "./App.css";
import College from "./Components/college/College";
import Contact from "./Components/contact/Contact";
import Dept from "./Components/dept/Dept";
import Main from "./Components/main/Main";
import Navbar from "./Components/navbar/Navbar";
import User from "./Components/user/User";
import Upload from "./Components/upload/upload";
import Priority from "./Components/priority/Priority";
import Why from "./Components/why/why";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Main></Main>
      <User />
      <College />
      <Contact />
      <Dept />
      <Upload />
      <Priority />
      <Why />
      <Footer />
    </>
  );
}

export default App;
