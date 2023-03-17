import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './Counter/Counter'

function App() {
 

  return (
    <div className="App">
      <Counter initialCount={0}/>
    </div>
  )
}

export default App
