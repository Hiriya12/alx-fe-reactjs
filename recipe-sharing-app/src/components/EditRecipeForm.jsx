import { useState } from "react";

import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe}) => {
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);
    const [ingredients, setIngredients] = useState(recipe.ingredients.join(','));
    const [instructions, setInstructions] = useState(recipe.instructions);

    const updateRecipe = useRecipeStore((state) => state.updateRecipe);

    const  handleSubmit = (e) = > {
        e.preventDefault();
        const updatedRecipe = {
            id: recipe.id,
            title,
            description,
            ingredients: ingredients.split (','),
            instructions,
        };
        updateRecipe(updatedRecipe);
    };
 return (
    <form on submit={handleSubmit}>
        <label>
            Title:
        <input 
        type="text" 
        value ={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        </label>
        < button type="Submit">Save</button>
    </form>

 );
};
export default EditRecipeFormComponent;




