import css from 'styled-jsx/css';
import { colors } from '../styles/vars';

export const workVFXStyles = css`
    .header {
        position: absolute;
        align-self: left
    }

    .main {
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-color: black;
        height: 100vh;
        width: 100vw;
        display: flex;
    }

    .image-wrapper {
        padding: 22px;
    }

    main {
        position: relative;
        top: 50%;
    }

    .filters {
        display: flex;
    }

    #allButton {
        left: 210px; 
        top: 65px;
        position: absolute;
        border: none;
        background: none;
        outline: none;
        cursor:pointer;
    }

    #VFXButton {
        left: 285px; 
        top: 65px;
        position: absolute;
        border: none;
        background: none;
        outline: none;
        cursor:pointer;
    }

    #filmButton {
        left: 360px; 
        top: 65px;
        position: absolute;
        border: none;
        background: none;
        outline: none;
        cursor:pointer;
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
`;

