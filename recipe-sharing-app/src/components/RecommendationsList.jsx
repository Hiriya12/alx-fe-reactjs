import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);

  useEffect(() => {
    useRecipeStore.getState().generateRecommendations();
  }, []);

  return (
    <div>
      <h2>Personalized Recommendations</h2>
      {recommendations.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => useRecipeStore.getState().addFavorite(recipe.id)}>
            Add to Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;