import React from "react";
import { useState } from "react";
import useRecipeStore from "./recipeStore";

function AddRecipeForm() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const addRecipe = useRecipeStore((state) => state.addRecipe);

	const handleSubmit = (e) => {
		e.preventDefault();
        if (!title.trim() || !description.trim()) {
            alert('form cant be empty');
            return;
        }
		addRecipe({ id: Date.now(), title, description });
		setTitle(" ");
		setDescription(" ");
	};
	return (
		<div>
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
					placeholder="description"
				/>

				<button type="submit"> Add Recipe</button>
			</form>
		</div>
	);
}

export default AddRecipeForm;
