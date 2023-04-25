import './App.css';
import { BrowserRouter, Link, Routes, Route, useNavigate } from "react-router-dom";
import Genres from './pages/Genres';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/browse" element={<Genres />}></Route>
          <Route path="/" element={<Home />}></Route>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
