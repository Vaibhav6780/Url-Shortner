import { useState } from "react";
import './Home.css';

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Custom Short Links",
    description: "Create memorable, custom short URLs in seconds.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: "User Dashboard",
    description: "Manage, track, and delete your links in a personal dashboard.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Analytics Ready",
    description: "Track clicks and engagement with detailed insights.",
  },
];

function Home() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [Url, setUrl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!Url) return;
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/url`, {
        method: "POST",
        credentials: "include",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ url: Url }),
      });
      const data = await response.json();
      if (response.ok) setshorturl(data.shortUrl);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shorturl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="home-wrapper">

      {/* Hero text */}
      <div className="home-hero">
        <span className="home-badge">Free URL Shortener</span>
        <h1 className="home-heading">Shorten URLs <span className="home-heading-accent">Instantly</span></h1>
        <p className="home-subtext">Create short, shareable links and track clicks with a modern platform.</p>
      </div>

      {/* Input box */}
      <form className="home-input-box" onSubmit={handlesubmit}>
        <div className="home-input-wrap">
          <span className="home-input-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
            </svg>
          </span>
          <input
            type="url"
            placeholder="Paste your long URL here..."
            value={Url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="home-btn" disabled={loading}>
          {loading ? (
            <span className="home-btn-spinner" />
          ) : (
            "Shorten URL"
          )}
        </button>
      </form>

      {/* Result box */}
      {shorturl && (
        <div className="home-result">
          <div className="home-result-left">
            <span className="home-result-label">Your short link</span>
            <a href={shorturl} target="_blank" rel="noreferrer" className="home-result-link">
              {shorturl}
            </a>
          </div>
          <button className="home-copy-btn" onClick={handleCopy}>
            {copied ? (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>
      )}

      {/* Feature cards */}
      <div className="home-features">
        {features.map((f, i) => (
          <div className="home-feature-card" key={i}>
            <div className="home-feature-icon">{f.icon}</div>
            <h3 className="home-feature-title">{f.title}</h3>
            <p className="home-feature-desc">{f.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;
