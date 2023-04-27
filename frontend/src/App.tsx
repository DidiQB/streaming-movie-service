import "./App.css";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Genres from "./pages/Genres";
import Home from "./pages/Home";
import MyList from "./pages/MyList";
import FetchSearchbar from "./pages/FetchSearchbar";
import MoviesProvider from "./context/Context";



function App() {
  return (
    <MoviesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/my-list" element={<MyList />}></Route>
        <Route path="/browse" element={<Genres />}></Route>
        <Route path="/search" element={<FetchSearchbar />}></Route>
      </Routes>
    </BrowserRouter>
    </MoviesProvider>
  );
}

export default App;
