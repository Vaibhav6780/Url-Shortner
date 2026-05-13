import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import useAuthStore from "../../store/authstore";
import axios from 'axios'
function Navbar() {
const API_URL = import.meta.env.VITE_API_URL;

  const isLoggedIn = true;
  const { user,logout } = useAuthStore();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const hideNavbar =
    location.pathname === "/login" || location.pathname=="/register"

  if (hideNavbar) {
    console.log(user);
    return null;
  }
  const handleLogout = async()=>{

   await axios.get(
      `${API_URL}/auth/logout`,
      {
         withCredentials:true
      }
   );

   logout();

   navigate("/login");
}
  return (
    <nav className="navbar">

      {/* LEFT */}
      <div className="navbar-left">

        <Link to="/home" className="logo">
          URL-SHORTENER
        </Link>

      </div>

      {/* CENTER */}
      <div className="navbar-center">

        <Link
          to="/home"
          className={
            location.pathname === "/home"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Home
        </Link>

        {isLoggedIn && (
          <Link
            to="/dashboard"
            className={
              location.pathname === "/dashboard"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Dashboard
          </Link>
        )}

      </div>

      {/* RIGHT */}
      <div className="navbar-right">

        {!isLoggedIn ? (
          <>
            <Link to="/login">
              <button className="login-btn">
                Login
              </button>
            </Link>

            <Link to="/register">
              <button className="register-btn">
                Register
              </button>
            </Link>
          </>
        ) : (
          <div className="profile-container">

            <div
              className="profile-circle-ui"
              onClick={() => setOpen(!open)}
            >
              U
            </div>

            {open && (
              <div className="profile-dropdown">

                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>

              </div>
            )}

          </div>
        )}

      </div>

    </nav>
  );
}

export default Navbar;