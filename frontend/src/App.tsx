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
import FavoriteMovieListContextProvider from "./context/FavoriteMovieListContext";
import Navbar from "./components/Navbar";
import Watch from "./pages/Watch";

function App() {
  return (
    <MoviesProvider>
      <FavoriteMovieListContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/my-list" element={<MyList />}></Route>
            <Route path="/browse" element={<Genres />}></Route>
            <Route path="/search" element={<FetchSearchbar />}></Route>
            <Route path="/watch/:movieId" element={<Watch />}></Route>
          </Routes>
        </BrowserRouter>
      </FavoriteMovieListContextProvider>
    </MoviesProvider>
  );
}

export default App;
