import "./Getstarted.css";
import { useNavigate } from "react-router-dom";

function Getstarted(){

   const navigate = useNavigate();

   return(

      <div className="landing-page">

         <div className="hero-content">

            <h1>
               Shorten Your Links
            </h1>

            <p>
               Fast, secure and modern URL shortening
               platform with analytics and dashboard management.
            </p>

            <button
               onClick={() => navigate("/login")}
            >
               Get Started
            </button>

         </div>

      </div>

   );
}

export default Getstarted;