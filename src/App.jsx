import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './componets/Navbar'


const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-800 py-10 px-[10%] text-white">
      <Navbar/>
      <Mainroutes/>
      
    </div>
  )
}

export default App
