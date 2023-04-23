import { useState, useEffect } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
// import PlayButton from '@/components/PlayButton';

interface Movie {
  title: string;
  description: string;
  trailer: string;
}

interface Props {
  movieData: Movie;
}

const Billboard = ({ movieData }: Props) => {
  // return (
  //   <div>
  //     {/* <iframe src={movieData.trailer + "?autoplay=1&mute=1"} allow='autoplay'></iframe> */}
  //     <h1>{movieData.title}</h1>
  //     <p>{movieData.description}</p>
  //   </div>
  // );


  return (
    <div className="relative h-[56.25vw]">
      {/* {<iframe src={movieData.trailer + "?autoplay=1&mute=1"} allow='autoplay' autoplay"className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"></iframe>} */}
      <iframe src={movieData.trailer + "?autoplay=1&mute=1"} allow='autoplay' sandbox='allow-scripts allow-same-origin' className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"></iframe>


      {/* <video poster={data?.thumbnailUrl} className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500" autoPlay muted loop src={data?.videoUrl}></video> */}
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
        {movieData.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
        {movieData.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          {/* <PlayButton movieId={data?.id} /> */}
          <button
            // onClick={handleOpenModal}
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














// import React, { useCallback } from 'react';
// import { InformationCircleIcon } from '@heroicons/react/24/outline';

import FetchBillboard from "./FetchBillboard";

// // import PlayButton from '@/components/PlayButton';
// // import useBillboard from '@/hooks/useBillboard';
// // import useInfoModalStore from '@/hooks/useInfoModalStore';

// // const Billboard: React.FC = () => {
// //   const { openModal } = useInfoModalStore();
// //   const { data } = useBillboard();

// //   const handleOpenModal = useCallback(() => {
// //     openModal(data?.id);
// //   }, [openModal, data?.id]);



  // return (
  //   <div className="relative h-[56.25vw]">
  //     {/* <video poster={data?.thumbnailUrl} className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500" autoPlay muted loop src={data?.videoUrl}></video> */}
  //     <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
  //       <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
  //         {/* {data?.title} */}
  //       </p>
  //       <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
  //         {/* {data?.description} */}
  //       </p>
  //       <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
  //         {/* <PlayButton movieId={data?.id} /> */}
  //         <button
  //           // onClick={handleOpenModal}
  //           className="
  //           bg-white
  //           text-white
  //             bg-opacity-30 
  //             rounded-md 
  //             py-1 md:py-2 
  //             px-2 md:px-4
  //             w-auto 
  //             text-xs lg:text-lg 
  //             font-semibold
  //             flex
  //             flex-row
  //             items-center
  //             hover:bg-opacity-20
  //             transition
  //           "
  //           >
  //             <InformationCircleIcon className="w-4 md:w-7 mr-1" />
  //             More Info
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // )
// }
// // export default Billboard;