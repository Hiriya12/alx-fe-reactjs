import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import { useRecipeStore } from './recipeStore';
const App = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
  <RecipeList />
          <AddRecipeForm />
        </Route>
        {recipes.map((recipe) => (
          <Route key={recipe.id} path={`/recipe/${recipe.id}`}>
            <RecipeDetails recipeId={recipe.id} />
          </Route>
        ))}
      </Switch>
    </Router>
  );
};


export default App ;