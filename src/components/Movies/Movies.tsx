import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import MoviesInterface from './MoviesInterface';
import Search from '../SearchField/Search';
import styles from '../../style/CommonStyle.module.css';

const API_KEY = process.env.REACT_APP_API;
const API_MOVIES_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + API_KEY;

const Movies: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const API_SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY + '&query=' + query;

  useEffect(() => {
    fetch(API_MOVIES_URL)
      .then(async (data) => await data.json())
      .then(data => {
        setMovies(data.results);
      }
      )
  }, []);

  const searchMovies = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch(API_SEARCH_URL);
      const data = await res.json();
      setMovies(data.results);
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
        <div className={styles.grid}>
          {topTenMovies?.map((movie) => <MovieCard key={movie?.id} {...movie}/>)}
        </div>
        <div>
          {
            !movies?.length && <h1>Movies could not be found!</h1>
          }
        </div>
      </div>
    </div>
  );
}

export default Movies;
