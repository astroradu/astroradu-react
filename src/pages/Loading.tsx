import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styles from '../styles/LoadingScreen.module.css';

const LoadingScreen: React.FC = () => {
    return (
        <div className={styles.loadingOverlay}>
            <CircularProgress color="primary" />
        </div>
    );
};

export default LoadingScreen;