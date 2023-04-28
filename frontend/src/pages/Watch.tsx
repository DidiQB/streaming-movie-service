import { MovieContext } from '@/context/Context';
import React, { useContext } from 'react';

function Watch() {

    const {movies, setMovies} = useContext(MovieContext)
    console.log(movies);


    return (
        <div>
            <p className='text-white'> Hello</p>
        </div>
    );
}

export default Watch;