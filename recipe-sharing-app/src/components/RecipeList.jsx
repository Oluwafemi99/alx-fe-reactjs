import React from "react";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

function RecipeList() {
	const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
	const favorites = useRecipeStore((state) => state.favorites);
	const addFavorite = useRecipeStore((state) => state.addFavorite);
	const removeFavorite = useRecipeStore((state) => state.removeFavorite);

	if (!filteredRecipes || filteredRecipes.length === 0) {
		return (
			<p>
				No recipes found. Try adjusting your search.
			</p>
		);
	}

	return (
		<div>
			{filteredRecipes.map((recipe) => {
				const isFavorite = favorites.includes(recipe.id); // check if recipe is in favorites
				return (
					<div key={recipe.id}>
						<h3>
							<Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
						</h3>
                        <p>{recipe.description}</p>
                        
						{/* Toggle button: adds/removes recipe from favorites */}
						<button
							onClick={() =>
								isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)
							}
						>
							{isFavorite ? "Unfavorite" : "Favorite"}
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default RecipeList;
