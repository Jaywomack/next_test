import '../styles/reset.scss';
import MoviesContextProvider from '@/context/MoviesContext';

export default function App({ Component, pageProps }) {
  return (
    <MoviesContextProvider>
      <Component {...pageProps} />
    </MoviesContextProvider>
  );
}
