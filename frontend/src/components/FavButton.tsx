import { useState } from "react";
import { Movie } from "@/types/types";

type SavedMovie = Movie & {
  imdbid: string;
};

type MoviesList = Array<Movie>;

type Props = {
  movie: Movie;
};

function FavoriteButton({ movie }: Props) {
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

      if (!response.ok) {
        throw new Error("Failed to fetch movie. Just one");
      }

      const existingMovie = await response.json();
      console.log("existing movie", existingMovie)

      if (existingMovie) {
        console.log("Movie already exists:", existingMovie);
        setSavedMovie(existingMovie);
      } else if (!existingMovie) {
        await handleSave();
      } else {
        await handleDelete();
      }
      
    } catch (error) {
      throw new Error("Something went wrong when fetching movie. Just one");
    }

    // if (savedMovie) {
    //   await handleDelete();
    // } else {
    //   await handleSave();

  

    // }
  };

  return (
    <div>
      <button onClick={handleClick}>
        {savedMovie ? "Remove" : "Add"} Movie
      </button>
    </div>
  );
}

export default FavoriteButton;