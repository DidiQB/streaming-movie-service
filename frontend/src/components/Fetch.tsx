import {useState, useEffect} from 'react';

const Fetch = () => {
    const [movie, setMovie] = useState ([]);
    const [savedMovie, setSavedMovie] = useState([]); 

    const getMovies = () => {

        // const apiKey = process.env.REACT_APP_API_KEY;
        // const hostKey = process.env.REACT_APP_HOST_KEY;

        interface RequestOptions {
            method: string;
            headers: {
              'X-RapidAPI-Key': string;
              'X-RapidAPI-Host': string;
            }
          }
          
          const options: RequestOptions = {
            method: 'GET',
            headers: {
            //   'X-RapidAPI-Key': 'e821ea0b2bmsh1ef1acb423ad9aap187f9ajsne5e65b612fa3',
              'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
            }
          };
          
          
          fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
          .then(response => response.json())
          .then(response => {
            console.log(response[5])
            setMovie(response[5])
          })
          .catch(err => console.error(err));
          
    }

    const handleSave = async () => {
      setSavedMovie(movie);
      console.log(movie);
      
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
      
          // handle response if needed
      } catch (error) {
          // handle error if needed
          throw new Error("Something went wrong when posting to /movie");
      }
  }  

  const getSavedMovies = async () => {
    try {
        const response = await fetch("http://127.0.0.1:3001/movies", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch movies");
        }
        const movies = await response.json();
        console.log("Fetched movies:", movies);
        setMovie(movies);
    } catch (error) {
        throw new Error("Something went wrong when fetching movies");
    }
  }

  const deleteMovies = async () => {
    try {
        const response = await fetch("http://127.0.0.1:3001/movie/644257f408f73f90fc879b89", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to delete movie");
        }
        const movies = await response.json();
        console.log("Deleted movies:", movies);
        setMovie(movies);
    } catch (error) {
        throw new Error("Something went wrong when deleting movies");
    }
  }

  const getoneMovie = async () => {
    try {
        const response = await fetch("http://127.0.0.1:3001/movie/64412db049e8c31f000ad1d1", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch movie. Just one");
        }
        const movies = await response.json();
        console.log("Fetched movie. Just one:", movies);
        setMovie(movies);
    } catch (error) {
        throw new Error("Something went wrong when fetching movie. Just one");
    }
  }

  const updateMovie = async () => {
    try {
        const response = await fetch("http://127.0.0.1:3001/movie/64425352cbe9a578d4f91b21", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to update movie");
        }
        const movies = await response.json();
        console.log("Updated movies:", movies);
        setMovie(movies);
    } catch (error) {
        throw new Error("Something went wrong when updating movies");
    }
  }

    return (
        <div>
          <button onClick={handleSave}>Handle Save</button>
            <button onClick={getMovies}>Fetch movies</button>
            <button onClick={getSavedMovies}>Get Saved movies</button>
            <button onClick={deleteMovies}>Delete movies</button>
            <button onClick={getoneMovie}>Get one movie</button>
            <button onClick={updateMovie}>Update movie</button>
        </div>
      );
}
 
export default Fetch;