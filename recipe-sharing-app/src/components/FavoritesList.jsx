// src/components/FavoritesList.jsx
import React from 'react';
import useRecipeStore from '../recipeStore';

const FavoritesList = () => {
  const { recipes, favorites } = useRecipeStore(state => ({
    recipes: state.recipes,
    favorites: state.favorites,
  }));

  const favoriteRecipes = favorites.map(id => 
    recipes.find(recipe => recipe.id === id)
  ).filter(Boolean); // Filter out any undefined values

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length > 0 ? (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No favorite recipes yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;