import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations, recipes]); // Run the recommendations generation when the component mounts or the recipes change

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available at the moment.</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
