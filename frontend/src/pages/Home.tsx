import Navbar from "@/components/Navbar";
import FetchBillboard from "@/components/FetchBillboard";
import Billboard from "@/components/Billboard";
import FetchMyList from "@/components/FetchMyList";
import FetchAllMovies from "@/components/FetchAllMovies";
import React from "react";
import { useState } from "react";
import { Movie } from "@/types/types";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const [movieData, setMovieData] = useState<Movie>();
    const [movie, setMovie] = useState<Movie>();

    return (<div>
         <div className="App">
      <Navbar />
      <FetchBillboard />
      <Billboard movieData={movieData} />
      <div className="pb-40">
        <FetchMyList />
        <FetchAllMovies />
      </div>
      </div>
    </div>);
}
 
export default Home;