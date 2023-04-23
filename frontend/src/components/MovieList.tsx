import React from "react";
import { isEmpty } from "lodash";

// interface Movie {
//     title: string;
//     description: string;
//     trailer: string;
//     // genre: string;
// }

interface MovieDB {
    title: string;
    description: string;
    trailer: string;
    genre: string;
  }

interface Props {
    movie: MovieDB;
}

const MovieList = ({ movie }: Props) => {

    

    return ( 
        <div>
            {/* {/* <h1>{movieData.title}</h1> */}
            <p>{movie.description}</p>
            {/* <p>{movieData.genre}</p> */}
        </div>
     );
}
 
export default MovieList;