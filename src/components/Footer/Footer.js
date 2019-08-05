import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <h3>Footer</h3>
        </div>
    )
}

Footer.prototype = {
    isHome: PropTypes.bool,
}

Footer.defaultProps = {
    isHome: null,
}