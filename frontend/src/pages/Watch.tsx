import React, { useState, useEffect, useContext } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate, useParams } from "react-router-dom";
import { MovieContext } from "@/context/Context";
import { Movie } from "@/types/types";

const Watch = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const { movies, setMovies } = useContext(MovieContext);

  console.log("movieId", movieId);
  console.log("movies in Watch", movies);

  const playMovie = movies.find((movie: Movie) => movieId === movie.imdbid);

  if (!playMovie) {
    // Handle case where movie is not found
    return <div>Movie not found</div>;
  }

  useEffect(() => {
    setMovies([playMovie]);
  }, [movieId]);

  console.log(playMovie);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed z-10 flex w-full flex-row items-center gap-8 bg-black bg-opacity-70 p-4">
        <ArrowLeftIcon
          onClick={() => navigate("/")}
          className="w-4 cursor-pointer text-white transition hover:opacity-80 md:w-10"
        />
        <p className="text-1xl font-bold text-white md:text-3xl">
          <span className="font-light">Watching:</span> {playMovie.title}
        </p>
      </nav>
      <iframe
        src={playMovie.trailer + "?autoplay=1&mute=1&loop=1"}
        allow="autoplay"
        className="h-[56.25vw] w-full object-cover brightness-[60%] transition duration-500"
      ></iframe>
    </div>
  );
};

export default Watch;
