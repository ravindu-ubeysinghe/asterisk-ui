import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAsset, isMainSite } from 'config';

import styles from './Header.module.scss';

export default function Header() {
    const logoUrl = useSelector((state) => state.site.logo_url);
    const logoText = useSelector((state) => state.site.logo_text);
    const mainSite = isMainSite();

    const getLogo = () => {
        if(logoUrl) {
            return  <img className={styles.logoImg} src={getAsset(logoUrl)} alt="Site Logo" />
        }

        return <div className={styles.logoText}>{logoText}</div>;
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/">{getLogo()}</Link>
            </div>
            <div className={styles.mainMenu}>
                <ul>
                    {mainSite
                        ? (<li><Link to={mainSite.menuLink}>{mainSite.menuItem}</Link></li>)
                        : (<li><Link to="/menu">Menu</Link></li>)}
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
    );
}