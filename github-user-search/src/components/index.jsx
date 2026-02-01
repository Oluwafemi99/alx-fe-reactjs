import { useEffect } from "react";
import { fetchGithubUser } from "../services/githubApi";

function NewFetch() {
	useEffect(() => {
		fetchGithubUser("octocat").then(console.log);
	}, []);

	console.log(import.meta.env);
	console.log(import.meta.env.VITE_APP_GITHUB_API_KEY);
}

export default NewFetch;
