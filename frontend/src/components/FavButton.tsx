import { useContext, useEffect, useState } from "react";
import { Movie } from "@/types/types";
import { MovieContext } from "@/context/Context";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import CheckIcon from "@heroicons/react/24/outline/CheckIcon";


type SavedMovie = Movie & {
  imdbid: string;
};

type MoviesList = Array<Movie>;

type Props = {
  movie: Movie;
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  movies: Movie[]
};

function FavoriteButton({ movie, setMovies, movies }: Props) {
  const [savedMovie, setSavedMovie] = useState<SavedMovie | null>(null);
  const [moviesList, setMoviesList] = useState<MoviesList>([]);

const handleSave = async () => {
    try {
      const response = await fetch("http://127.0.0.1:3001/movie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      });

      if (!response.ok) {
        throw new Error("Failed to save movie");
      }

      const savedMovie = await response.json();
      setSavedMovie(savedMovie);
      setMoviesList([...moviesList, savedMovie]);
      // setMovies([...movies, savedMovie]);
      console.log("Saved movie:", savedMovie);
    } catch (error) {
      throw new Error("Something went wrong when posting to /movie");
    }
  };


  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:3001/movie/${savedMovie!.imdbid}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
        console.log("response delete", response)
      if (!response.ok) {
        throw new Error("Failed to delete movie");
      }

      console.log("Deleted movie:", savedMovie);
      setSavedMovie(null);
      setMoviesList(moviesList.filter((m) => m.imdbid !== savedMovie!.imdbid));
    } catch (error) {
      throw new Error("Something went wrong when deleting movie");
    }
  };

  const handleClick = async () => {
    const id = movie.imdbid;
    console.log("id in Fav Button", id);

    try {
      const response = await fetch(`http://127.0.0.1:3001/movie/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch movie. Just one");
      }

      const existingMovie = await response.json();
      console.log("existing movie", existingMovie)

      if (existingMovie) {
        console.log("Movie already exists:", existingMovie);
        setSavedMovie(existingMovie);}

       if (!existingMovie) {
        await handleSave();
      } else {
        await handleDelete();
      } 
    }
      
     catch (error) {
      throw new Error("Something went wrong when fetching movie. Just one");
    }

    // if (savedMovie) {
    //   await handleDelete();
    // } else {
    //   await handleSave();

  

    // }

  };
  const Icon = savedMovie ? CheckIcon : PlusIcon;
  
  return (
    <div onClick={handleClick} className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
      <Icon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
      {/* <button onClick={handleClick}>
        {savedMovie ? "Remove" : "Add"} Movie
      </button> */}
    </div>
  );
}

export default FavoriteButton;