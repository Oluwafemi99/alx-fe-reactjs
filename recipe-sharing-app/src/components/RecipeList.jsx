import React from "react";
import useRecipeStore from "./recipeStore";
import {Link} from 'react-router-dom'

function RecipeList() {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
    if (!filteredRecipes || filteredRecipes.length === 0) {
			return (
				<p className="text-gray-500">
					No recipes found. Try adjusting your search.
				</p>
			);
		}


	return (
		<div>
			{filteredRecipes.map((recipe) => (
				<div key={recipe.id}>
					<h3>
						<Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
					</h3>
					<p>{recipe.description}</p>
				</div>
			))}
		</div>
	);
}

export default RecipeList;
