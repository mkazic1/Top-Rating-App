import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TvShowsInterface from '../../interfaces/TvShowsInterface';
import styles from '../../style/CommonStyle.module.css';
import { API_IMG } from '../../constants/url';
import { TVSHOWS } from '../../constants/routes';

const TvShowCard = (props: TvShowsInterface) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={API_IMG + props.poster_path} />
      <div className={styles.body}>
        <h3 className={styles.title}>{props.name}</h3>
        <button className={styles['card-button']}>
            Details
        </button>
      </div>
    </div>
  );
}

export default TvShowCard;
