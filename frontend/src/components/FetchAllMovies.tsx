import { useEffect, useContext } from "react";
import MovieCard from "./MovieCard";
import { MovieContext } from "@/context/Context";

interface RequestOptions {
  method: string;
  headers: {
    "X-RapidAPI-Key": any;
    "X-RapidAPI-Host": any;
  };
}

const FetchAllMovies = () => {
  const { movies, setMovies } = useContext(MovieContext);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const HOST_KEY = import.meta.env.VITE_HOST_KEY;

  const options: RequestOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": HOST_KEY,
    },
  };

  useEffect(() => {
    fetch(
      'https://imdb-top-100-movies.p.rapidapi.com/' /*`http://localhost:3001/search`*/,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const movies = response;
        console.log("movies in FetchAllMovies", movies);
        setMovies(movies);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="mt-4 space-y-8 px-4 md:px-12">
      <div>
        <p className="text-md mb-5 mt-10 font-semibold text-white md:text-xl lg:text-3xl">
          Trending List
        </p>
        <div className="grid grid-cols-4 gap-2">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbid} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FetchAllMovies;
