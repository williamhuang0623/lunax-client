import css from 'styled-jsx/css';
import { colors } from '../styles/vars';

export const homeStyles = css`
    .header {
        position: absolute;
    }

    .main {
        background-image: url('/home/chess.png');
        background-size: contain;
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-color: black;
        height: 100vh;
        width: 100vw;
    }

    .image-wrapper {
        padding: 22px;
    }

    main {
        position: relative;
        top: 50%;
    }

    .coming-soon-ticker {
        font-size: 20px;
        color: ${colors.pureWhite};
    }

    .coming-soon-ticker h1 {
        margin: 0;
        padding: 8px 0;
        border-top: 2px solid ${colors.pureWhite};
        border-bottom: 2px solid ${colors.pureWhite};
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
