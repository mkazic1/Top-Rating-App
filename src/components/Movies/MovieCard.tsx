import React, { useState } from 'react';
import MoviesInterface from '../../interfaces/MoviesInterface';
import styles from '../../style/CommonStyle.module.css';
import { API_IMG } from '../../constants/url';

const MovieCard = (props: MoviesInterface) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={API_IMG + props.poster_path} />
      <div className={styles.body}>
        <h3 className={styles.title}>{props.title}</h3>
        <button className={styles['card-button']}>
            Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
