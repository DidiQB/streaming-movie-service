import Navbar from "@/components/Navbar";
import FetchBillboard from "@/components/FetchBillboard";
import Billboard from "@/components/Billboard";
import FetchMyList from "@/components/FetchMyList";
import FetchAllMovies from "@/components/FetchAllMovies";
import React from "react";
import { useState } from "react";
import { Movie } from "@/types/types";
import Footer from "@/components/Footer";

const Home = () => {
  const [oneMovie] = useState<Movie>();

  return (
    <div>
      <div className="App">
        <Navbar />
        <FetchBillboard />
        <Billboard oneMovie={oneMovie} />
        <div className="pb-40">
          <FetchMyList />
          <FetchAllMovies />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
