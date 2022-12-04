import React, { useState } from 'react';
import Movies from '../Movies/Movies';
import TvShows from '../TvShows/TvShows';
import styles from './Overview.module.css';
import buttonStyles from '../../style/CommonStyle.module.css';

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
      <div className={buttonStyles['buttons-container']}>
        <button className={buttonStyles.button} onClick={handlenOnClickMovies}>MOVIES</button>
        <button className={buttonStyles.button} onClick={handleOnClickTvShows}>TV SHOWS</button>
      </div>
      {displayedTvShows ? <TvShows /> : <Movies/>}
    </div>
  );
}

export default Overview;
