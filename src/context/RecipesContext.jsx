import React, { createContext, useState } from 'react';


export const recipesContext = createContext();

const RecipesContext = ({ children }) => {
  const [data, setdata] = useState([]);

  console.log("Context data:", data);

  return (
    <recipesContext.Provider value={{ data, setdata }}>
      {children}
    </recipesContext.Provider>
  );
};

export default RecipesContext;
