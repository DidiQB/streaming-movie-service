import { useState, useEffect } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import FetchBillboard from "./FetchBillboard";
import { Movie } from '@/types/types';
import PlayButton from './PlayButton';


interface Props {
  oneMovie?: Movie;
}

const Billboard = ({ oneMovie }: Props) => {
  if (!oneMovie) { // Check if movieData is undefined
    return null; // If it is, return null or any other default content you want
  }

  return (
    <div className="relative h-[56.25vw]">
      <iframe src={oneMovie.trailer + "?autoplay=1&mute=1&loop=1"} allow='autoplay' className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"></iframe>

      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
        {oneMovie.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
        {oneMovie.description}
        </p>
        <PlayButton movieId={oneMovie?.imdbid}></PlayButton>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button
            className="
            bg-white
            text-white
              bg-opacity-30 
              rounded-md 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto 
              text-xs lg:text-lg 
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition
            "
            >

              <InformationCircleIcon className="w-4 md:w-7 mr-1" />
              More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default Billboard;
