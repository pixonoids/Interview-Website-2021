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
import Loading from "./Components/loading/Loading";
import Authentication from "./Components/authentication/authentication";
import { Route, Routes } from "react-router-dom";
import { UserDataProvider } from "./Context/UserData/UserDataContext";
function App() {
  return (
    <>
      <Navbar />
      <UserDataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/authen" element={<Authentication />}></Route>
            <Route path="/user" element={<User />}></Route>
            <Route path="/college" element={<College />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/dept" element={<Dept />}></Route>
            <Route path="/upload" element={<Upload />}></Route>
            <Route path="/priority" element={<Priority />}></Route>
            <Route path="/why" element={<Why />}></Route>
            <Route path="/footer" element={<Footer />}></Route>
            <Route path="/loading" element={<Loading />}></Route>
          </Routes>
        </BrowserRouter>
      </UserDataProvider>
    </>
  );
}

export default App;
