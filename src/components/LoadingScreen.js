import React, { useEffect, useState } from 'react';
import styles from '../styles/LoadingScreen.module.css';

const LoadingScreen = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => setIsVisible(false), 500); // Remove from DOM after fade-out
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`${styles.overlay} ${isFadingOut ? styles.fadeOut : ''}`}>
            <div className={styles.spinner}/>
        </div>
    );
};

export default LoadingScreen;