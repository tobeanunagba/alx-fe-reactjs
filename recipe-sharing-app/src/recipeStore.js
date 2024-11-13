import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  ingredientFilter: '',
  filteredRecipes: [],
  setSearchTerm: (term) => set({ searchTerm: term }),
  setIngredientFilter: (ingredient) => set({ ingredientFilter: ingredient }),
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) &&
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(state.ingredientFilter.toLowerCase())
      )
    )
  })),
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
