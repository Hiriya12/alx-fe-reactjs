import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import RecipeList from './RecipeList'; // Assuming you have this component

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Recipe List</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/recipe/:id">
            <RecipeDetails />
          </Route>
          <Route path="/">
            <RecipeList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;