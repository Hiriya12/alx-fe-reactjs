
import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
















    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/create">Create Recipe</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //     <FavoritesList />
    //     <RecommendationsList />
        /* <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
          <Route path="/create" element={<CreateRecipeForm />} />
          <Route path="/delete/:id" element={<DeleteRecipeButton />} />
          <Route path='/add/:id' element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router> */

