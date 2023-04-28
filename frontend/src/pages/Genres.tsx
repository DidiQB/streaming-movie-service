import { useState, useEffect, useContext } from "react";
// import AllMovieCard from "./AllMovieCard";
import { Movie } from "@/types/types";
import MovieCard from "@/components/MovieCard";
import { MovieContext } from "@/context/Context";
import Navbar from "@/components/Navbar";


// ---- started editing here

const Genres = () => {
  // const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  const {movies, setMovies} = useContext(MovieContext);

  
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
    setMovies(movies);
    setFilteredMovies(movies);

    selectedGenre === '' ? setFilteredMovies(movies) : setFilteredMovies(movies.filter(movie => movie.genre.includes(selectedGenre)));

  }, [movies, selectedGenre]);

  return (
    <div>
            <Navbar />
    <div className="px-4 md:px-12 mt-4 space-y-8">
            <div className="pt-20"></div>
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
          {/* <p className="text-white">{selectedGenre}</p> */}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.imdbid} data={movie} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
// }

export default Genres;

