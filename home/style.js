import css from 'styled-jsx/css';
import { colors, breakpoints } from '../styles/vars';

export const homeStyles = css`
    .icon {
        height: 35px;
        width: 35px;
    }

    .jumbotron-container {
        position: relative;
        width: 100vw;
        height: 100vh;
    }

    video {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
    }

    .main-text {
        position: absolute;
        z-index: 2;
        width: 780px;
        padding-left: 224px;
        top: 50%;
        transform: translateY(-50%);
    }

    .main-text h1 {
        background: linear-gradient(
            90deg,
            #ff004f -2%,
            #81f0e7 15.32%,
            #fffeff 26.26%,
            rgba(255, 254, 255, 0) 85.5%
        );
        color: transparent;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 60px;
        line-height: 120%;
    }

    .main-text .description {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 34px;
        line-height: 120%;
        color: ${colors.whiteTwo};
        background: linear-gradient(90deg, #fffeff -2%, rgba(255, 254, 255, 0) 97.16%);
        color: transparent;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }

    .cta-wrapper button {
        background: linear-gradient(90deg, #00ffd1 0%, ${colors.turquoise} 100%);
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        padding: 10px 40px;
        margin-bottom: 16px;
        border: none;
        cursor: pointer;
        color: ${colors.black};
    }

    .cta-wrapper a {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 120%;
        color: ${colors.turquoise};
        text-decoration: none;
        cursor: pointer;
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

    .brand-container {
        padding: 52px 0px;
        padding-bottom: 260px;
        color: ${colors.lightGray};
    }

    .brand-container p {
        font-size: 14px;
        text-align: center;
    }

    .all-brands {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }

    .all-brands img {
        margin-right: 85px;
    }

    .all-brands img:last-child {
        margin-right: 0;
    }

    .project-highlights-container {
        padding: 0px 224px;
        color: ${colors.whiteTwo};
    }

    .project-highlights-container h1 {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 60px;
        line-height: 120%;
        margin-bottom: 56px;
    }

    .project-highlights-container .description {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 120%;
        max-width: 600px;
        color: ${colors.mediumGray};
    }

    .gridContainer {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        grid-template-rows: repeat(auto-fit, 260px);
        grid-auto-flow: dense;
        grid-gap: 0.3rem;
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
        .navigation {
            bottom: 60px;
            right: 25px;
        }
    }
`;
