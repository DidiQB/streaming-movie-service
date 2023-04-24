// import React from "react";
// import { useState } from "react";
// import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline';

// interface FavoriteButtonProps {
//     _id: string
//   }

//   const FavoriteButton: React.FC<FavoriteButtonProps> = ({ _id }) => {
//     const [movie, setMovie] = useState ([]);
//     const [savedMovie, setSavedMovie] = useState([]); 

//     const addMovie = async () => {
//         setSavedMovie(movie);
//         console.log(movie);
        
//         try {
//             const response = await fetch("http://127.0.0.1:3001/movie", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(movie),
//             });
        
//             if (!response.ok) {
//                 throw new Error("Failed to save movie");
//             }
        
//         } catch (error) {
//             throw new Error("Something went wrong when posting to /movie");
//         }
  
//     }  
  



//     const deleteMovies = async () => {
//         try {
//             const response = await fetch("http://127.0.0.1:3001/movie/64412db049e8c31f000ad1d1", {
//                 method: "DELETE",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             });
    
//             if (!response.ok) {
//                 throw new Error("Failed to delete movie");
//             }
//             const movies = await response.json();
//             console.log("Deleted movies:", movies);
//             setMovie(movies);
//         } catch (error) {
//             throw new Error("Something went wrong when deleting movies");
//         }
//       }
    
//     //   const handleButtonClick = () => {
//     //     if ( /* ICON === PLUS */) {
//     //       deleteMovies();
//     //     } else {
//     //       addMovie();
//     //     }
//     //   };

//     // // const Icon = isFavorite ? CheckIcon : PlusIcon;

//     return (
//         <div onClick={() => {}} className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
//           <PlusIcon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
//         </div>
//       )
// }
 
// export default FavoriteButton;