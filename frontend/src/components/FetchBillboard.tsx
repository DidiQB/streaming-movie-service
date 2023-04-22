import {useState, useEffect} from 'react';

const FetchBillboard = () => {
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
              'X-RapidAPI-Key': '',
              'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
            }
          };
          
          
          fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
          .then(response => response.json())
          .then(response => {
            console.log(response)
            const movie = response;
            setMovie(movie);
          })
          .catch(err => console.error(err));

          const randomIndex = Math.floor(Math.random() * movie.length)
          console.log(movie[randomIndex])
          const randomMovie = (movie[randomIndex])
          setMovie(randomMovie.title)
          console.log("movie", setMovie)
          
    }

    return (
        <div>
            <button onClick={getMovies}>Fetch movies</button>
            <h1>{movie.title}</h1>
        </div>
      );
}

export default FetchBillboard;