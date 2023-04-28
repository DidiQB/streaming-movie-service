import { useContext, useEffect, useState } from "react";
import { Movie } from "@/types/types";
import { FavoriteMovieListContext } from "@/context/FavoriteMovieListContext";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import CheckIcon from "@heroicons/react/24/outline/CheckIcon";

type SavedMovie = Movie & {
  imdbid: string;
};

type MoviesList = Array<Movie>;

type Props = {
  movie: Movie;
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  movies: Movie[];
};

function FavoriteButton({ movie, movies }: Props) {
  const [savedMovie, setSavedMovie] = useState<SavedMovie | null>(null);
  const { emitFavoriteListUpdate } = useContext(FavoriteMovieListContext);

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
      console.log("response delete", response);
      if (!response.ok) {
        throw new Error("Failed to delete movie");
      }

      console.log("Deleted movie:", savedMovie);
      setSavedMovie(null);
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
      console.log("existing movie", existingMovie);

      if (existingMovie) {
        console.log("Movie already exists:", existingMovie);
        setSavedMovie(existingMovie);
      }

      if (!existingMovie) {
        await handleSave();
      } else {
        await handleDelete();
      }
      emitFavoriteListUpdate();
    } catch (error) {
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
    <div
      onClick={handleClick}
      className="group/item flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-white transition hover:border-neutral-300 lg:h-10 lg:w-10"
    >
      <Icon className="w-4 text-white group-hover/item:text-neutral-300 lg:w-6" />
      {/* <button onClick={handleClick}>
        {savedMovie ? "Remove" : "Add"} Movie
      </button> */}
    </div>
  );
}

export default FavoriteButton;
