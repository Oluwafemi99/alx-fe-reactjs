import { useState } from "react";
import useRecipeStore from "./recipeStore";

function EditRecipeForm({ recipeId }) {
	const recipe = useRecipeStore((state) =>
		state.recipes.find((r) => r.id === recipeId),
	);
	const updateRecipe = useRecipeStore((state) => state.updateRecipe);
	const [title, setTitle] = useState(recipe?.title || "");
	const [description, setDescription] = useState(recipe?.description || "");

	if (!recipe) {
		alert("Recipe not found!");
		return;
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!title.trim() || !description.trim()) {
			alert("Fields cannot be empty");
			return;
		}
		updateRecipe(recipeId, { title, description });
		alert("Recipe updated successfully!");
	};

	return (
		<div>
			<h2>Edit Recipe</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="title"
				/>

				<textarea
					type="text"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder="Decription"
				/>

				<button type="submit">Save Changes</button>
			</form>
		</div>
	);
}

export default EditRecipeForm;
