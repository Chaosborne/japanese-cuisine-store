import React from 'react';
import styles from './Header.module.css';
import sushiImage from '../../assets/sushi.jpg';

const Header = props => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Japanese Cuisine</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={sushiImage}></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
