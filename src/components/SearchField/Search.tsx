import React from 'react';
import SearchInterface from '../../interfaces/SearchInterface';
import styles from '../../style/Search.module.css';
import buttonStyles from '../../style/CommonStyle.module.css';

const Search = (props: SearchInterface) => {
  return (
    <form className={styles['input-button-container']} onSubmit={props.onSubmit}>
      <input className={styles.input} type="text" placeholder="Search..." onChange={props.onChange} value={props.query}/>
      <button className={buttonStyles.button}>Search</button>
    </form>
  );
}

export default Search;
