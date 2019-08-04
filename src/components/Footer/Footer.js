import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './Footer.module.css';

export default function Footer({ isHome }) {
    const className = cx(styles.footer, (isHome && styles.footerHome));
    return (
        <>
            <div className={className}>Footer</div>
        </>
    )
}

Footer.prototype = {
    isHome: PropTypes.bool,
}

Footer.defaultProps = {
    isHome: null,
}