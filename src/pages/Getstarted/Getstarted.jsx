import "./Getstarted.css";
import { useNavigate } from "react-router-dom";

function Getstarted() {
  const navigate = useNavigate();

  const features = [
    {
      icon: "⚡",
      colorClass: "lp-feat-icon-blue",
      title: "Lightning fast",
      desc: "Sub-100ms redirect globally via edge network",
    },
    {
      icon: "📊",
      colorClass: "lp-feat-icon-amber",
      title: "Live analytics",
      desc: "Clicks, geo, devices & referrers in real time",
    },
    {
      icon: "🔐",
      colorClass: "lp-feat-icon-purple",
      title: "Link protection",
      desc: "Password-protect and set expiry dates on links",
    },
  ];

  const avatars = [
    { initials: "JK", className: "lp-av av1" },
    { initials: "MR", className: "lp-av av2" },
    { initials: "AS", className: "lp-av av3" },
    { initials: "TC", className: "lp-av av4" },
  ];

  return (
    <div className="lp-root">
      <div className="lp-bg-glow" />
      <div className="lp-bg-glow2" />

      {/* Navbar */}
      <nav className="lp-nav">
        <div className="lp-logo">
          <div className="lp-logo-dot" />
          snip.ly
        </div>
        <div className="lp-nav-links">
          {["Features", "Pricing", "Docs"].map((label) => (
            <button key={label} className="lp-nav-link">
              {label}
            </button>
          ))}
        </div>
        <button className="lp-nav-cta" onClick={() => navigate("/register")}>
          Sign Up
        </button>
      </nav>

      {/* Hero */}
      <section className="lp-hero">
        <div className="lp-badge">
          <div className="lp-badge-dot" />
          Now with QR code generation
        </div>

        <h1 className="lp-h1">
          Shorten.
          <br />
          Track. <span className="lp-h1-accent">Convert.</span>
        </h1>

        <p className="lp-sub">
          Fast, secure URL shortening with real-time analytics and dashboard
          management.
        </p>

        <button className="lp-getstarted-btn" onClick={() => navigate("/signup")}>
          Get Started →
        </button>
      </section>

      {/* Feature cards */}
      <div className="lp-features">
        {features.map((f) => (
          <div key={f.title} className="lp-feat">
            <div className={`lp-feat-icon ${f.colorClass}`}>{f.icon}</div>
            <div className="lp-feat-title">{f.title}</div>
            <div className="lp-feat-desc">{f.desc}</div>
          </div>
        ))}
      </div>

      {/* Social proof */}
      <div className="lp-social-proof">
        <div className="lp-avatars">
          {avatars.map((av) => (
            <div key={av.initials} className={av.className}>
              {av.initials}
            </div>
          ))}
        </div>
        Trusted by 12,000+ marketers and developers
      </div>
    </div>
  );
}

export default Getstarted;