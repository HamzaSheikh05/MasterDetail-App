import React, { useState } from "react";

const RecipeDetails  = ({ recipe }) => {

    const [recipeDetails, setRecipeDetails] = useState(recipe);

    if (!recipeDetails) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {recipeDetails && (
                <>
                <ul>
                    <li>Recipe Name: {recipeDetails.name}</li>
                    <li>Recipe: {recipeDetails.recipe}</li>
                </ul>
                </>
            )}
        </div>

    );
};

export default RecipeDetails;