import axios from 'axios'
import React, { useState } from 'react'

import { Route, Routes, useNavigate} from "react-router-dom"
import Graph from './Components/Graph'

const App = () => {

  const [data, setData] = useState("")
  const [map, setMap] = useState()
  const navigate = useNavigate()
  
  const handleClick = async () =>{
    const text = await axios("https://www.terriblytinytales.com/test.txt")
    setData(text.data)
    // console.log(text.data)

    let words = text.data.toLowerCase().split(/[.,?()\s]+/);
    let wordMap = {};

    for (let i = 0; i < words.length; i++) {
        let currentWordCount = wordMap[words[i]];
        let count = currentWordCount ? currentWordCount : 0;
        wordMap[words[i]] = count + 1;
    }
    // console.log(wordMap)

    let sortable = [];
    for (var word in wordMap) {
        sortable.push({x:word, y:wordMap[word]});
    }

    sortable.sort((a, b) => parseFloat(b.y) - parseFloat(a.y))
    sortable = sortable.slice(0,20)
    // console.log(sortable)

    setMap(sortable)

    navigate("/graph")
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>

      
      <button 
        onClick={handleClick} 
        className='border-2 border-green-800 text-green-800 font-semibold rounded-full px-12 py-2 inline-block hover:bg-green-800 hover:text-white hover:cursor-pointer'
        >
        Submit
      </button>

      <Routes>
        <Route path="/graph" element={<Graph maps={map} />} />
        <Route path="/" element={<div></div>} />
      </Routes>

    </div>
  )
}

export default App
