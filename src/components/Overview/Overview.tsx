import React, { useState } from 'react';
import Movies from '../Movies/Movies';
import Search from '../SearchField/Search';
import TvShows from '../TvShows/TvShows';
import styles from './Overview.module.css';

const Overview: React.FC = () => {
  const [displayedTvShows, setDisplayedTvShows] = useState(true);

  const onClickMovies = (): void => {
    setDisplayedTvShows(false);
  }

  const onClickTvShows = (): void => {
    setDisplayedTvShows(true);
  }

  return (
    <div className={styles.container}>
      <div className={styles['buttons-container']}>
        <button className={styles.button} onClick={onClickMovies}>MOVIES</button>
        <button className={styles.button} onClick={onClickTvShows}>TV SHOWS</button>
      </div>
      <Search/>
      {displayedTvShows ? <TvShows /> : <Movies/>}
    </div>
  );
}

export default Overview;
