import React from 'react';

import styles from './SearchBar.module.scss';

export default function SearchBar() {
    return (
        <div className={styles.searchBox}>
            <input type="text" placeholder="Cuisine/Restuarant" className={styles.searchbar} />
            <button className={styles.searchbutton}>Search</button>
        </div>
    );
}