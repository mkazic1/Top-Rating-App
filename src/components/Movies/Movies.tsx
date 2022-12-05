import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import MoviesInterface from '../../interfaces/MoviesInterface';
import Search from '../SearchField/Search';
import styles from '../../style/CommonStyle.module.css';
import { API_MOVIES_URL, API_SEARCH_URL_MOVIES } from '../../constants/url';

const API_KEY = process.env.REACT_APP_API;
const MOVIES_URL = API_MOVIES_URL + API_KEY;

const Movies: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const SEARCH_URL = API_SEARCH_URL_MOVIES + API_KEY + '&query=' + query;

  useEffect(() => {
    fetch(MOVIES_URL)
      .then(async (data) => await data.json())
      .then(data => {
        setMovies(data.results);
        setIsLoaded(true);
      }
      )
  }, []);

  const searchMovies = async (e: any) => {
    setIsLoaded(false);
    e.preventDefault();
    try {
      const res = await fetch(SEARCH_URL);
      const data = await res.json();
      setMovies(data.results);
      setIsLoaded(true);
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  }

  const topTenMovies: MoviesInterface[] = movies.slice(0, 10);

  return (
    <div>
      <Search
        query={query}
        onChange={handleChange}
        onSubmit={searchMovies}/>
      <div className={styles['grid-container']}>
        {!isLoaded
          ? (<div>
            <h1>Loading...</h1>
          </div>)
          : (<>
            <div className={styles.grid}>
              {topTenMovies?.map((movie) => <MovieCard key={movie?.id} {...movie}/>)}
            </div>
            <div>
              {
                !movies?.length ? <h1>Movies could not be found!</h1> : null
              }
            </div>
          </>)
        }
      </div>
    </div>
  );
}

export default Movies;
