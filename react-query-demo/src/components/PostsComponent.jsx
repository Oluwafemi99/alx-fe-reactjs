import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");

	if (!response.ok) {
		throw new Error("Failed to fetch posts");
	}

	return response.json();
};

function PostsComponent() {
	const { data, error, isLoading, isError, isFetching, refetch } = useQuery({
		queryKey: ["posts"], // Unique key for caching
		queryFn: fetchPosts, // Fetching function
		staleTime: 1000 * 60 * 5, // Data is fresh for 5 minutes
		cacheTime: 1000 * 60 * 10, // Keep unused data in cache for 10 minutes
		refetchOnWindowFocus: true, // Automatically refetch when window gains focus
		keepPreviousData: true, // Keep old data when refetching to avoid empty UI
	});

	if (isLoading) return <h2>Loading posts...</h2>;
	if (isError) return <h2>Error: {error.message}</h2>;

	return (
		<div>
			<h1>Posts</h1>

			<button onClick={() => refetch()}>Refetch Posts</button>

			{isFetching && <p>Updating...</p>}

			<ul>
				{data.slice(0, 10).map((post) => (
					<li key={post.id}>
						<h3>{post.title}</h3>
						<p>{post.body}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default PostsComponent;
