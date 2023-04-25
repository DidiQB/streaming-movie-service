import './App.css';
import { BrowserRouter, Link, Routes, Route, useNavigate } from "react-router-dom";
import Genres from './pages/Genres';
import Home from './pages/Home';
import MyList from './pages/MyList';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/my-list" element={<MyList />}></Route>
          <Route path="/browse" element={<Genres data={[]} />}></Route>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
