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
import Loading from "./Components/loading/Loading";
import Authentication from "./Components/authentication/authentication";
import ErrorPage from "./Components/error/ErrorPage";
//context dependencies
import { UserDataProvider } from "./Context/UserData/UserDataContext";
//router dependencies
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState(
    window.sessionStorage.getItem("currentPage") || "authen"
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 10000);
    window.sessionStorage.setItem("currentPage", "authen");
  }, []);
  return (
    <>
      <Navbar />
      <UserDataProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={loading ? <Loading load={loading} /> : <Main />}
            ></Route>
            <Route
              path="/register"
              element={
                <>
                  {currentPage === "authen" && (
                    <Authentication page={setCurrentPage} />
                  )}
                  {currentPage === "user" && <User page={setCurrentPage} />}
                  {currentPage === "college" && (
                    <College page={setCurrentPage} />
                  )}
                  {currentPage === "contact" && (
                    <Contact page={setCurrentPage} />
                  )}
                  {currentPage === "dept" && <Dept page={setCurrentPage} />}
                  {currentPage === "upload" && <Upload page={setCurrentPage} />}
                  {currentPage === "priority" && (
                    <Priority page={setCurrentPage} />
                  )}
                  {currentPage === "why" && <Why page={setCurrentPage} />}
                </>
              }
            ></Route>
            <Route path="/success" element={<Footer />}></Route>
            {/* <Route path="/college" element={}></Route>
            <Route path="/contact" element={}></Route>
            <Route path="/dept" element={}></Route>
            <Route path="/upload" element={}></Route>
            <Route path="/priority" element={}></Route>
            <Route path="/why" element={}></Route>
            <Route path="/footer" element={}></Route> */}
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </BrowserRouter>
      </UserDataProvider>
    </>
  );
}

export default App;
