import { useState } from 'react';
import React from 'react';
import './App.css';
// import FetchBillboard from './functions/FetchBillboard';
import Navbar from './components/Navbar';
import Billboard from './components/Billboard';
import FetchBillboard from './components/FetchBillboard';
import FetchMyList from './components/FetchMyList';
import Fetch from './components/Fetch';
import FetchAllMovies from './components/FetchAllMovies';
import { Movie } from './types/types';

function App() {
  const [movieData, setMovieData] = useState<Movie>();
  const [movie, setMovie] = useState<Movie>();

  return (
    <div className="App">
      <Navbar />
      <FetchBillboard setMovieData={setMovieData} />
      <Billboard movieData={movieData} />
      <div className="pb-40">
        <FetchMyList />
        <FetchAllMovies />
      </div>
      {/* <Fetch /> */}
      </div>
  );
}

export default App;
