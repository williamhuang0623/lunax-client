import css from 'styled-jsx/css';
import { colors, breakpoints } from '../styles/vars';

export const homeStyles = css`
    .icon {
        height: 35px;
        width: 35px;
    }

    .main {
        height: 100vh;
        width: 100vw;
        background: black;
        position: relative;
        display: flex;
        object-fit: fill !important;
    }

    video {
        width: 100%;
        height: auto;
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

    @media (max-width: ${breakpoints.xs}) {
        video {
            width: 100%;
            height: 500px;
            border-radius: 10px;
            margin-top: auto;
            margin-bottom: auto;
        }
    }
`;

/* 
@media (max-width: ${breakpoints.sm}) {}
*/
