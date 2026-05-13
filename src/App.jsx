import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Approutes from './routes/Approutes';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from "react";
import useAuthStore from "./store/authstore";
import './App.css';

function App() {
  
    const { setAuth,setLoading } = useAuthStore();

    useEffect(() => {
        async function checkAuth() {

            try {
                const response = await fetch(
                    "http://localhost:3000/auth/check-auth",
                    {
                        credentials: "include"
                    }
                );

                const data = await response.json();

                if (response.ok) {
                    setAuth(data.user);
                }

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        checkAuth();

    }, []);
  return (

  
    <>
      <Navbar />
<main className="main-content">
        <Approutes />
      </main>
     

      <Footer />
    </>

    

  );
}

export default App;