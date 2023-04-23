import { useState, useEffect } from "react";

interface MovieDB {
  title: string;
  description: string;
  image: string;
  genre: string;
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
    <div>
      {movies.map((movie) => (
        <div key={movie.title}>
          <p>{movie.title}</p>
          <p>{movie.description}</p>
          <img src={movie.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default FetchMyList;







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
