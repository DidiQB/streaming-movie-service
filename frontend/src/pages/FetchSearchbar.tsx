import { useState } from "react";
import { useEffect } from "react";
import { Movie } from "@/types/types";
import MovieCard from "../components/MovieCard";
import Navbar from "@/components/Navbar";

interface RequestOptions {
  method: string;
  headers: {
    "X-RapidAPI-Key": any;
    "X-RapidAPI-Host": any;
  };
}

const FetchSearchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

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
    const fetchMovies = async () => {
      const response = await fetch(
        // `https://imdb-top-100-movies.p.rapidapi.com/movies?q=${searchTerm}`
        `http://localhost:3001/search?title=${searchTerm}`,
        options
      );
      const data = await response.json();
      console.log("data in Search", data);
      setSearchResults(data);
    };

    fetchMovies();
  }, [searchTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    console.log(setSearchTerm(event.target.value));
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("searchterm in Fetchsearchbar", searchResults);
    searchResults;
  };

  return (
    <div>
      <Navbar />
      <div className="mt-4 space-y-8 px-4 md:px-12">
        <div className="pt-20"></div>
        <form onSubmit={handleSearchSubmit}>
          <input
            className="py-2 pl-4"
            placeholder="Search for anything..."
            type="text"
            name="searchInput"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button
            className="rounded-r-lg bg-amber-400 px-8 py-2 text-white  hover:bg-amber-500"
            type="submit"
          >
            Click Me
          </button>
        </form>
        <div className="grid grid-cols-4 gap-2">
          {searchResults.map((movie) => (
            <MovieCard key={movie.imdbid} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FetchSearchbar;
