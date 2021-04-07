import css from 'styled-jsx/css';
import { colors, breakpoints } from 'styles/vars';

export const navBarContainerStyle = css`
    .navBar {
        width: 100%;
        position: absolute;
        z-index: 12;
        display: flex;
        justify-content: space-between;
    }

    .logo {
        cursor: pointer;
        padding-left: 20px;
        padding-top: 20px;
    }

    .navbar-button {
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
`;
