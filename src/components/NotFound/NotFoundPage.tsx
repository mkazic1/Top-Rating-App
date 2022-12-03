import React from 'react';
import styles from './NotFound.module.css';

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>This page could not be found!</h1>
    </div>
  );
}

export default NotFoundPage;
