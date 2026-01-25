import { create } from "zustand";

const useRecipeStore = create((set) => ({
	recipes: [], // all recipes in the app
	searchTerm: "",
	filteredRecipes: [],
	favorites: [], // stores IDs of recipes marked as favorites
	recommendations: [], // stores recommended recipes
	// Add a new recipe
	addRecipe: (newRecipe) =>
		set((state) => ({ recipes: [...state.recipes, newRecipe] })),

	// Replace all recipes at once
	setRecipes: (recipes) => {
		set({ recipes });
		// also update filteredRecipes when recipes change
		const { searchTerm } = get();
		set({
			filteredRecipes: recipes.filter((recipe) =>
				recipe.title.toLowerCase().includes(searchTerm.toLowerCase()),
			),
		});
	},

	// Delete a recipe by id
	deleteRecipe: (id) => {
		try {
			set((state) => ({
				recipes: state.recipes.filter((recipe) => recipe.id !== id),
			}));
		} catch (error) {
			console.error("error cant delete message", error);
		}
	},

	updateRecipe: (id, updatedField) => {
		try {
			set((state) => ({
				recipes: state.recipes.map((recipe) =>
					recipe.id === id ? { ...recipe, ...updatedField } : recipe,
				),
			}));
		} catch (error) {
			console.error("Error updating recipe:", error);
		}
	},

	setSearchTerm: (term) => {
		set({ searchTerm: term });
		// trigger filtering immediately
		const { recipes } = get();
		set({
			filteredRecipes: recipes.filter((recipe) =>
				recipe.title.toLowerCase().includes(term.toLowerCase()),
			),
		});
	},

	// Toggle favorite: add/remove recipe ID from favorites
	addFavorite: (recipeId) =>
		set((state) => ({ favorites: [...state.favorites, recipeId] })),

	removeFavorite: (recipeId) =>
		set((state) => ({
			favorites: state.favorites.filter((id) => id !== recipeId),
		})),

	// Generate recommendations based on favorites
	generateRecommendations: () =>
		set((state) => {
			// Mock implementation based on favorites
			const recommended = state.recipes.filter(
				(recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5,
			);
			return { recommendations: recommended };
		}),
}));

export default useRecipeStore;
