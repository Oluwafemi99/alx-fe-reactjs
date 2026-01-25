import useRecipeStore from "./recipeStore";

function RecipeDetails({ recipeId }) {
	const recipe = useRecipeStore((state) =>
		state.recipes.find((recipe) => recipe.id === recipeId),
	);

	if (!recipe) {
		return <p>recipe not found!</p>;
	}

	return (
		<div>
			<h3>{recipe.title}</h3>
			<p>{recipe.description}</p>
		</div>
	);
}

export default RecipeDetails;
