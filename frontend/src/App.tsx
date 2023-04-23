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
import FetchBillboard from './functions/FetchBillboard';
import Navbar from './components/Navbar';
import Billboard from './components/Billboard';
import MovieList from './components/MovieList';

interface Movie {
  title: string;
  description: string;
  trailer: string;
  
}

function App() {
  const [count, setCount] = useState(0);
  const [movieData, setMovieData] = useState<Movie>({ title: '', description: '', trailer: '' });

  return (
    <div className="App">
      {/* <Fetch /> */}
      <Navbar />
      <FetchBillboard setMovieData={setMovieData} />
      <Billboard movieData={movieData} />
      <div className="pb-40">
        <MovieList movieData={movieData}/>
        <MovieList movieData={movieData}/>
      </div>
      </div>
  );
}

export default App;
