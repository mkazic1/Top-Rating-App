import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../../constants/routes';
import Logo from '../../assets/app-icon-white.png';
import styles from '../../style/Header.module.css';

const Header: React.FC = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src={Logo} alt="Logo image" />
        <Link to={HOME} className={styles.link}>
          <h3 className={styles.title}>TOP RATING APP</h3>
        </Link>
      </div>
    </nav>
  )
}

export default Header;
