import React, { createContext, useState } from 'react'
import { useContext } from 'react'
export const recipecontext = createContext(null)

const RecipeContext = (props) => {

  const [data, setData] = useState(() => {
    const localData = localStorage.getItem("recipes");
    return localData ? JSON.parse(localData) : [];
  });

  const [favourite, setFavourite] = useState(() => {
    const localFav = localStorage.getItem("favourite");
    return localFav ? JSON.parse(localFav) : [];
  });

  return (

    <recipecontext.Provider value={{ data, setData, favourite, setFavourite }}>
      {props.children}
    </recipecontext.Provider>
  )
}

export default RecipeContext