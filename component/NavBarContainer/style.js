import css from 'styled-jsx/css';
import { colors, breakpoints } from 'styles/vars';

export const navBarContainerStyle = css`
    .navBar {
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        position: fixed;
        z-index: 12;
        display: flex;
        justify-content: space-evenly;
        align-items: self;
        padding: 16px 0px;
        font-size: 14px;
    }

    .links-wrapper a {
        margin-right: 56px;
    }

    .social-links a {
        margin-right: 48px;
        margin-top: 8px;
    }

    .social-links a:last-child {
        margin-right: 0;
    }

    .navBar a {
        color: ${colors.pureWhite};
        text-decoration: none;
    }

    .links-wrapper,
    .social-links {
        display: flex;
        align-items: center;
    }

    @media (hover: hover) and (pointer: fine) {
        .navBar a:hover {
            color: ${colors.lightGray};
        }
    }

    .logo {
        cursor: pointer;
    }

    .navbar-button {
        display: none;
        position: absolute;
        top: 35px;
        right: 35px;
        cursor: pointer;
    }

    @media (max-width: ${breakpoints.xl}) {
        .image-wrapper {
            padding: 0;
        }
    }

    @media (max-width: ${breakpoints.sm}) {
        .navbar-button {
            display: block;
            position: absolute;
            top: 35px;
            right: 35px;
            cursor: pointer;
        }

        .image-wrapper {
            padding: 0;
        }

        .links-wrapper {
            display: none;
        }

        .social-links {
            display: none;
        }
    }
`;
