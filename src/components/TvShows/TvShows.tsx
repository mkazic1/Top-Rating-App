import React, { useEffect, useState } from 'react';
import TvShowCard from './TvShowCard';
import TvShowsInterface from './TvShowsInterface';
import styles from '../CommonStyle.module.css';

const API_KEY = process.env.REACT_APP_API;
const API_TV_URL = 'https://api.themoviedb.org/3/tv/top_rated?api_key=' + API_KEY;

const TvShows: React.FC = () => {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    fetch(API_TV_URL)
      .then(async (data) => await data.json())
      .then(data => {
        setTvShows(data.results);
      }
      )
  }, []);

  const topTenTvShows: TvShowsInterface[] = tvShows.slice(0, 10);

  return (
    <div className={styles['grid-container']}>
      <div className={styles.grid}>
        {topTenTvShows?.map((tvShow) => <TvShowCard key={tvShow?.id} {...tvShow}/>)}
      </div>
    </div>
  );
}

export default TvShows;
