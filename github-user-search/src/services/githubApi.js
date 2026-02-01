const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchGithubUser = async (username) => {
	const res = await fetch(`https://api.github.com/users/${username}`, {
		headers: {
			Authorization: `Bearer ${GITHUB_API_KEY}`,
		},
	});

	return res.json();
};