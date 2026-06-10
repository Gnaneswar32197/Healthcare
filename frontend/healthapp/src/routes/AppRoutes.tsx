import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Register from "../pages/auth/Register";
import PatientRegister from "../pages/auth/PatientRegister";
import DoctorRegister from "../pages/auth/DoctorRegister";
import Login from "../pages/auth/Login";


const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

     <Route path="/register" element={<Register />} />
<Route path="/register/patient" element={<PatientRegister />} />
<Route path="/register/doctor" element={<DoctorRegister />} />
<Route path="/login" element={<Login />} /> 
    </Routes>
  );
};

export default AppRoutes;