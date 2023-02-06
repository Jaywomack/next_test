import { createContext, useState } from 'react';

export const MoviesContext = createContext();

const MoviesContextProvider = (props) => {
  const [movies, setMovies] = useState(null);
  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {props.children}
    </MoviesContext.Provider>
  );
};
export default MoviesContextProvider;
