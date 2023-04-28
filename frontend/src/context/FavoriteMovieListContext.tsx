import {
  createContext,
  useState,
  useRef,
  useCallback,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { Movie } from "../types/types";

type FavoriteMovieListEventHandler = () => void;

export interface FavoriteMovieListContextInterface {
  subscribeToFavoriteListUpdates: (
    callback: FavoriteMovieListEventHandler
  ) => void;
  emitFavoriteListUpdate: () => void;
}

export const FavoriteMovieListContext =
  createContext<FavoriteMovieListContextInterface>({
    subscribeToFavoriteListUpdates: (cb) => {
      /* no-op */
    },
    emitFavoriteListUpdate: () => {},
  });

type FavoriteMovieListContextProps = {
  children: ReactNode;
};

export default function FavoriteMovieListContextProvider({
  children,
}: FavoriteMovieListContextProps) {
  const favoriteListUpdateEvents = useRef<FavoriteMovieListEventHandler[]>([
    //
  ]);

  const emitFavoriteListUpdate = useCallback<
    FavoriteMovieListContextInterface["emitFavoriteListUpdate"]
  >(() => {
    favoriteListUpdateEvents.current.forEach((callback) => {
      callback();
    });
  }, [favoriteListUpdateEvents]);

  const subscribeToFavoriteListUpdates = useCallback<
    FavoriteMovieListContextInterface["subscribeToFavoriteListUpdates"]
  >(
    (callback) => {
      favoriteListUpdateEvents.current.push(callback);
    },
    [favoriteListUpdateEvents]
  );

  return (
    <FavoriteMovieListContext.Provider
      value={{
        subscribeToFavoriteListUpdates,
        emitFavoriteListUpdate,
      }}
    >
      {children}
    </FavoriteMovieListContext.Provider>
  );
}
