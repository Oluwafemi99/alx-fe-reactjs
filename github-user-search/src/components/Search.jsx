import React from "react";
import { useState } from "react";
import { fetchGithubUser } from "../services/githubApi";
import fetchUserData from "../services/githubService";

function Search() {

    const [form, setForm] = useState({
        username: "",
        location: "",
        minRepos: ""
    })

    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setPage(1);
        setUsers([]);
        fetchUsers(1)

    
        const fetchUsers = async (pageNumber) => {
            setLoading(true);
            setError("");

            try {
                const data = await fetchUserData(username, pageNumber);
                setUsers((prev) => [...prev, ...data.users]);

            } catch (error) {
                setError(error, "Looks like we cant find the user");
            } finally {
                setLoading(false)
            }
        };

        const handleChange = (e) => {
            setForm({ ...form, [e.target.value]: e.target.value })
        };
        
        const loadMore = () => {
            const nextPage = page + 1;
            setPage(nextPage);
            fetchUsers(nextPage);
        };

        return (
            <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
                <h1 className="text-2xl font-bold mb-6">GitHub Advanced Search</h1>

                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-lg bg-white p-6 rounded shadow space-y-4"
                >
                    <input
                        type="text"
                        name="username"
                        placeholder="GitHub Username"
                        value={form.username}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />

                    <input
                        type="text"
                        name="location"
                        placeholder="Location (e.g. Lagos)"
                        value={form.location}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />

                    <input
                        type="number"
                        name="minRepos"
                        placeholder="Minimum Repositories"
                        value={form.minRepos}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />

                    <button
                        onClick={loadMore}
                        className="bg-gray-800 text-white px-6 py-2 rounded"
                    >
                        Load More
                    </button>
                </form>

                {/* States */}
                {loading && <p className="mt-6">Loading...</p>}
                {error && <p className="mt-6 text-red-500">{error}</p>}

                {/* Results */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-full max-w-4xl">
                    {users.map((user) => (
                        <div
                            key={user.id}
                            className="bg-white p-4 rounded shadow flex items-center gap-4"
                        >
                            <img
                                src={user.avatar_url}
                                alt={user.login}
                                className="w-16 h-16 rounded-full"
                            />
                            <div>
                                <h2 className="font-semibold">{user.login}</h2>
                                <a
                                    href={user.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600"
                                >
                                    View Profile
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Search;
