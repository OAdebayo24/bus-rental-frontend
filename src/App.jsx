import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Payment from "./pages/Payment"
import LoginAs from "./pages/auth/LoginAs"
import Booking from "./pages/Booking"
import UserLogin from "./pages/auth/UserLogin"
import CompanyLogin from "./pages/auth/CompanyLogin"
import AdminLogin from "./pages/auth/AdminLogin"
import Dashboard from "./pages/Dashboard"
import ForgotPassword from "./pages/auth/ForgotPassword"
import VehicleRental from "./pages/VehicleRental"
import RegisterAdmin from "./pages/auth/RegisterAdmin"
import RegisterCompany from "./pages/auth/RegisterCompany"
import RegisterUser from "./pages/auth/Register"
import RegisterAs from "./pages/auth/RegisterAs"
import VehicleDetails
from "./pages/VehicleDetails"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/admin-register" element={<RegisterAdmin />} />
        <Route path="/user-register" element={<RegisterUser />} />
        <Route path="/company-register" element={<RegisterCompany />} />
        <Route path="/login-as" element={<LoginAs />} />
        <Route path="/register-as" element={<RegisterAs />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/company-login" element={<CompanyLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/vehicle-rental" element={<VehicleRental />} />
        <Route path="/vehicle-details/:id" element={< VehicleDetails />} />
        <Route path="/bookings" element={<Booking/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
