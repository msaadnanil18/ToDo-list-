import "./App.css"
import React, { useState , useCallback, useContext } from 'react'


import TodoInputShows from "./component/TodoInputShows"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <TodoInputShows/>
    </>
  )
}

export default App
