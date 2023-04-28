import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Genres from "./pages/Genres";
import Home from "./pages/Home";
import FetchSearchbar from "./pages/FetchSearchbar";
import MoviesProvider from "./context/Context";
import FavoriteMovieListContextProvider from "./context/FavoriteMovieListContext";
import Watch from "./pages/Watch";
import Footer from "./components/Footer";

function App() {
  return (
    <MoviesProvider>
      <FavoriteMovieListContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/browse" element={<Genres />}></Route>
            <Route path="/search" element={<FetchSearchbar />}></Route>
            <Route path="/watch/:movieId" element={<Watch />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </FavoriteMovieListContextProvider>
    </MoviesProvider>
  );
}

export default App;
