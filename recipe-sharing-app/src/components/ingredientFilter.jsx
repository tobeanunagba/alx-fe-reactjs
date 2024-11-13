import React from 'react';
import { useRecipeStore } from './recipeStore';

const IngredientFilter = () => {
  const setIngredientFilter = useRecipeStore(state => state.setIngredientFilter);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleIngredientSearch = (e) => {
    setIngredientFilter(e.target.value);
    filterRecipes(); // Re-run filtering after updating the ingredient filter
  };

  return (
    <input
      type="text"
      placeholder="Filter by ingredient..."
      onChange={handleIngredientSearch}
    />
  );
};

export default IngredientFilter;
