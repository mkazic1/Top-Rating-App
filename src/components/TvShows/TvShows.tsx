import React, { useEffect, useState } from 'react';
import TvShowCard from './TvShowCard';
import TvShowsInterface from './TvShowsInterface';
import Search from '../SearchField/Search';
import styles from '../../style/CommonStyle.module.css';

const API_KEY = process.env.REACT_APP_API;
const API_TV_URL = 'https://api.themoviedb.org/3/tv/top_rated?api_key=' + API_KEY;

const TvShows: React.FC = () => {
  const [tvShows, setTvShows] = useState([]);
  const [query, setQuery] = useState('');

  const API_SEARCH_URL = 'https://api.themoviedb.org/3/search/tv?api_key=' + API_KEY + '&query=' + query;

  useEffect(() => {
    fetch(API_TV_URL)
      .then(async (data) => await data.json())
      .then(data => setTvShows(data.results))
  }, []);

  const searchTvShow = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch(API_SEARCH_URL);
      const data = await res.json();
      setTvShows(data.results);
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  }

  const topTenTvShows: TvShowsInterface[] = tvShows.slice(0, 10);

  return (
    <div>
      <Search
        query={query}
        onChange={handleChange}
        onSubmit={searchTvShow}
      />
      <div className={styles['grid-container']}>
        <div className={styles.grid}>
          {topTenTvShows?.map((tvShow) => <TvShowCard key={tvShow?.id} {...tvShow}/>)}
        </div>
        <div>
          {
            !tvShows?.length && <h1>Tv shows could not be found!</h1>
          }
        </div>
      </div>
    </div>
  );
}

export default TvShows;
