import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login({ setIsLogin }) {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPopup, setPopUp] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("All fields are required");
            return;
        }

        axios.post("http://localhost:8080/cricket/processLogin", {
            email,
            password
        })
            .then(res => {
                setIsLogin(true);
                setPopUp(true);
                setTimeout(() => navigate("/home"), 1000);
                setError("");
                localStorage.setItem("user",JSON.stringify(res.data));
            })
            .catch(error => {
                if (error.response && error.response.status === 500) {
                    setError("Invalid email or password");
                } else {
                    setError("Server error");
                }
            });


        setEmail("");
        setPassword("");

    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

                <h2 className="text-2xl font-bold text-center mb-4">
                    Login to <span className="text-green-500">MyCricket</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4  p-6 ">

                    <input
                        type="email"
                        value={email}
                        autoComplete="off"
                        placeholder="Email"
                        className="w-full border p-2 rounded"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        value={password}
                        autoComplete="new-password"
                        placeholder="Password"
                        className="w-full border p-2 rounded"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <p className="text-red-600 text-sm">{error}</p>}

                    <button className="w-full bg-green-400 text-white py-2 rounded hover:bg-green-600 shadow">
                        Login
                    </button>
                    {showPopup && (
                        <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
                            ✅ Loged in successfully!
                        </div>
                    )}
                </form>

                <p className="text-center mt-4">
                    Don’t have an account?
                    <Link to="/signup" className="text-green-500 ml-1">Sign up</Link>
                </p>

            </div>
        </div>
    );
}

export default Login;
