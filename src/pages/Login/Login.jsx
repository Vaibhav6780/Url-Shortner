import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import authstore from '../../store/authstore.js';
import "./Login.css";
import Toast from "../../components/Toast/Toast.jsx";

export default function Login() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setAuth } = authstore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
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
    
    <div className="login-page">
      <Toast message={error} onClose={() => setError(null)} />
      <div className="login-card">
 
        {/* ── Left panel ── */}
        <div className="login-left">
          <div className="login-dot-grid" aria-hidden="true" />

          <div className="login-brand">
            <div className="login-brand-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
              </svg>
            </div>

            <h1 className="login-brand-name">URL<br />Shortener</h1>
            <p className="login-brand-tagline">Shorten, share, and track your links with ease.</p>

            <ul className="login-features">
              <li className="login-feature-item">
                <span className="login-feature-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
                  </svg>
                </span>
                Real-time click analytics
              </li>
              <li className="login-feature-item">
                <span className="login-feature-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </span>
                Secure &amp; private links
              </li>
              <li className="login-feature-item">
                <span className="login-feature-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </span>
                Instant short URLs
              </li>
            </ul>
          </div>

          {/* Wave decoration */}
          <div className="login-wave" aria-hidden="true">
            <svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100%" height="100%">
              <path d="M0,70 C50,45 100,100 150,65 C200,35 250,85 300,60 L300,140 L0,140 Z" fill="rgba(93,169,255,0.12)" />
              <path d="M0,90 C60,70 110,115 170,88 C220,65 265,102 300,80 L300,140 L0,140 Z" fill="rgba(93,169,255,0.18)" />
              <path d="M0,112 C70,96 130,130 200,110 C245,97 275,122 300,106 L300,140 L0,140 Z" fill="rgba(93,169,255,0.28)" />
            </svg>
          </div>
        </div>

        {/* ── Right panel ── */}
        <div className="login-right">
          <h2 className="login-title">Welcome back</h2>
          <p className="login-subtitle">Sign in to your account to continue</p>

          <div className="login-field">
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="login-field">
            <label htmlFor="login-password">Password</label>
            <div className="login-pw-wrap">
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="login-pw-toggle"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="login-options">
            <a href="#" className="login-forgot">Forgot password?</a>
          </div>

          <button className="login-btn" onClick={handlesubmit}>
            Sign in
          </button>

          <div className="login-divider"><span>or</span></div>

          <p className="login-signup">
            Dont have an account? <a href="/register">Create one</a>
          </p>
        </div>

      </div>
    </div>
  );
}
