// import { useState } from 'react';
// import React from 'react';
// import './App.css';
// import Fetch from './components/Fetch';
// import Navbar from './components/Navbar';
// import Billboard from './components/Billboard';


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       {/* <Fetch /> */}
//       <Navbar />
//       <Billboard />
//     </div>
//   )
// }

// export default App;

import { useState } from 'react';
import React from 'react';
import './App.css';
// import FetchBillboard from './functions/FetchBillboard';
import Navbar from './components/Navbar';
import Billboard from './components/Billboard';
import MovieList from './components/MovieList';
import FetchBillboard from './components/FetchBillboard';
import FetchMyList from './components/FetchMyList';
import Fetch from './components/Fetch';

interface Movie {
  title: string;
  description: string;
  trailer: string;
}

interface MovieDB {
  title: string;
  description: string;
  thumbnail: string;
  genre: string;
}

function App() {
  const [count, setCount] = useState(0);
  const [movieData, setMovieData] = useState<Movie>({ title: '', description: '', trailer: '' });
  const [movie, setMovie] = useState<MovieDB>({ title: '', description: '', thumbnail: '', genre: '' });

  return (
    <div className="App">
      <Navbar />
      <FetchBillboard setMovieData={setMovieData} />
      <Billboard movieData={movieData} />
      <div className="pb-40">
        <FetchMyList />
        {/* <MovieList movie={movie}/> */}
        {/* <MovieList movieData={movieData}/> */}
      </div>
      {/* <Fetch /> */}
      </div>
  );
}

export default App;
