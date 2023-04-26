import { useState } from "react";
import { useEffect } from "react";
import { Movie } from "@/types/types";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
        `http://localhost:3001/movie?title=${searchTerm}`,
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
    event.preventDefault(); // prevent the default form submission behavior
    const searchTerm = event.currentTarget.searchInput.value;
    console.log("searchterm in Fetchsearchbar", searchResults);
    searchResults;
    // setSearchTerm(searchTerm);
  };

  const navigate = useNavigate();

  return (    
    <div className="mt-4 space-y-8 px-4 md:px-12">
 {/* <Navbar /> */}
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          name="searchInput"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button type="submit">Click me</button>
      </form>
      <div className="grid grid-cols-4 gap-2">
        {searchResults
          .map((movie) => (
            <MovieCard key={movie.imdbid} data={movie} />
          ))}
      </div>
    </div>
  );
};

export default FetchSearchbar;
