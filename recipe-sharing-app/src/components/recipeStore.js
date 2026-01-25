import { create } from "zustand";

const useRecipeStore = create((set) => ({
	recipes: [],

	// Add a new recipe
	addRecipe: (newRecipe) =>
		set((state) => ({ recipes: [...state.recipes, newRecipe] })),

	// Replace all recipes at once
	setRecipes: (recipes) => set({ recipes }),

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
                recipes: state.recipes.map((recipe) => recipe.id === id ? { ...recipe, ...updatedField } : recipe),
            }));
        } catch (error) {
            console.error("Error updating recipe:", error);
        }
    }
}));

export default useRecipeStore;
