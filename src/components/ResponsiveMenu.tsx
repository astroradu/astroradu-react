import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/ResponsiveMenu.module.css';

interface ResponsiveMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ isOpen, onClose }) => {
    return (
        <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
            <button onClick={onClose} className={styles.closeButton}>Close</button>
            <nav>
                <Link to="/" onClick={onClose} className={styles.navButton}>Home</Link>
                <Link to="/about" onClick={onClose} className={styles.navButton}>About</Link>
                <button className={styles.navButton}>Services</button>
                <button className={styles.navButton}>Portfolio</button>
                <button className={styles.navButton}>Contact</button>
            </nav>
        </div>
    );
};

export default ResponsiveMenu;