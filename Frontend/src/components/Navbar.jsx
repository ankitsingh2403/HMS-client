import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";

const API_BASE_URL =
  import.meta.env.MODE === "production" ? "" : "http://localhost:4000";



const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  // 🧑‍💻 Logout handler function
  const handleLogout = async () => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/api/v1/user/patient/logout`, {
        withCredentials: true,
      });
      toast.success(data.message);
      setIsAuthenticated(false); // Update the authentication state
    } catch (err) {
      toast.error(err.response?.data?.message || "Logout failed. Please try again.");
    }
  };

  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo("/login");
  };

  return (
    <nav className="container">
      <div className="logo">
        <img src="/logo.jpg" alt="logo" className="logo-img" />
      </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to={"/"} onClick={() => setShow(!show)}>
            Home
          </Link>
          <Link to={"/appointment"} onClick={() => setShow(!show)}>
            Appointment
          </Link>
          <Link to={"/about"} onClick={() => setShow(!show)}>
            About Us
          </Link>
        </div>
        {isAuthenticated ? (
          <button className="logoutBtn btn" onClick={handleLogout}>
            LOGOUT
          </button>
        ) : (
          <button className="loginBtn btn" onClick={goToLogin}>
            LOGIN
          </button>
        )}
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
