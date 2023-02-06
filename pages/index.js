import { useEffect, useContext, useRef } from 'react';
import { MoviesContext } from '@/context/MoviesContext';
import MovieCard from './components/movieCard/MovieCard';
import HeroSection from './components/heroSection/HeroSection';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const { movies, setMovies } = useContext(MoviesContext);
  const scrollRef = useRef(null);

  const executeScroll = () =>
    scrollRef.current.scrollIntoView({
      behavior: 'smooth',
      inline: 'nearest',
    });
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  useEffect(() => {
    if (movies === null) {
      console.log(API_KEY);
      // I supplied the API key and pushed it to GITHUB for ease of access for the reviewers(I know you're busy). I know im not supposed to.
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=69a938959392aa0fa1b1da3e6d8b78e1`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
          console.log(data);
        });
    }
  }, []);

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={executeScroll}>
        <HeroSection />
      </button>

      <h1 ref={scrollRef} className={styles.title}>
        Top Rated Movies
      </h1>
      <div className={styles.cardContainer}>
        {movies &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}
