import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

const RecipeDetail = () => {
	// Get the dynamic ID from URL
	const { id } = useParams();

	// State to store selected recipe
	const [recipe, setRecipe] = useState(null);

	useEffect(() => {
		// Convert id from string to number
		const selectedRecipe = recipesData.find((item) => item.id === parseInt(id));

		setRecipe(selectedRecipe);
	}, [id]);

	// If recipe not found
	if (!recipe) {
		return <div className="text-center mt-20 text-xl">Recipe not found.</div>;
	}

	return (
		<div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8 lg:px-16">
			{/* Back Button */}
			<Link
				to="/"
				className="text-indigo-600 font-medium hover:underline"
			>
				← Back to Home
			</Link>

			{/* Recipe Image */}
			<div className="mt-6">
				<img
					src={recipe.image}
					alt={recipe.title}
					className="w-full max-h-[400px] object-cover rounded-2xl shadow-lg"
				/>
			</div>

			{/* Recipe Title */}
			<h1 className="text-4xl font-bold text-gray-800 mt-8">{recipe.title}</h1>

			<p className="text-gray-600 mt-4">{recipe.summary}</p>

			{/* Ingredients & Instructions Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
				{/* Ingredients Section */}
				<div className="bg-white p-6 rounded-2xl shadow-md">
					<h2 className="text-2xl font-semibold mb-4 text-gray-800">
						Ingredients
					</h2>

					<ul className="list-disc list-inside space-y-2 text-gray-700">
						{recipe.ingredients?.map((ingredient, index) => (
							<li key={index}>{ingredient}</li>
						))}
					</ul>
				</div>

				{/* Instructions Section */}
				<div className="bg-white p-6 rounded-2xl shadow-md">
					<h2 className="text-2xl font-semibold mb-4 text-gray-800">
						Cooking Instructions
					</h2>

					<ol className="list-decimal list-inside space-y-3 text-gray-700">
						{recipe.instructions?.map((step, index) => (
							<li key={index}>{step}</li>
						))}
					</ol>
				</div>
			</div>
		</div>
	);
};

export default RecipeDetail;
