import { useState, useEffect } from 'react';
import Billboard from './Billboard';
import { Movie } from '@/types/types';


interface Props {}

interface RequestOptions {
  method: string;
  headers: {
  'X-RapidAPI-Key': any;
  'X-RapidAPI-Host': any;
  }
}

const FetchBillboard = (props: Props) => {
  const [movieData, setMovieData] = useState<Movie>();

  const API_KEY = import.meta.env.VITE_API_KEY
  const HOST_KEY = import.meta.env.VITE_HOST_KEY

  const getMovies = () => {
    const options: RequestOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': HOST_KEY
      }
    };

    fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
      .then(response => response.json())
      .then(response => {
        const movies = response;
        // console.log(movies)
        setMovieData(movies[Math.floor(Math.random() * movies.length)]);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Billboard movieData={movieData} />
    </div>
  );
}

export default FetchBillboard;


// import { useState, useEffect } from 'react';
// import Billboard from './Billboard';
// import { Movie } from '@/types/types';


// interface Props {
//   setMovieData: React.Dispatch<React.SetStateAction<Movie>>;
// }

// interface RequestOptions {
//   method: string;
//   headers: {
//   'X-RapidAPI-Key': any;
//   'X-RapidAPI-Host': any;
//   }
// }

// const FetchBillboard = ({ setMovieData }: Props) => {

//   const API_KEY = import.meta.env.VITE_API_KEY
//   const HOST_KEY = import.meta.env.VITE_HOST_KEY

//   const getMovies = () => {
//     const options: RequestOptions = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': API_KEY,
//         'X-RapidAPI-Host': HOST_KEY
//       }
//     };

//     fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
//       .then(response => response.json())
//       .then(response => {
//         const movies = response;
//         // console.log(movies)
//         setMovieData(movies[Math.floor(Math.random() * movies.length)]);
//       })
//       .catch(err => console.error(err));
//   }

//   useEffect(() => {
//     getMovies();
//   }, []);

//   return (
//     <div>
//       {/* <Billboard movieData={movieData} /> */}
//     </div>
//   );
// }

// export default FetchBillboard;
