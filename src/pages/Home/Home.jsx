import { useState } from "react";
import './Home.css';
function Home() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [Url, setUrl] = useState("");
  const [shorturl, setshorturl] = useState("");

 const features = [
  {
    icon: "⚡",
    title: "Custom Short Links",
    description: "Create memorable, custom short URLs",
  },
  {
    icon: "🔒",
    title: "User Dashboard",
    description:
      "Manage, track, and delete your links in a personal dashboard.",
  },
  {
    icon: "📊",
    title: "Analytics Ready",
    description: "Track clicks and engagement with detailed insights",
  },
];
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/url`, {
        method: "post",
        credentials: "include",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          url: Url
        })
      });

      const responsefrombackend = await response.json();
      if (response.ok) setshorturl(responsefrombackend.shortUrl);
    } catch (error) {
      alert("Internal error occured");
      console.log((error));
    }
  }
  return (
    <>
  <div className="wrapper">
    <div className="input-url">
     <input type="url"
        placeholder="Enter URL to shorten"
        onChange={(e) => { setUrl(e.target.value) }}
        value={Url}
      />
      <button onClick={handlesubmit}>Shorten URl</button>
      {
        shorturl && (

          <div className="shortened-link-box">

            <p>Shortened URL:</p>

            <a
              href={shorturl}
              target="_blank"
              rel="noreferrer"
            >
              {shorturl}
            </a>

          </div>
        )
      }

    </div>
     <div className="features-container">
  {features.map((feature, index) => (
    <div className="feature-card" key={index}>
      <div className="icon">{feature.icon}</div>

      <h3>{feature.title}</h3>

      <p>{feature.description}</p>
    </div>
  ))}
</div>
  </div>

    </>
  );
}

export default Home;
