import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

export default function Header() {
    // TODO: Get logo from backend
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                FOOD MART
            </div>
            <div className={styles.mainMenu}>
                <ul>
                    <li>Home</li>
                </ul>
            </div>
        </nav>
    );
}