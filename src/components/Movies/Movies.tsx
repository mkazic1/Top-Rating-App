import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import MoviesInterface from './MoviesInterface';
import styles from '../../style/CommonStyle.module.css';

const API_KEY = process.env.REACT_APP_API;
const API_MOVIES_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + API_KEY;

const Movies: React.FC = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_MOVIES_URL)
      .then(async (data) => await data.json())
      .then(data => {
        setMovies(data.results);
      }
      )
  }, []);

  const topTenMovies: MoviesInterface[] = movies.slice(0, 10);

  return (
    <div className={styles['grid-container']}>
      <div className={styles.grid}>
        {topTenMovies?.map((movie) => <MovieCard key={movie?.id} {...movie}/>)}
      </div>
    </div>
  );
}

export default Movies;
