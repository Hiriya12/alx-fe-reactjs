// EditRecipeForm.js
import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { useHistory } from 'react-router-dom';

const EditRecipeForm = ({ recipe }) => {
  const [editedRecipe, setEditedRecipe] = useState({ ...recipe });
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(editedRecipe);
    history.push('/'); // Navigate back to the recipe list after saving changes
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={editedRecipe.title}
        onChange={handleChange}
      />
      <label>Description:</label>
      <textarea
        name="description"
        value={editedRecipe.description}
        onChange={handleChange}
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
