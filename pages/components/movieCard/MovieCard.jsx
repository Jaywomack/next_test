import styles from './MovieCard.module.scss';
import { useRouter } from 'next/router';
import Image from 'next/image';
const MovieCard = (props) => {
  const { movie } = props;
  const router = useRouter();
  const handleClick = () => {
    router.push(`/movie/${movie.id}`);
  };

  return (
    <div className={styles.card}>
      <Image
        width={300}
        height={450}
        className={styles.cardImgTop}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{movie.title}</h3>
        <p>Rating: {movie.vote_average}</p>
        <p>{movie.overview.substring(0, 100)}...</p>

        <button className={styles.button} onClick={handleClick}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
