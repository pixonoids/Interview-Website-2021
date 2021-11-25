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
import { BrowserRouter } from "react-router-dom";

import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/college" element={<College />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/dept" element={<Dept />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/priority" element={<Priority />}></Route>
          <Route path="/why" element={<Why />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
