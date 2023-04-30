import { useState, useEffect, useContext } from "react";
import { Movie } from "@/types/types";
import MovieCard from "@/components/MovieCard";
import { MovieContext } from "@/context/Context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Genres = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  const { movies, setMovies } = useContext(MovieContext);

  const handleSelectGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(e.target.value);
  };

  useEffect(() => {
    setMovies(movies);
    setFilteredMovies(movies);

    selectedGenre === ""
      ? setFilteredMovies(movies)
      : setFilteredMovies(
          movies.filter((movie) => movie.genre.includes(selectedGenre))
        );
  }, [movies, selectedGenre]);

  return (
    <div>
      <Navbar />
      <div className="mt-4 space-y-8 px-4 md:px-12">
        <div className="pt-20"></div>
        <div>
          <p className="text-md mb-4 font-semibold text-white md:text-xl lg:text-2xl">
            Browse by Genres
          </p>
          <div className="mb-4 flex items-center gap-2">
            <label htmlFor="genres" className="font-semibold text-white">
              Select a genre:
            </label>
            <select
              name="genres"
              id="genres"
              value={selectedGenre}
              onChange={handleSelectGenre}
              className="rounded-md bg-zinc-600 px-2 py-1 text-white"
            >
              <option value="">All</option>
              <option value="Drama">Drama</option>
              <option value="Comedy">Comedy</option>
              <option value="Action">Action</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.imdbid} data={movie} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Genres;
