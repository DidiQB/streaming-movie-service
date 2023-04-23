import React from "react";

interface MovieDB {  
    title: string;
    description: string;
    image: string;
    genre: string;
    imdbid: string;
  }

  interface Props {
    data: MovieDB;
  }

const MovieCard = ({data}: Props ) => {
    return ( 
        <div>
            <p className="text-green-400">{data.title}</p>
        </div>
     );
}
 
export default MovieCard;