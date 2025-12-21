 import React, { createContext } from 'react'
 import { useState } from 'react';

 export const recipesContext = createContext(null);

const RecipesContext = (props) => {
    const [data, setfirst] = useState([]);
    
  return (
    <div>
      <recipesContext.Provider value={{data, setfirst}} >
        {props.children}
      </recipesContext.Provider>
    </div>
  )
}

export default RecipesContext
