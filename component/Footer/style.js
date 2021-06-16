import css from 'styled-jsx/css';
import { colors, breakpoints } from 'styles/vars';

export const footerStyles = css`
    footer {
        background-color: black;
        padding-left: 0;
    }

    .sub-footer {
        display: flex;
        justify-content: space-between;
        padding-left: 34px;
        padding-top: 110px;
        padding-bottom: 48px;
    }

    .footer-links {
        list-style-type: none;
        display: flex;
        margin-right: 40px;
    }

    .footer-links a {
        text-decoration: none;
        color: ${colors.pureWhite};
        margin-right: 8px;
        margin-top: 3px;
    }

    .contact-details {
        padding-left: 48px;
        padding-top: 48px;
        color: ${colors.pureWhite};
    }

    .contact-details h3 {
        margin: 0;
        font-size: 30px;
    }

    .contact-details a {
        color: ${colors.red};
        cursor: pointer;
        text-decoration: none;
    }

    .contact-details a:hover {
        text-decoration: underline;
    }

    @media (max-width: ${breakpoints.xs}) {
        .contact-details h3 {
            margin: 0;
            font-size: 24px;
        }
    }
`;
