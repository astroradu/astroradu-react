import React from 'react';
import styles from '../styles/HomepageBanner.module.css';

const HomepageBanner: React.FC = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.textOverlay}>Welcome to Our Website</div>
        </div>
    );
};

export default HomepageBanner;