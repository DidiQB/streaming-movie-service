import { useState } from 'react';
import React from 'react';
import './App.css';
import Fetch from './components/Fetch';
import Navbar from './components/Navbar';
import Billboard from './components/Billboard';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Fetch /> */}
      <Navbar />
      <Billboard />
    </div>
  )
}

export default App;
