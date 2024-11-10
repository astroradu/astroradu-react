import React from 'react';
import styles from '../styles/Homepage.module.css';

const Homepage = () => (
    <div>
        <div className={styles.content}>
            <p>{'Lorem ipsum '.repeat(200)}</p>
        </div>
    </div>
);

export default Homepage;