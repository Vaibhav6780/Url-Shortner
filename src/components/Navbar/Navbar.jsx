// Navbar.jsx

import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {

  // Temporary auth state
  // Later replace with Context API or backend auth
  const isLoggedIn = false;

  const location = useLocation();

  return (
    <nav className="navbar">

      {/* LEFT SECTION */}
      <div className="navbar-left">

        <Link to="/" className="logo">
          URL-SHORTENER
        </Link>

        <div className="nav-links">

          <Link
            to="/"
            className={
              location.pathname === "/"
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

      </div>

      {/* RIGHT SECTION */}
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
          <Link to="/profile" className="profile-wrapper">

            <img
              src="https://via.placeholder.com/40"
              alt="profile"
              className="profile-image"
            />

          </Link>
        )}

      </div>

    </nav>
  );
}

export default Navbar;