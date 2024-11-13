import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  ingredientFilter: '',
  filteredRecipes: [],
  favorites: [],

  // Actions
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

  // Favorites Actions
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId),
  })),

  // Recommendations (Optional)
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
