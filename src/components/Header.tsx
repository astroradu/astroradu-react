import React, {useState, useEffect, PropsWithChildren} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import { FiMenu } from 'react-icons/fi';

const Header: React.FC<PropsWithChildren<{ onMenuClick: () => void }>> = ({ onMenuClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > window.innerHeight * 0.1);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>Logo</div>
                <nav className={styles.nav}>
                    <Link to="/" className={styles.navButton}>Home</Link>
                    <Link to="/about" className={styles.navButton}>About</Link>
                    <button className={styles.navButton}>Test</button>
                    <button className={styles.navButton}>Portfolio</button>
                    <button className={styles.navButton}>Contact</button>
                </nav>
                <div className={styles.hamburger} onClick={onMenuClick}>
                    <FiMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;