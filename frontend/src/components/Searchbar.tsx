// import { Movie } from "@/types/types";
// import { Input } from "@chakra-ui/react";
// import { FC, useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";


// const Search: FC = () => {
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [searchParams, setSearchParams] = useSearchParams();

//   useEffect(() => {
//     const query = searchParams.get("q");
//     if (query) {
//       console.log("query param found: ", query);

//       handleSearch(query).then();
//     }
//   }, [searchParams]);

//   const handleSearch = async (searchTerm: string) => {
//     console.log(searchTerm);
//     setSearchParams();
//     const response = await fetch(
//       `https://imdb-top-100-movies.p.rapidapi.com/search/movies?query=${searchTerm}&client_id=${import.meta.env.VITE_API_KEY}`
      
//     );
//     console.log(`response: ${JSON.stringify(response, null, 2)}`);
//     if (response.ok) {
//       const { results } = await response.json();
//       setMovies(results);
//     } else {
//       console.error("Error fetching movies from IMDB API");
//     }
//   };

//   return (
//     <div>
//       {/* <div className="cursor-pointer text-gray-200 transition hover:text-gray-300">
//         <MagnifyingGlassIcon onClick={handleSearch} className="w-6" />
//       </div> */}
//       {/* <Input onClick={handleSearch} /> */}
//       {/* <input onClick={handleSearch}></input>
//       <CardGrid movies={movies} /> */}



//       {/* <form className="form" onSubmit={handleSearch}>
//       <label className="form__label" htmlFor="search">Search:</label>
//       <input className="form__input"
//         id="search"
//         type="text"
//         value={searchTerm}
//         // onChange={handleChange}
//         required
//       />
//         <button className="form__button" type="submit">Search</button>
//     </form> */}

//     </div>
//   );
// };

// export default Search;
