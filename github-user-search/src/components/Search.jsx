import React from "react";
import { useState } from "react";
import { fetchGithubUser } from "../services/githubApi";
import fetchUserData from "../services/githubService";

function Search() {
	const [username, setUsername] = useState("");
	const [userData, setUserdata] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);
		setError("");
		setUserdata(null);

		try {
			const data = await fetchUserData(username);
			setUserdata(data);

		} catch (error) {
			setError(error, "Looks like we cant find the user");
        } finally {
            setLoading(false)
        }
	};

	const handleChange = (e) => {
		setUsername(e.target.value);
	};
	return (
		<div>
			<h2>GitHub User</h2>
			<form
				action="submit"
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					value={username}
					placeholder="Enter Username"
					onChange={handleChange}
				></input>
				<button type="submit">Search</button>
			</form>

			{loading && <p>Loading...</p>}
			{error && <p>Error</p>}
			{userData && (
				<div>
					<img
						src={userData.avatar_url}
						alt={userData.login}
					/>
					<h3>Name: {userData.name}</h3>
					<a
						href={userData.html_url}
						target="_blank"
						rel="noopener noreferrer"
					>
						Visit GitHub Profile
					</a>
				</div>
			)}
		</div>
	);
}

export default Search;
