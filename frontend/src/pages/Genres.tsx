import { useState, useEffect } from "react";
// import AllMovieCard from "./AllMovieCard";
import { Movie } from "@/types/types";
import MovieCard from "@/components/MovieCard";


interface Props {
  setMovieData: React.Dispatch<React.SetStateAction<Movie>>;
}

interface RequestOptions {
  method: string;
  headers: {
    'X-RapidAPI-Key': any;
    'X-RapidAPI-Host': any;
  }
}

const FetchAllMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const API_KEY = import.meta.env.VITE_API_KEY
  const HOST_KEY = import.meta.env.VITE_HOST_KEY

  const options: RequestOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': HOST_KEY
    }
  };

  useEffect(() => {
    fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
      .then(response => response.json())
      .then(response => {
        const movies = response;
        console.log("movies in FetchAllMovies", movies)
        setMovies(movies);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">Browse by Genres</p>
        <div className="grid grid-cols-4 gap-2">
          {movies.map((movie) => (
            // <AllMovieCard key={movie.imdbid} data={movie} />
            <MovieCard key={movie.imdbid} data={movie} />


          ))}
        </div>
      </div>
    </div>
  );
};

export default FetchAllMovies;



// import MovieCard from "@/components/MovieCard";
// import { Movie } from "@/types/types";
// import { SetStateAction } from "react";

// type Props = {
//   data: Movie[];
// };

// const Genres = (data: Props) => {
//   // console.log("data in Genres", data)

//   const movies = Object.values(data.data);
//   console.log("array in Genres", movies);

//   return (
//     <div className="mt-4 space-y-8 px-4 md:px-12">
//       <div>
//         <p className="text-md mb-4 font-semibold text-white md:text-xl lg:text-2xl">
//           All movies by Genre
//         </p>

//         {/* <p className="text-white">{movies[0].title}</p> */}
//         {/* <div className="grid grid-cols-4 gap-2">
//               {movies.map((movie) => (
//                 // <AllMovieCard key={movie.imdbid} data={movie} />
//                 <MovieCard key={movie.imdbid} data={movie} />
    
    
//               ))}
//             </div> */}
//       </div>
//     </div>
//   );
// };

// export default Genres;