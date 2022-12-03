import React from 'react';
import styles from './Search.module.css';

const Search: React.FC = () => {
  return (
    <input className={styles.input} type="text" placeholder="Search..."/>
  );
}

export default Search;
