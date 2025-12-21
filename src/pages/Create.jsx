import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { recipesContext } from '../context/RecipesContext.jsx'

const Create = () => {
  const { data, setdata } = useContext(recipesContext)
  const { register, handleSubmit, reset } = useForm()

  const SubmitHandler = (recipe) => {
    const newRecipe = {
      ...recipe,
      id: nanoid()
    }

    setdata([...data, newRecipe])
    reset()
  }

  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>

      {/* Image URL */}
      <input
        className="block border-b outline-0 p-2"
        {...register("image")}
        type="url"
        placeholder="Image URL"
      />
      <small className="text-red-400">This is how the error is shown</small>

      {/* Recipe Title */}
      <input
        className="block border-b outline-0 p-2"
        {...register("title")}
        type="text"
        placeholder="Recipe Title"
      />

      {/* Chef Name */}
      <input
        className="block border-b outline-0 p-2"
        {...register("chef")}
        type="text"
        placeholder="Chef Name"
      />

      {/* Description (pehle yahan title duplicate tha) */}
      <input
        className="block border-b outline-0 p-2"
        {...register("description")}
        type="text"
        placeholder="//Start from here"
      />

      {/* Ingredients */}
      <textarea
        className="block border-b outline-0 p-2"
        {...register("ingredients")}
        placeholder="//Write ingredients separated by commas"
      ></textarea>

      {/* Instructions */}
      <textarea
        className="block border-b outline-0 p-2"
        {...register("instructions")}
        placeholder="//Write instructions separated by commas"
      ></textarea>

      {/* Category */}
      <select
        className="block border-b outline-0 p-2 bg-gray-800"
        {...register("categories")}
      >
        <option value="cat-1">Select 1</option>
        <option value="cat-2">Select 2</option>
        <option value="cat-3">Select 3</option>
      </select>

      <button className="block mt-5 bg-gray-900 px-4 py-2 rounded">
        Save Recipe
      </button>

    </form>
  )
}

export default Create
