import { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({}); // State for error messages

  // Function to validate form inputs
  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Recipe title is required.';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required.';
    if (!instructions) newErrors.instructions = 'Preparation steps are required.';

    const ingredientsList = ingredients.split(',').map(item => item.trim());
    if (ingredientsList.length < 2) {
      newErrors.ingredients = 'Please provide at least two ingredients.';
    }

    return newErrors; // Return any validation errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});  // Clear previous errors

    const validationErrors = validate(); // Validate form inputs
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if validation fails
      return;
    }

    const newRecipe = {
      title,
      ingredients: ingredients.split(',').map(item => item.trim()),
      instructions,
    };

    console.log('New Recipe Submitted:', newRecipe); // Replace this with API call as needed

    // Reset form fields after submission
    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        {errors.title && <div className="text-red-500 mb-2">{errors.title}</div>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter recipe title"
          />
        </div>

        {errors.ingredients && <div className="text-red-500 mb-2">{errors.ingredients}</div>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Ingredients (comma-separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter ingredients"
            rows="3"
          />
        </div>

        {errors.instructions && <div className="text-red-500 mb-2">{errors.instructions}</div>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Preparation Steps</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter preparation steps"
            rows="5"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;