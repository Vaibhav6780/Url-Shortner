import {useState} from "react";
import './Home.css';
function Home() {
  const [Url,setUrl]=useState("");

  const handlesubmit= async (e)=>{
    e.preventdefault();
    try{
      const response = await fetch("http://localhost:3000/url",{
        method:"post",
        credentials:"include",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({
          Url
        })
      });

      const responsefrombackend=await response.json();
      if(responsefrombackend.ok) alert("Url sent success");
      else alert("unsuccesful");
    }catch(error){s
      alert("Internal error occured");
    }
  }
  return (
    <>

  <input type="url"
  placeholder="Enter URL to shorten"
  onChange={(e)=>{setUrl(e.target.value)}}
  value={Url}
  />
      <button onClick={handlesubmit}>Shorten URl</button>
    </>
  );
}

export default Home;