import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

export default function Footer() {
    const siteName = useSelector(({ site }) => site.name);

    return (
        <div className={styles.footer}>
            <div className={styles.copyright}>{`\u00A9 ${siteName}`} | a part of eMart</div>
            <div className={styles.menu}>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

Footer.prototype = {
    isHome: PropTypes.bool,
}

Footer.defaultProps = {
    isHome: null,
}