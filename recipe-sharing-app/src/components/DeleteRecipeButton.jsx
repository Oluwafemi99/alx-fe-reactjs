import React from "react";
import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom";

function DeleteRecipeButton({ recipeId }) {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const navigate = useNavigate();

    
	const handleDelete = () => {
		if (window.confirm("Are you sure you want to delete this recipe?")) {
            deleteRecipe(recipeId);
            // optional: redirect to home after deletion
            navigate("/");

		}
	};
	return (
		<div>
			<button onClick={handleDelete}>Delete Recipe</button>
		</div>
	);
}

export default DeleteRecipeButton;
