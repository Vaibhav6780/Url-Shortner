import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Approutes from './routes/Approutes';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from "react";
import useAuthStore from "./store/authstore";
import './App.css';
// require('dotenv').config();
function App() {

    const { setAuth, setLoading } = useAuthStore();
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        async function checkAuth() {

            try {
                const response = await fetch(
                    `${API_URL}/auth/check-auth`,
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