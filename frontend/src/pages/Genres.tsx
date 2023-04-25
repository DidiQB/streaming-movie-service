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

// ---- started editing here

const Genres = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);


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
        setFilteredMovies(movies);
      })
      .catch(err => console.error(err));
  }, []);

  const handleSelectGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(e.target.value);
  };

  useEffect(() => {
    // if (selectedGenre === '') {
    //   setFilteredMovies(movies);
    // } else {
    //   const filtered = movies.filter(movie => movie.genre === selectedGenre);
    //   setFilteredMovies(filtered);
    // }

    selectedGenre === '' ? setFilteredMovies(movies) : setFilteredMovies(movies.filter(movie => movie.genre.includes(selectedGenre)));

  }, [filteredMovies, selectedGenre]);

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">Browse by Genres</p>
        <div className="flex items-center gap-2 mb-4">
          <label htmlFor="genres" className="text-white font-semibold">Select a genre:</label>
          <select
            name="genres"
            id="genres"
            value={selectedGenre}
            onChange={handleSelectGenre}
            className="px-2 py-1 rounded-md bg-zinc-600 text-white"
          >
            <option value="">All</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Action">Action</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
          <p className="text-white">{selectedGenre}</p>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.imdbid} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
// }

export default Genres;



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