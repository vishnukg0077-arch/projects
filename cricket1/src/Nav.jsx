import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Nav({ sortBy, setSortBy, search, setSearch }) {

    const [show, setShow] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleProfile = () => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setShow(!show);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <nav className="w-full bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                <h1 className="text-xl font-bold text-yellow-400">
                    CricketStats
                </h1>

                <ul className="flex items-center space-x-6">
                    <li>
                        <a href="/home" className="hover:text-yellow-400 transition">
                            Home
                        </a>
                    </li>

                    <li>
                        <select
                            className="p-1 border rounded-lg bg-gray-800 text-white
                                       focus:ring-2 focus:ring-yellow-400"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="all">All Players</option>
                            <option value="batsman">Batsman</option>
                            <option value="allrounder">All-Rounder</option>
                            <option value="bowler">Bowler</option>
                        </select>
                    </li>

                    <li>
                        <input
                            type="text"
                            placeholder="Search player..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="px-3 py-1 rounded-lg text-black
                                       focus:outline-none focus:ring-2
                                       focus:ring-yellow-400"
                        />
                    </li>

                    {/* Profile Icon */}
                    <li className="relative">
                        <i
                            className="fa fa-user p-2 rounded-lg cursor-pointer
                                       hover:bg-slate-600"
                            onClick={handleProfile}
                        ></i>


                        {show && user && (
                            <div
                                className="absolute right-0 mt-3 w-48
               bg-white text-gray-800
               rounded-2xl shadow-xl
               border border-gray-100
               p-4
               transform transition-all duration-200
               ease-out scale-100 opacity-100"
                            >
                                {/* Profile section */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r
                      from-indigo-500 to-purple-500
                      flex items-center justify-center
                      text-white font-bold uppercase">
                                        {user.name.charAt(0)}
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold">
                                            Hi, {user.name}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Welcome back
                                        </p>
                                    </div>
                                </div>

                                <hr className="mb-3" />

                                {/* Logout button */}
                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center gap-2
                 text-sm font-medium text-red-600
                 px-3 py-2 rounded-lg
                 hover:bg-red-50
                 transition-colors duration-200"
                                >
                                    🚪 Logout
                                </button>
                            </div>
                        )}

                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
