import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fetch from './components/Fetch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Fetch />
    </div>
  )
}

export default App
