import { useState, useEffect } from 'react';

interface Movie {
  title: string;
  description: string;
  trailer: string;
}

interface Props {
  setMovieData: React.Dispatch<React.SetStateAction<Movie>>;
}

const FetchBillboard = ({ setMovieData }: Props) => {
  const getMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    };

    fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
      .then(response => response.json())
      .then(response => {
        const movies = response;
        console.log(movies)
        setMovieData(movies[Math.floor(Math.random() * movies.length)]);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getMovies();
  }, []);
}

  export default FetchBillboard;