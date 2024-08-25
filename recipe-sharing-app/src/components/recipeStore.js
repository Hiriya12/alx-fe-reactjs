import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(import create from 'zustand';

        const useRecipeStore = create(set => ({
          recipes: [],
          favorites: [],
          addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
          removeFavorite: (recipeId) => set(state => ({
            favorites: state.favorites.filter(id => id !== recipeId)
          })),
          recommendations: [],
          generateRecommendations: () => set(state => {
            // Implement your recommendation logic here
            const recommended = state.recipes.filter(recipe =>
              state.favorites.includes(recipe.id) && Math.random() > 0.5
            );
            return { recommendations: recommended };
          }),
        }));state.searchTerm.toLowerCase())
    )
  })),
}));