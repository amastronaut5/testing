import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import {useState} from "react";
import Home from "./components/home.jsx";
import SignUp from "./components/signup.jsx";
import Login from "./components/login.jsx";
import sidebarIcon from "./assets/sidebar.svg";
function App() {
  

  return (
    <div className=" h-screen bg-screen">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Home />} />
          <Route path='/services' element={<Home />} />
          <Route path='/blog' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const Navigate = useNavigate();
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-navbar shadow-md">
        <div onClick={() => Navigate("/")} className="text-text-logo font-bold text-2xl tracking-wide cursor-pointer">Logo</div>
        <div className="hidden md:flex items-center space-x-10">
          <div onClick={() => Navigate("/")} className="text-text-navbar hover:text-text-hover-navbar transition-colors duration-200 font-medium cursor-pointer">Home</div>
          <div onClick={() => Navigate("/about")} className="text-text-navbar hover:text-text-hover-navbar transition-colors duration-200 font-medium cursor-pointer">About Us</div>
          <div onClick={() => Navigate("/services")} className="text-text-navbar hover:text-text-hover-navbar transition-colors duration-200 font-medium cursor-pointer">Services</div>
          <div onClick={() => Navigate("/blog")} className="text-text-navbar hover:text-text-hover-navbar transition-colors duration-200 font-medium cursor-pointer">Blog</div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button onClick={() => Navigate("/signup")} className="px-5 py-2 bg-bg-signup text-shadow-text-signup font-semibold rounded-xl shadow hover:bg-hover-signup transition-colors duration-200">Sign Up</button>
          <button onClick={() => Navigate("/login")} className="px-5 py-2 bg-navbar text-text-hover-navbar font-semibold rounded-xl border border-bg-signup hover:bg-bg-signup hover:text-text-signup transition-colors duration-200">Log In</button>
        </div>
        <div onClick={() => setSidebarOpen((prev) => !prev)} className="flex items-center justify-center ml-8 md:hidden">
          <img src={sidebarIcon} alt="Sidebar Icon" className="w-8 h-8 cursor-pointer" />
        </div>
      </nav>
      {sidebarOpen && (
        <div className="fixed w-full top-16 right-0 bg-gray-950  flex flex-col p-8 md:hidden">
            <div onClick={() => { setSidebarOpen(false); Navigate("/"); }} className="text-text-navbar hover:text-text-hover-navbar transition-colors duration-200 font-medium cursor-pointer mb-4">Home</div>
            <div onClick={() => { setSidebarOpen(false); Navigate("/about"); }} className="text-text-navbar hover:text-text-hover-navbar transition-colors duration-200 font-medium cursor-pointer mb-4">About Us</div>
            <div onClick={() => { setSidebarOpen(false); Navigate("/services"); }} className="text-text-navbar hover:text-text-hover-navbar transition-colors duration-200 font-medium cursor-pointer mb-4">Services</div>
            <div onClick={() => { setSidebarOpen(false); Navigate("/blog"); }} className="text-text-navbar hover:text-text-hover-navbar transition-colors duration-200 font-medium cursor-pointer mb-4">Blog</div>
            <button onClick={() => { setSidebarOpen(false); Navigate("/signup"); }} className="mt-8 px-5 py-2 bg-bg-signup text-text-signup font-semibold rounded-xl shadow hover:bg-hover-signup transition-colors duration-200">Sign Up</button>
            <button onClick={() => { setSidebarOpen(false); Navigate("/login"); }} className="mt-4 px-5 py-2 bg-navbar text-text-hover-navbar font-semibold rounded-xl border border-bg-signup hover:bg-bg-signup hover:text-text-signup transition-colors duration-200">Log In</button>
          </div>
      )}
    </>
  );
}
export default App
