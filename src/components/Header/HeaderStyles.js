import styled from 'styled-components';
import theme from 'theme/theme';

export const NavBar = styled.nav`
    background-color: ${theme.colors.white};
    padding: ${theme.padding.large};
    max-height: 120px;
    height: 80px;
`;

export const Logo = styled.div`
    max-width: 20%;
    max-height: 40px;
    display: inline-block;
`;

export const LogoText = styled.div`
    font-size: ${theme.fontSizes.h3};
    letter-spacing: 3px;

    &::after {
        background-color: ${theme.colors.black};
        content: "";
        display: block;
        height: 2px;
        position: relative;
        width: 50px;
        margin: ${theme.padding.none} auto;
    }
`;

export const LogoImg = styled.img`
        max-height: 40px;
`;

export const MainMenu = styled.div`
    width: 80%;
    display: inline-block;
    float: right;

    & > ul {
        float: right;
        margin-bottom: ${theme.padding.none};
    }

    & li {
        list-style: none;
        display: inline-block;
        margin: 0 ${theme.padding.regular};
        font-size: ${theme.fontSizes.body};
        letter-spacing: 2px;
        line-height: 40px;
    }
`;
