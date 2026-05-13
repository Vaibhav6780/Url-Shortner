import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Dashboard.css";
import { ArrowLeft, Trash2 } from "lucide-react";
import './Dashboard.css';

function Dashboard() {
  const [urls, setUrls] = useState([]);
  const navigate = useNavigate();
  async function handleDelete(id) {

    try {

      const response = await fetch(

        `http://localhost:3000/url/${id}`,

        {
          method: "DELETE",

          credentials: "include"
        }

      );

      const data = await response.json();
      setUrls((prev) =>

        prev.filter((url) =>

          url._id !== id

        )
      );

    } catch (error) {

      console.log(error);

    }

  }
  useEffect(() => {
    async function fetchUrls() {
      try {
        const response = await fetch(
          "http://localhost:3000/dashboard",
          {
            method: "GET",
            credentials: "include",
          }
        );

        const data = await response.json();

        if (response.ok) {
          setUrls(data);
        }
      } catch (error) {
        console.log("error occured", error);
      }
    }

    fetchUrls();
  }, []);

  return (
    <div className="dashboard-page">

      <div className="dashboard-card">

        {/* HEADER */}
        <div className="dashboard-header">

          <div className="back-btn">
            <ArrowLeft size={24} onClick={() => { navigate("/home") }} />
          </div>

          <h1>My URL's</h1>



        </div>

        {/* TABLE */}
        <table className="dashboard-table">

          <thead>
            <tr>
              <th>Short URL</th>
              <th>Original URL</th>
              <th>Clicks</th>
              <th>Created</th>
              <th>Delete</th>
             
            </tr>
          </thead>

          <tbody>

            {
              urls.map((url) => (

                <tr key={url._id}>

                  <td>
                    <a
                      href={`http://localhost:3000/url/${url.shortCode}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {`http://localhost:3000/url/${url.shortCode}`}
                    </a>
                  </td>

                  <td className="original-url">
                    {url.originalUrl}
                  </td>

                  <td>
                    {url.clicks}
                  </td>

                  <td>
                    {
                      new Date(url.createdAt).toLocaleDateString()
                    }
                  </td>

                  <td>
                    <button className="delete-btn" onClick={() => handleDelete(url._id)}>
                      <Trash2 size={18} />
                    </button>
                  </td>

                 

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;