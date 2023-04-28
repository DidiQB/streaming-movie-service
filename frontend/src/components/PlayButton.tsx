import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate(`/watch/${movieId}`)}
        className="
        flex 
        w-auto 
        flex-row items-center 
        rounded-md bg-white
        px-2 
        py-1 text-xs 
        font-semibold
        transition
        hover:bg-neutral-300
        md:px-4
        md:py-2
        lg:text-lg
        "
      >
        <PlayIcon className="mr-1 w-4 text-black md:w-7" />
        Play
      </button>
    </div>
  );
};

export default PlayButton;
