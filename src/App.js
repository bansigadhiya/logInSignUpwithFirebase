import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/logIn" element={<LogIn />} ></Route>
      </Routes>
    </>
  );
}

export default App;
