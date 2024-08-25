import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import CreateRecipeForm from './components/CreateRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';

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

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
          <Route path="/create" element={<CreateRecipeForm />} />
          <Route path="/delete/:id" element={<DeleteRecipeButton />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;