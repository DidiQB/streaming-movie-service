import React from "react";
import { isEmpty } from "lodash";

interface Movie {
    title: string;
    description: string;
    trailer: string;
    // genre: string;
}

interface Props {
    movieData: Movie;
}

const MovieList = ({ movieData }: Props) => {

    

    return ( 
        <div>
            <h1>{movieData.title}</h1>
            <p>{movieData.description}</p>
            {/* <p>{movieData.genre}</p> */}
        </div>
     );
}
 
export default MovieList;