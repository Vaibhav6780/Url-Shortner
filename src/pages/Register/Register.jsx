import { useState } from "react";
import bg from "./../../assets/wave-haikei.svg";
import "./Register.css";
import { useNavigate } from "react-router-dom";
function Register() {
    const API_URL = import.meta.env.VITE_API_URL;
    const [error, setError] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const handlesubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(
                `${API_URL}/auth/register`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {

                // alert("User registered successfully");

                navigate("/login");
            }
            else {
                setError(data.message);
                return;
            }

        } catch (error) {

            console.log(error);
             setError("Server error occurred");
        }
    }

    return (

        <section className="register-hero">
            <div className="register-box">
                {
  error && (
    <div className="auth-banner">

      <div className="banner-content">

        <div className="banner-icon">
          !
        </div>

        <div className="banner-text">
          <h3>Login Failed</h3>

          <p>
            No account found with this email.
            Please register first.
          </p>
        </div>

      </div>

      <button
        type="button"
        onClick={() =>setError("")}
        className="banner-btn"
      >
        OK
      </button>

    </div>
  )
}
                <div className="register-heading">
                    <h2>Create Account</h2>
                    <p>   Join URL Shortener and manage your links easily. </p>
                </div>

                <div className="register-content">

                    <div className="register-left">
                        <img src={bg} alt="background" />
                    </div>

                    <div className="register-right">

                        <form onSubmit={handlesubmit}>
                            <input
                                type="email"
                                placeholder="Enter Email Address"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            />

                            <input
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                            />
                            <button type="submit">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;