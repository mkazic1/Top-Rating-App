import React, { useState } from 'react';
import Movies from '../Movies/Movies';
import Search from '../SearchField/Search';
import TvShows from '../TvShows/TvShows';
import styles from './Overview.module.css';

const Overview: React.FC = () => {
  const [displayedTvShows, setDisplayedTvShows] = useState(true);

  const handlenOnClickMovies = (): void => {
    setDisplayedTvShows(false);
  }

  const handleOnClickTvShows = (): void => {
    setDisplayedTvShows(true);
  }

  return (
    <div className={styles.container}>
      <div className={styles['buttons-container']}>
        <button className={styles.button} onClick={handlenOnClickMovies}>MOVIES</button>
        <button className={styles.button} onClick={handleOnClickTvShows}>TV SHOWS</button>
      </div>
      <Search/>
      {displayedTvShows ? <TvShows /> : <Movies/>}
    </div>
  );
}

export default Overview;
