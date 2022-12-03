import React from 'react';
import Logo from '../../assets/app-icon-white.png';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src={Logo} alt="Logo image" />
        <span className={styles.title}>TOP RATING APP</span>
      </div>
    </nav>
  )
}

export default Header;
