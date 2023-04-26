import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import FavoriteButton from "./FavButton";
import { Movie } from "@/types/types";

type Props = {
  data: Movie;
  setMovies: React.Dispatch<React.SetStateAction<Movie>>;
}



const MovieCard = ({ data, setMovies }: Props) => {
  return (
    <div className="col-span group relative h-[12vw] bg-zinc-900">
      <img
        src={data.image}
        alt="Movie_Image"
        className="
        duration
        h-[12vw]
        w-full
        cursor-pointer
        rounded-md
        object-cover
        shadow-xl
        transition
        delay-300
        group-hover:opacity-90
        sm:group-hover:opacity-0
      "
      />
      <div
        className="
        invisible
        absolute
        top-0
        z-10
        w-full
        scale-0
        opacity-0
        transition
        delay-300
        duration-200
        group-hover:-translate-y-[6vw]
        group-hover:translate-x-[2vw]
        group-hover:scale-110
        group-hover:opacity-100
        sm:visible
      "
      >
        <img
          src={data.image}
          alt="Movie_Image"
          className="
          duration
          h-[12vw]
          w-full
          cursor-pointer
          rounded-t-md
          object-cover
          shadow-xl
          transition
        "
        />
        <div
          className="
          absolute
          z-10
          w-full
          rounded-b-md
          bg-zinc-800
          p-2
          shadow-md
          transition
          lg:p-4
          "
        >
          <div className="flex flex-row items-center gap-3">
            <div
              onClick={() => {}}
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white transition hover:bg-neutral-300 lg:h-10 lg:w-10"
            >
              <PlayIcon className="w-4 text-black lg:w-6" />
            </div>
            <FavoriteButton movie={data} setMovies={setMovies}/>
            {/* <FavoriteButton imdbid={data._id} /> */}
            <p className="mt-4 font-semibold text-green-400">
              Release <span className="text-white">{data.year}</span>
            </p>
          </div>
          <div className="mt-4 flex flex-row items-center gap-2 text-[10px] text-white lg:text-sm font-semibold">
          <p>{data.title}</p>
          </div>
          <div className="mt-4 flex flex-row items-center gap-2 text-[8px] text-white lg:text-sm">
            <p>{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
