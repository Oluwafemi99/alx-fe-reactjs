import axios from "axios";


// const BASE_URL = "https://api.github.com/users";

const fetchUserData = async ({ username, location, minRepos }, page = 1) => {

    let query = "";

	if (username) query += `${username}`;
	if (location) query += ` location:${location}`;
	if (minRepos) query += ` repos:>=${minRepos}`;

	try {
		const response = await axios.get(
			`https://api.github.com/search/users?q=${query}&page=${page}&per_page=5`,
		);
		return response.data;
	} catch {
		if (error.response && error.response.status === 404) {
			throw new Error("user not found");
		}
		throw new Error("Failed to fetch user data");
	}
};

export default fetchUserData;