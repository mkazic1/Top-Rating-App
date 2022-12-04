import React, { useState } from 'react';
import TvShowsInterface from './TvShowsInterface';
import styles from '../../style/CommonStyle.module.css';

const API_IMG = 'https://image.tmdb.org/t/p/w500/'

const TvShowCard = (props: TvShowsInterface) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={API_IMG + props.poster_path} />
      <div className={styles.body}>
        <h3 className={styles.title}>{props.name}</h3>
        <button className={styles.button}>Details</button>
      </div>
    </div>
  );
}

export default TvShowCard;
