import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddRecipeForm() {
	const [title, setTitle] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [instructions, setInstructions] = useState("");
	const [errors, setErrors] = useState({});

	// Validation function
	const validate = () => {
		const validationErrors = {};

		if (!title.trim()) {
			validationErrors.title = "Recipe title is required.";
		}

		if (!ingredients.trim()) {
			validationErrors.ingredients = "Ingredients are required.";
		} else {
			const ingredientArray = ingredients
				.split("\n")
				.filter((item) => item.trim() !== "");
			if (ingredientArray.length < 2) {
				validationErrors.ingredients = "Please enter at least two ingredients.";
			}
		}

		if (!instructions.trim()) {
			validationErrors.instructions = "Preparation steps are required.";
		}

		return validationErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const validationErrors = validate();

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
		} else {
			alert("Recipe submitted successfully!");
			// Clear form
			setTitle("");
			setIngredients("");
			setInstructions("");
			setErrors({});
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10 md:py-20">
			<div className="w-full max-w-md md:max-w-2xl bg-white rounded-2xl shadow-lg p-6 md:p-8">
				<h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
					Add New Recipe
				</h1>

				<form
					onSubmit={handleSubmit}
					className="space-y-6"
				>
					{/* Recipe Title */}
					<div>
						<label className="block text-gray-700 font-medium mb-2">
							Recipe Title
						</label>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 ${
								errors.title
									? "border-red-500 focus:ring-red-300"
									: "border-gray-300 focus:ring-indigo-300"
							}`}
							placeholder="Enter recipe title"
						/>
						{errors.title && (
							<p className="text-red-500 text-sm mt-1">{errors.title}</p>
						)}
					</div>

					{/* Ingredients */}
					<div>
						<label className="block text-gray-700 font-medium mb-2">
							Ingredients (one per line)
						</label>
						<textarea
							value={ingredients}
							onChange={(e) => setIngredients(e.target.value)}
							rows="5"
							className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 ${
								errors.ingredients
									? "border-red-500 focus:ring-red-300"
									: "border-gray-300 focus:ring-indigo-300"
							}`}
							placeholder="Enter each ingredient on a new line"
						/>
						{errors.ingredients && (
							<p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
						)}
					</div>

					{/* Instructions */}
					<div>
						<label className="block text-gray-700 font-medium mb-2">
							Preparation Steps (one per line)
						</label>
						<textarea
							value={instructions}
							onChange={(e) => setInstructions(e.target.value)}
							rows="6"
							className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 ${
								errors.instructions
									? "border-red-500 focus:ring-red-300"
									: "border-gray-300 focus:ring-indigo-300"
							}`}
							placeholder="Enter each step on a new line"
						/>
						{errors.instructions && (
							<p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
						)}
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
					>
						Submit Recipe
					</button>
				</form>
			</div>

			{/* Back Link below the form */}
			<Link
				to="/"
				className="text-indigo-600 font-medium hover:underline mt-4 md:mt-6"
			>
				← Back to Home
			</Link>
		</div>
	);
}

export default AddRecipeForm;
