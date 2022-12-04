import React, { useState } from 'react';
import MoviesInterface from './MoviesInterface';
import styles from '../../style/CommonStyle.module.css';

const API_IMG = 'https://image.tmdb.org/t/p/w500/'

const MovieCard = (props: MoviesInterface) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={API_IMG + props.poster_path} />
      <div className={styles.body}>
        <h3 className={styles.title}>{props.title}</h3>
        <button className={styles['card-button']}>Details</button>
      </div>
    </div>
  );
}

export default MovieCard;
