import React from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';

const App = () => {
  return (
    <div>
      <header>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
      </header>
      <main>
        <RecipeList />
      </main>
    </div>
  );
};

export default App;