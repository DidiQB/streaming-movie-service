import { useState, useEffect } from 'react';
import Billboard from './Billboard';

interface Movie {
  title: string;
  description: string;
  trailer: string;
}

interface Props {
  setMovieData: React.Dispatch<React.SetStateAction<Movie>>;
}

const FetchBillboard = ({ setMovieData }: Props) => {
  const getMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    };

    fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
      .then(response => response.json())
      .then(response => {
        const movies = response;
        console.log(movies)
        setMovieData(movies[Math.floor(Math.random() * movies.length)]);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {/* <Billboard movieData={movieData} /> */}
    </div>
  );
}

export default FetchBillboard;









// import {useState, useEffect} from 'react';
// import Billboard from './Billboard';

// interface Movie {
//     title: string;
//     description: string;
//     trailer: string;
//   }  

// const FetchBillboard = () => {
//   const [movie, setMovie] = useState<Movie>({ title: '', description: '', trailer: '' });

//   const getMovies = () => {
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': '',
//         'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
//       }
//     };

//     fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
//       .then(response => response.json())
//       .then(response => {
//         const movie = response;
//         console.log(movie)
//         setMovie(movie[Math.floor(Math.random() * movie.length)]);
//       })
//       .catch(err => console.error(err));
//   }

//   return (
//     <div>
//       {/* <button onClick={getMovies}>Fetch movies</button>
//       <h1>{movie.title}</h1>
//       <p>{movie.description}</p>
//       <iframe src={movie.trailer + "?autoplay=1&mute=1"} allow='autoplay'></iframe>
//       <iframe src={movie.trailer} autoPlay controls></iframe> */}
//     <Billboard movieData = {movie} />

//     </div>
//   );
// }

// export default FetchBillboard;