import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<SignUp />} />  
        <Route path="/appointment" element={<RequireAuth>
          <Appointment />
        </RequireAuth>} /> 
        
        
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </div>
  );
}

export default App;
