import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Movie } from "@/types/types";

// interface Props {
//   setMovies: React.Dispatch<React.SetStateAction<Movie>>;
// }

const FetchMyList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const getSavedMovies = async () => {
    try {
      const response = await fetch("http://127.0.0.1:3001/movies", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const movies = await response.json();
      console.log("Fetched movies:", movies);
      setMovies([...movies]);
    } catch (error) {
      throw new Error("Something went wrong when fetching movies");
    }
  };

  useEffect(() => {
    getSavedMovies();
  }, []);

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
    <div>
    <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">My list</p>
    <div className="grid grid-cols-4 gap-2">
      {movies.map((movie) => (
          <MovieCard key={movie.imdbid} data={movie} setMovies={setMovies}/>
        // <div key={movie.title}>
        //   <img src={movie.image} alt="" />
        //   <p>{movie.title}</p>
        //   <p>{movie.description}</p>
        //   <p>{movie.genre}</p>
        // </div>
      ))}
          </div>
    </div>
    </div>
  );
};

export default FetchMyList;
