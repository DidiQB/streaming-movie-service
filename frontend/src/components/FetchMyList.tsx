import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

interface MovieDB {  
  title: string;
  description: string;
  image: string;
  genre: string;
  imdbid: string;
  year: number;
}

interface Props {
  setMovie: React.Dispatch<React.SetStateAction<MovieDB>>;
}

const FetchMyList = () => {
  const [movies, setMovies] = useState<MovieDB[]>([]);

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
          <MovieCard key={movie.imdbid} data={movie} />
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


// return (
//     <div className="group bg-zinc-900 col-span relative h-[12vw]">
//       <img onClick={redirectToWatch} src={data.thumbnailUrl} alt="Movie" draggable={false} className="
//         cursor-pointer
//         object-cover
//         transition
//         duration
//         shadow-xl
//         rounded-md
//         group-hover:opacity-90
//         sm:group-hover:opacity-0
//         delay-300
//         w-full
//         h-[12vw]
//       " />
//       <div className="
//         opacity-0
//         absolute
//         top-0
//         transition
//         duration-200
//         z-10
//         invisible
//         sm:visible
//         delay-300
//         w-full
//         scale-0
//         group-hover:scale-110
//         group-hover:-translate-y-[6vw]
//         group-hover:translate-x-[2vw]
//         group-hover:opacity-100
//       ">
//         <img onClick={redirectToWatch} src={data.thumbnailUrl} alt="Movie" draggable={false} className="
//           cursor-pointer
//           object-cover
//           transition
//           duration
//           shadow-xl
//           rounded-t-md
//           w-full
//           h-[12vw]
//         " />
//         <div className="
//           z-10
//           bg-zinc-800
//           p-2
//           lg:p-4
//           absolute
//           w-full
//           transition
//           shadow-md
//           rounded-b-md
//           ">
//           <div className="flex flex-row items-center gap-3">
//             <div onClick={redirectToWatch} className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
//               <PlayIcon className="text-black w-4 lg:w-6" />
//             </div>
//             <FavoriteButton movieId={data.id} />
//             <div onClick={() => openModal(data?.id)} className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
//               <ChevronDownIcon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
//             </div>
//           </div>
//           <p className="text-green-400 font-semibold mt-4">
//             New <span className="text-white">2023</span>
//           </p>
//           <div className="flex flex-row mt-4 gap-2 items-center"> 
//             <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
//           </div>
//           <div className="flex flex-row items-center gap-2 mt-4 text-[8px] text-white lg:text-sm">
//             <p>{data.genre}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )


// ------------------------


// import { useState, useEffect } from "react";

// // interface Movie {
// //     title: string;
// //     description: string;
// //     trailer: string;
// //   }

// interface MovieDB {
//     title: string;
//     description: string;
//     thumbnail: string;
//     genre: string;
//   }
  
//   interface Props {
//     setMovie: React.Dispatch<React.SetStateAction<MovieDB>>;
//   }

// const FetchMyList = () => {
// //   const [movie, setMovie] = useState([]);
// //   const [savedMovie, setSavedMovie] = useState([]);
// const [movie, setMovie] = useState<MovieDB>({ title: '', description: '', thumbnail: '', genre: '' });


//   const getSavedMovies = async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:3001/movies", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch movies");
//       }
//       const movies = await response.json();
//       console.log("Fetched movies:", movies);
//       setMovie(movies);
//     } catch (error) {
//       throw new Error("Something went wrong when fetching movies");
//     }
//   };

//   return (
//     <div>
//       <button onClick={getSavedMovies}>Get Saved movies</button>
//       <p onLoad={getSavedMovies}>{movie.title}</p>
//       <p>{movie.description}</p>
//       <p>{movie.thumbnail}</p>

//     </div>
//   );
// };

// export default FetchMyList;


// ------------------------------------

// import { useState, useEffect } from "react";

// // interface Movie {
// //     title: string;
// //     description: string;
// //     trailer: string;
// //   }

// interface MovieDB {
//     title: string;
//     description: string;
//     trailer: string;
//     genre: string;
//   }
  
//   interface Props {
//     setMovie: React.Dispatch<React.SetStateAction<MovieDB>>;
//   }

// const FetchMyList = ({setMovie}: Props) => {
// //   const [movie, setMovie] = useState([]);
// //   const [savedMovie, setSavedMovie] = useState([]);

//   const getSavedMovies = async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:3001/movies", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch movies");
//       }
//       const movies = await response.json();
//       console.log("Fetched movies:", movies);
//       setMovie(movies);
//     } catch (error) {
//       throw new Error("Something went wrong when fetching movies");
//     }
//   };

//   return (
//     <div>
//       <button onClick={getSavedMovies}>Get Saved movies</button>
//       <p>{movie.description}</p>

//     </div>
//   );
// };

// export default FetchMyList;
