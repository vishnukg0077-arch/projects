import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import logo from "../assets/cric.avif";


function SignUp() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() => {
        setName("");
        setEmail("");
        setPassword("");
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8080/cricket/process", {
            name,
            email,
            password
        })
            .then((response) => {
                setName("");
                setEmail("");
                setPassword("");
        
                console.log(response.data);
            })
            .catch(error => console.log(error.response?.data || error.message));
    };

    const goToLogin = () => {
        navigate("/");
    };
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${logo})` }}
        >
            <div className="relative bg-white p-8 rounded-xl w-full max-w-md shadow-lg">

                <h2 className="text-2xl font-bold mb-5 text-center">Sign Up</h2>

                <form autoComplete="off" onSubmit={handleSubmit} className="space-y-4">

                    <div className="input-box relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                            <i className="fa fa-user"></i>
                        </span>
                        <input
                            type="text"
                            value={name}
                            autoComplete="off"
                            placeholder="Name"
                            className="w-full border p-2 pl-10 rounded"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-box relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                            <i className="fa fa-envelope"></i>
                        </span>
                        <input
                            type="email"
                            value={email}
                            autoComplete="off"
                            placeholder="Email"
                            className="w-full border p-2 pl-10 rounded"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-box relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                            <i className="fa fa-lock"></i>
                        </span>
                        <input
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            className="w-full border p-2 pl-10 rounded"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors"
                    >
                        Sign Up
                    </button>


                    <button
                        type="button"
                        onClick={goToLogin}
                        className="w-full mt-2 bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition-colors"
                    >
                        Go to Login
                    </button>
                </form>

            </div>
        </div>
    );
}

export default SignUp;
