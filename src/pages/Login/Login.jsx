import { useState } from "react";
import './Login.css'
function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/auth/login", {
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
            if (response.ok) alert("Login sucess");
            else alert(data.message || "Login sucess");

        } catch (error) {
            console.log("Server error  : ", error);
        }


    }


    return (<>
        <section className="hero">
            <div className="box">
                <form onSubmit={handlesubmit}>
                    <input type="email"
                        placeholder="Enter Email address"
                        value={email}
                        onChange={(e) => { setemail(e.target.value) }}
                    />
                    <input type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => { setpassword(e.target.value) }}
                    />

                    <button>Login</button>
                </form>
            </div>


        </section>
    </>);
}

export default Login;