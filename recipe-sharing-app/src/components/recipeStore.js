import { create } from "zustand";

const useRecipeStore = create((set) => ({
	recipes: [],
	searchTerm: "",
	filteredRecipes: [],

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
}));

export default useRecipeStore;
