import {useState, useEffect} from 'react';

const Fetch = () => {
    const [movie, setMovie] = useState ("") 

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
              'X-RapidAPI-Key': 'e821ea0b2bmsh1ef1acb423ad9aap187f9ajsne5e65b612fa3',
              'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
            }
          };
          
          fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));
          
    }

    return (
        <div>
            <button onChange={getMovie}>Fetch movie</button>
        </div>
      );
}
 
export default Fetch;