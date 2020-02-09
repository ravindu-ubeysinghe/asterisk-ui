import React from 'react';
import { Helmet } from 'react-helmet';
import { NOT_FOUND } from 'constants/strings';
import styles from './NotFound.module.scss';

export default function NotFound({error}) {

    return (
        <>
            <Helmet>
                <title>Not Found | One Mart</title>
            </Helmet>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.logo}>oneMart</div>
                    {error || NOT_FOUND}
                </div>
            </div>
        </>
    );
}
