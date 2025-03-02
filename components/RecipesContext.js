import React, { createContext, useContext, useState } from "react";

const RecipesContext = createContext();

export function useRecipes() {
  return useContext(RecipesContext);
}

export const RecipesProvider = ({ children }) => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  const saveRecipe = (recipe) => {
    setSavedRecipes((prevRecipes) => [...prevRecipes, recipe]);
  };

  return (
    <RecipesContext.Provider value={{ savedRecipes, saveRecipe }}>
      {children}
    </RecipesContext.Provider>
  );
};
