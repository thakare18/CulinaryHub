import React, { useContext } from 'react'
import { recipesContext } from '../context/RecipesContext.jsx'

const Recipes = () => {
  const { data } = useContext(recipesContext)

  return (
    <div>
      {data.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default Recipes
