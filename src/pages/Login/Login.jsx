import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import authstore from '../../store/authstore.js';
import  bg  from './../../assets/wave-haikei.svg';
import './Login.css';

function Login() {
    const API_URL = import.meta.env.VITE_API_URL;
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {setAuth}=authstore();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
            
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const data = await response.json();
            if (response.ok) {
                setAuth(true);
                navigate("/home");
            }
            else{
            setError(data.message);
            return;
        }

        } catch (error) {
           
        console.log(error);
        setError("Server error occurred");
      
        }
    }


    return (<>
        <section className="hero">

    <div className="box">
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
          {error}
          </p>
        </div>

      </div>

      <button
        type="button"
        onClick={() => navigate("/register")}
        className="banner-btn"
      >
        Register Now
      </button>

    </div>
  )
}
        <div className="heading">
            <h3>Welcome to URL Shortener</h3><br />
            <h4>Please Login to continue</h4>
        </div>

        <div className="content">

            <div className="left">
                <img src={bg} alt="" />
            </div>

            <div className="right">
                <form onSubmit={handlesubmit}>

                    <input
                        type="email"
                        placeholder="Enter Email address"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />

                    <button>Login</button>

                </form>
              
            </div>

        </div>

    </div>

</section>
    </>);
}

export default Login;