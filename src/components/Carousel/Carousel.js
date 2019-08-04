import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { componentIDS, constants } from '../../config';
import { isArray } from 'lodash';

import SearchBar from '../../components/SearchBar/SearchBar';

import styles from './Carousel.module.css';

export default function Carousel() {
    const components = useSelector(state => state?.site?.components);
    const [carousel, setCarousel] = useState(false);

    useEffect(() => {
        if(isArray(components) && components.length > 0) {
            for(let component of components) {
                if(component.name === componentIDS.CAROUSEL){
                    setCarousel(component);
                }
            }
        }
    }, [components]);

    return carousel && (
        <>
            <div className={styles.carousel}>
                <div className={styles.carouselInner}>
                    <h1>{carousel.content_title || constants.GENERIC_PLACEHOLDER}</h1>
                    <p>{carousel.content_subtitle || ''}</p>
                    <SearchBar />
                </div>
            </div>
        </>
    );
}