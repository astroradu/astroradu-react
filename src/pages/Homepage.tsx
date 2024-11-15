import React from 'react';
import ImageBanner from '../components/HomepageBanner';
import styles from '../styles/Homepage.module.css';

const Homepage: React.FC = () => {
    return (
        <div>
            <ImageBanner/>
            <div className={styles.content}>
                <p>{'Lorem ipsum '.repeat(200)}</p>
            </div>
        </div>
    );
};

export default Homepage;