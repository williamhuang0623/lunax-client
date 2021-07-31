import css from 'styled-jsx/css';
import { colors, breakpoints } from 'styles/vars';

export const footerStyles = css`
    footer {
        background-color: black;
        padding-left: 0;
        padding: 0 224px;
        box-sizing: border-box;
    }

    .sub-footer {
        display: flex;
        justify-content: space-between;
        padding-bottom: 48px;
    }

    .footer-links {
        list-style-type: none;
        display: flex;
    }

    .footer-links a {
        text-decoration: none;
        color: ${colors.pureWhite};
        margin-right: 8px;
        margin-top: 3px;
    }

    .contact-details {
        color: ${colors.pureWhite};
        margin-bottom: 16px;
    }

    .contact-details h3 {
        margin: 0;
        font-size: 30px;
    }

    .contact-details a {
        color: ${colors.turquoise};
        cursor: pointer;
        text-decoration: none;
    }

    .contact-details a:hover {
        text-decoration: underline;
    }

    @media (max-width: ${breakpoints.md}) {
        footer {
            padding: 0 48px;
        }
    }

    @media (max-width: ${breakpoints.xs}) {
        .contact-details h3 {
            margin: 0;
            font-size: 24px;
        }

        footer {
            padding: 0 24px;
        }
    }
`;
