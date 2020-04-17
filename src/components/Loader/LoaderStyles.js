import styled, { keyframes } from 'styled-components';
import theme from 'theme/theme';

export const Overlay = styled.div`
  background-color: ${theme.colors.darkGrey};
  height: 100vh;
`;

const scaleDot = keyframes`
    40% {
      transform: scale(1.3) translate(-2px, -2px);
    }
    80% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
`;


export const LoaderWrapper = styled.div`
    width: 60px;
    height: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -${theme.padding.large} 0 0 -${theme.padding.large}; /*change? */
    transform: rotate(45deg);

    & div {
        width: 6px;
        height: 6px;
        background: #fff;
        border-radius: 100%;
        float: left;
        margin-bottom: ${theme.padding.regular}; /*change? */
        animation: ${scaleDot} 2s ease infinite;
    }

    & div:not(:nth-child(4n+4)) {
        margin-right: ${theme.padding.regular};
    }

    & div:nth-child(1) {
        animation-delay: 0;
    }

    & div:nth-child(2), & div:nth-child(5) {
        animation-delay: 0.1s;
    }

    & div:nth-child(3), & div:nth-child(6), & div:nth-child(9) {
        animation-delay: 0.2s;
    }

    & div:nth-child(4), & div:nth-child(7), & div:nth-child(10), & div:nth-child(13) {
        animation-delay: 0.3s;
    }

    & div:nth-child(8), & div:nth-child(11), & div:nth-child(14) {
        animation-delay: 0.4s;
    }

    & div:nth-child(12), & div:nth-child(15) {
        animation-delay: 0.5s;
    }

    & div:nth-child(16) {
        animation-delay: 0.6s;
    }
`;
