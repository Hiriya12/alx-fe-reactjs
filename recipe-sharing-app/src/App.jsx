import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import CreateRecipeForm from './components/CreateRecipeForm'; // This handles recipe creation
import DeleteRecipeButton from './components/DeleteRecipeButton';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create Recipe</Link>
            </li>
          </ul>
        </nav>
        <FavoritesList />
        <RecommendationsList />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
          <Route path="/create" element={<CreateRecipeForm />} />
          <Route path="/delete/:id" element={<DeleteRecipeButton />} />
          <Route path='/add/:id' element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
