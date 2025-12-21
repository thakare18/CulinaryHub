import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-center text-sm gap-x-10">
        
        <NavLink className={(e) => e.isActive && "text-red-300"} to="/">Home</NavLink>
        <NavLink className={(e) => e.isActive && "text-red-300"} to="/recipes">Recipes</NavLink>


    </div>
  )
}

export default Navbar
