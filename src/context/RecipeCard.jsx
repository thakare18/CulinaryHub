import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
  const { id, image, title, chef, desc } = recipe

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="block w-56 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
    >
      <div className="relative h-40 overflow-hidden rounded-t-lg">
        <img
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-600"
          src={image}
          alt={`Recipe: ${title}`}
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 truncate">{title}</h2>
        <p className="text-sm text-orange-500 font-medium mb-2">{chef}</p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {desc.length > 100 ? desc.slice(0, 100) + '...' : desc}
          <span className="text-blue-600 ml-1 cursor-pointer hover:underline">more</span>
        </p>
      </div>
    </Link>
  )
}

export default RecipeCard
