import css from 'styled-jsx/css';
import { colors, breakpoints } from '../styles/vars';

export const homeStyles = css`
    .main {
        height: 100vh;
        width: 100vw;
        background: black;
        position: relative;
        // overflow: hidden;
        display: flex;
        object-fit: fill !important;
    }

    #videoBG {
        position: fixed;
        top: 50%;
        align-item: center;
    }

    video {
        min-width: 100%;
        min-height: 100%;
        object-fit: cover;
    }

    .image-wrapper {
        padding: 22px;
        cursor: pointer;
    }

    .navigation {
        position: absolute;
        bottom: 35px;
        right: 50px;
    }

    footer {
        position: absolute;
        bottom: 0;
        padding: 22px;
        padding-left: 0;
    }

    .footer-links {
        list-style-type: none;
    }

    .footer-links a {
        text-decoration: none;
    }

    .footer-links a,
    .footer-links li {
        font-size: 12px;
        color: ${colors.pureWhite};
    }

    .navBarContainer {
        position: absolute;
        top: 50px;
        right: 50px;
    }

    @media (max-width: ${breakpoints.xl}) {
        .image-wrapper {
            padding: 0;
        }
    }

    @media (max-width: ${breakpoints.md}) {
        video {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
`;

/* 
@media (max-width: ${breakpoints.sm}) {}
*/
