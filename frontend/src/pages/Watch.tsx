// import { MovieContext } from '@/context/Context';
// import React, { useContext } from 'react';
// import { Movie } from '@/types/types';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

// function Watch() {
//     const history = useHistory();
//     const { movieId } = useParams();
//     // const {movies, setMovies} = useContext(MovieContext)

//     console.log("mmovieid param", movieId)

//     return (
//         <div>
//             {/* <p>{movies.imdbId}</p> */}
//         </div>
//     );
// }

// export default Watch;

import React, { useState, useEffect, useContext } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate, useParams } from "react-router-dom";
import { MovieContext } from "@/context/Context";
import { Movie } from "@/types/types";

interface RequestOptions {
  method: string;
  headers: {
    "X-RapidAPI-Key": any;
    "X-RapidAPI-Host": any;
  };
}

const Watch = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const { movies, setMovies } = useContext(MovieContext);

  console.log("movieId", movieId)
  console.log("movies in Watch", movies)

  const playMovie = movies.find((movie: Movie) => movieId === movie.imdbid);
 
  if (!playMovie) {
    // Handle case where movie is not found
    return <div>Movie not found</div>;
  }

  useEffect(() => {
  setMovies([playMovie]);
}, [movieId]);

  console.log(playMovie);

//   const [data, setData] = useState(null);

//   const API_KEY = import.meta.env.VITE_API_KEY;
//   const HOST_KEY = import.meta.env.VITE_HOST_KEY;

//   const options: RequestOptions = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": API_KEY,
//       "X-RapidAPI-Host": HOST_KEY,
//     },
//   };

//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         const response = await fetch(
//           `api/movies/${movieId}`
//         );
//         const data = await response.json();
//         setData(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchMovie();
//   }, [movieId]);

//   console.log(data)

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
      <iframe src={playMovie.trailer + "?autoplay=1&mute=1&loop=1"} allow='autoplay' className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"></iframe>
      {/* <video
        className="h-full w-full"
        autoPlay
        controls
        src={movies?.trailer}
      ></video> */}
    </div>
  );
};

export default Watch;


