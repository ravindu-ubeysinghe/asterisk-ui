import styled from 'styled-components';
import theme from 'theme/theme';

export const Wrapper = styled.div`
    background-image: url('/assets/img/404bg.jpg');
    background-size: cover;
    padding: ${theme.padding.extraLarge};
    height: 100vh;
    color: ${theme.colors.white};
`;

export const Content = styled.div`
    margin-top: calc(50vh - 100px);
    max-height: 100px;
    text-align: center;
`;

export const Logo = styled.div`
    font-size: 35px;
    letter-spacing: 3px;
    text-align: center;
    margin-bottom: ${theme.padding.large};

    &::after {
        background-color: ${theme.colors.white};
        content: "";
        display: block;
        height: 2px;
        position: relative;
        width: 50px;
        margin: ${theme.padding.none} auto;
    }
`;