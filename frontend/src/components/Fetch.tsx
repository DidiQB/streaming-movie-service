import {useState, useEffect} from 'react';

const Fetch = () => {
    const [movie, setMovie] = useState ([]);
    const [savedMovie, setSavedMovie] = useState([]); 

    const getMovie = () => {

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
              'X-RapidAPI-Key': '',
              'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
            }
          };
          
          
          fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
          .then(response => response.json())
          .then(response => {
            console.log(response[1])
            setMovie(response[1])
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

    return (
        <div>
          <button onClick={handleSave}>Handle Save</button>
            <button onClick={getMovie}>Fetch movie</button>
            <button onClick={getSavedMovies}>Get Saved movies</button>
        </div>
      );
}
 
export default Fetch;