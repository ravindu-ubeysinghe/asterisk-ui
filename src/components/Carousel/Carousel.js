import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { componentIDS, constants } from '../../config';
import styled from 'styled-components';
import { isArray } from 'lodash';

import SearchBar from 'components/SearchBar/SearchBar';

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
                    <p>{carousel.content_subtitle || ''}</p>
                    <SearchBar />
                </CarouselInner>
            </CarouselOuter>
        </>
    );
}

const CarouselOuter = styled.div`
    width: 100%;
    height: calc(100vh - 150px);
    left: 0;
    background: ${props => props.theme.colors.bgGrey};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;

const CarouselInner = styled.div`
    padding: 30px;
`;