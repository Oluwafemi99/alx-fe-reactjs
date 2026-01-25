import React from "react";
import useRecipeStore from "../stores/userecipeStore";

const RecommendationsList = () => {
	// Call the store's getRecommendations function to retrieve recommended recipes
	// Typically, this function looks at favorites or other criteria and returns a subset of recipes
	const recommendations = useRecipeStore((state) => state.getRecommendations());

	// If there are no recommendations, show a fallback message
	if (!recommendations || recommendations.length === 0) {
		return <p>No recommendations available.</p>;
	}

	return (
		<div>
			<h2>Recommended Recipes</h2>
			{/* Loop through the recommended recipes and display them */}
			{recommendations.map((recipe) => (
				<div key={recipe.id}>
					<h3>{recipe.title}</h3>
					<p>{recipe.description}</p>
				</div>
			))}
		</div>
	);
};

export default RecommendationsList;
