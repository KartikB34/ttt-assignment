import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

  const [data, setData] = useState("mello")

  const handleClick = async () =>{

    // console.log(data)
    const text = await axios("https://www.terriblytinytales.com/test.txt")
    // console.log(text.data)
    setData(text.data)
    
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>

      <button 
        onClick={handleClick} 
        className='border-2 border-green-800 text-green-800 font-semibold rounded-full px-12 py-2 inline-block hover:bg-green-800 hover:text-white hover:cursor-pointer'
      >
        Submit
      </button>

      <div>
        {data}
      </div>

    </div>
  )
}

export default App
