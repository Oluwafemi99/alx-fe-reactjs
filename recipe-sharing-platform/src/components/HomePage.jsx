import React, { useState, useEffect } from "react";
import recipesData from "../data.json";
import { Link } from "react-router-dom";

const HomePage = () => {
	const [recipes, setRecipes] = useState([]);

	// Load data when component mounts
	useEffect(() => {
		setRecipes(recipesData);
	}, []);

	return (
		// Full page container
		<div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8 lg:px-16">
			{/* Page Title */}
			<h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
				🍽️ Recipe Collection
			</h1>

			{/* Responsive Grid Layout */}
			<div
				className="
          grid 
          gap-8
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4
        "
			>
				{recipes.map((recipe) => (
					<Link to={`/recipe/${recipe.id}`} key={recipe.id}>
						<div
							className="
              bg-white 
              rounded-2xl 
              shadow-md 
              overflow-hidden
              transform 
              transition-all 
              duration-300
              hover:shadow-2xl 
              hover:scale-105
            "
						>
							{/* Recipe Image */}
							<img
								src={recipe.image}
								alt={recipe.title}
								className="w-full h-52 object-cover"
							/>

							{/* Card Content */}
							<div className="p-5">
								<h2 className="text-xl font-semibold text-gray-800 mb-2">
									{recipe.title}
								</h2>

								<p className="text-gray-600 text-sm leading-relaxed">
									{recipe.summary}
								</p>

								{/* Optional Button for better UI */}
								<button
									className="
                  mt-4 
                  w-full 
                  bg-indigo-500 
                  text-white 
                  py-2 
                  rounded-lg 
                  font-medium 
                  transition-colors 
                  duration-300
                  hover:bg-indigo-600
                "
								>
									View Recipe
								</button>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default HomePage;
