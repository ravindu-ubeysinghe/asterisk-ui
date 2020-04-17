import styled from 'styled-components';
import theme from 'theme/theme';

export const Wrapper = styled.div`
    display: flow-root;
    position: relative;
    font-size: ${theme.fontSizes.body};
    line-height: 30px;
    padding: ${theme.padding.large};
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    text-align: center;
    height: 70px;
`;

export const CopyrightText = styled.div`
    float: none;

    @media ${theme.media.tablet} {
        float: left;
    }
`;

export const Menu = styled.div`
    float: none;

    ul {
        margin-bottom: ${theme.padding.none};
        padding-left: ${theme.padding.none};
    }

    ul li {
        list-style-type: none;
        display: inline;
        margin: auto ${theme.padding.regular};
    }

    @media ${theme.media.tablet} {
        float: right;
    }
`;