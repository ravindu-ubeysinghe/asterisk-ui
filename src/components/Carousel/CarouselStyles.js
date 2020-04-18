import styled from 'styled-components';

export const CarouselOuter = styled.div`
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

export const CarouselInner = styled.div`
    padding: 30px;
`;

export const CarouselSubTitle = styled.p`
    text-shadow: 5px 5px 7px rgba(0,0,0,0.5);
    font-style: italic;
`;