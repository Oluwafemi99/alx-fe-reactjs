const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

// export const fetchGithubUser = async (username) => {
// 	const headers = GITHUB_API_KEY
// 		? { Authorization: `Bearer ${GITHUB_API_KEY}` }
// 		: {};

// 	const res = await fetch(`https://api.github.com/users/${username}`, {
// 		headers,
// 	});

// 	return res.json();
// };

export const fetchGithubUser = async (username) => {
	const res = await fetch(`https://api.github.com/users/${username}`);
	return res.json();
};
