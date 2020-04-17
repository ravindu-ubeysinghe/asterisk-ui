import styled from 'styled-components';
import theme from 'theme/theme';

export const SearchBox = styled.div`
    margin-top: ${theme.padding.large};
`;

export const SearchInput = styled.input`
    width: auto;
    border-radius: 15px 0px 0px 15px;
    border-style: hidden;
    padding: ${theme.padding.regular} ${theme.padding.large};
    margin: ${theme.padding.none} auto;
    font-size: ${theme.fontSizes.body};
    line-height: 20px;
    letter-spacing: 2px;

    @media ${theme.media.tablet} {
        width: 400px;
    }
`;

export const SearchButton = styled.button`
    width: auto;
    padding: ${theme.padding.regular} ${theme.padding.large};
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    border-radius: 15px;
    margin-left: -15px;
    border: none;
    font-size: ${theme.fontSizes.body};
    line-height: 20px;
`;
