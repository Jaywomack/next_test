import { useContext } from 'react';
import { MoviesContext } from '@/context/MoviesContext';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import Image from 'next/image';
import Head from 'next/head';
export default function MovieDetail() {
  const router = useRouter();
  let { id } = router.query;

  const { movies } = useContext(MoviesContext);

  const movie = movies.find((movie) => movie.id == id);

  const navigateBack = () => {
    router.back();
  };
  return (
    <div className={styles.detailPage}>
      <Head>
        <title>{movie.title}</title>
        <meta name='description' content={movie.overview} />
      </Head>
      <div className={styles.heroImgOverlay}>
        <Image
          priority
          className={styles.heroImg}
          width={650}
          height={450}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{movie.title}</h1>
          <p className={styles.rating}>Rating: {movie.vote_average}</p>

          <p className={styles.description}>{movie.overview}</p>
          <button onClick={navigateBack} className={styles.button}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
