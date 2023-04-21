import { useState } from 'react';
import React from 'react';
import './App.css';
import Fetch from './components/Fetch';
import Navbar from './components/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Fetch /> */}
      <Navbar />
    </div>
  )
}

export default App;
