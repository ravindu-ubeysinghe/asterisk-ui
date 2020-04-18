import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { componentIDS, constants } from '../../config';
import { isArray } from 'lodash';

import SearchBar from 'components/SearchBar/SearchBar';
import { CarouselOuter, CarouselInner, CarouselSubTitle } from './CarouselStyles';

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
            <CarouselOuter>
                <CarouselInner>
                    <h1>{carousel.content_title || constants.GENERIC_PLACEHOLDER}</h1>
                    <CarouselSubTitle>{carousel.content_subtitle || ''}</CarouselSubTitle>
                    <SearchBar />
                </CarouselInner>
            </CarouselOuter>
        </>
    );
}

