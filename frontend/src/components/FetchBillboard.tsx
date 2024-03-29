import { useState, useEffect } from "react";
import Billboard from "./Billboard";
import { Movie } from "@/types/types";

interface RequestOptions {
  method: string;
  headers: {
    "X-RapidAPI-Key": any;
    "X-RapidAPI-Host": any;
  };
}

const FetchBillboard = () => {
  const [oneMovie, setOneMovie] = useState<Movie>();

  const API_KEY = import.meta.env.VITE_API_KEY;
  const HOST_KEY = import.meta.env.VITE_HOST_KEY;

  const getMovies = () => {
    const options: RequestOptions = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": HOST_KEY,
      },
    };

    fetch("https://imdb-top-100-movies.p.rapidapi.com/", options)
      .then((response) => response.json())
      .then((response) => {
        const movies = response;
        setOneMovie(movies[Math.floor(Math.random() * movies.length)]);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Billboard oneMovie={oneMovie} />
    </div>
  );
};

export default FetchBillboard;
