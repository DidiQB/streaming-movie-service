import { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";
import { Movie } from "../types/types"

export interface MovieContextInterface {
  movies: Movie[],
  setMovies: Dispatch<SetStateAction<Movie[]>>
}

const defaultState = {
  movies: [],
  setMovies: (movies: Movie[]) => {}
} as MovieContextInterface

export const MovieContext = createContext(defaultState)

type MoviesProvideProps = {
  children: ReactNode
}

export default function MoviesProvider({children} : MoviesProvideProps) 
{
  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <MovieContext.Provider value={{movies, setMovies}}>
    {children}
    </MovieContext.Provider>
  )
}


