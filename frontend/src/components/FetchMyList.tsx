import { useState, useEffect, useContext } from "react";
import MovieCard from "./MovieCard";
import { Movie } from "@/types/types";
import { FavoriteMovieListContext } from "@/context/FavoriteMovieListContext";

// interface Props {
//   setMovies: React.Dispatch<React.SetStateAction<Movie>>;
// }

const FetchMyList = () => {
  const [favourites, setFavourites] = useState<Movie[]>([]);

  const { subscribeToFavoriteListUpdates } = useContext(
    FavoriteMovieListContext
  );

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
      setFavourites([...movies]);
    } catch (error) {
      throw new Error("Something went wrong when fetching movies");
    }
  };

  useEffect(() => {
    // Get the saved movies initially:
    getSavedMovies();

    //  Get the saved movies every time a fav button updates the list:
    subscribeToFavoriteListUpdates(() => {
      getSavedMovies();
    });
  }, []);

  return (
    <div className="mt-4 space-y-8 px-4 md:px-12">
      <div className="flex flex-row">
        <p className="text-md mb-5 mt-10 pr-4 font-semibold text-white md:text-xl lg:text-3xl">
          My list
        </p>
        <p className="text-md mb-5 mt-10 font-semibold text-white md:text-xl lg:text-3xl">
          {favourites.length}
        </p>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {favourites.map((movie) => (
          <MovieCard
            key={movie.imdbid}
            data={movie}
            setMovies={setFavourites}
            movies={favourites}
          />
        ))}
      </div>
    </div>
  );
};

export default FetchMyList;
