import css from 'styled-jsx/css';
import { colors, breakpoints } from '../styles/vars';

export const homeStyles = css`
    figure {
        margin: 0;
    }

    .icon {
        height: 35px;
        width: 35px;
    }

    .home-container {
        background-color: ${colors.black};
    }

    .jumbotron-container {
        position: relative;
        width: 100vw;
        height: 100vh;
    }

    .jumbotron-container video {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
    }

    .main-text {
        box-sizing: border-box;
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
            rgba(255, 254, 255, 0.7) 85.5%
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
        background: linear-gradient(90deg, #fffeff -2%, rgba(255, 254, 255, 0.7) 97.16%);
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

    .description a,
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
        padding-bottom: 177px;
        color: ${colors.lightGray};
    }

    .brand-container p {
        font-size: 14px;
        text-align: center;
    }

    .all-brands {
        box-sizing: border-box;
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
        color: ${colors.whiteTwo};
        margin-bottom: 177px;
    }

    .project-highlights-container,
    .nft-highlights-container {
        padding: 0px 224px;
    }

    .nft-highlights-container h1,
    .project-highlights-container h1 {
        color: ${colors.whiteTwo};
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 60px;
        line-height: 120%;
        margin-bottom: 56px;
    }

    .nft-highlights-container .description,
    .project-highlights-container .description {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 120%;
        max-width: 600px;
        color: ${colors.mediumGray};
        margin-bottom: 80px;
    }

    .nft-highlights-container {
        margin-bottom: 177px;
    }

    .project-highlights-container .gridContainer {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(16, 5vw);
        grid-gap: 15px;
    }

    .nft-highlights-container .gridContainer {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        width: 100%;
        display: grid;
        grid-gap: 15px;
    }

    .gallery-item {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .gallery-item--1 {
        grid-column: 1 / span 2;
        grid-row: 1 / span 6;
    }

    .gallery-item--2 {
        grid-column: 3 / span 2;
        grid-row: 1 / span 6;
    }

    .gallery-item--3 {
        grid-column: 1 / span 4;
        grid-row: 7 / span 4;
    }

    .gallery-item--4 {
        grid-column: 1 / span 2;
        grid-row: 11 / span 5;
    }

    .gallery-item--5 {
        grid-column: 3 / span 2;
        grid-row: 11 / span 5;
    }

    .gallery-item img,
    .gallery-item video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: ${breakpoints.md}) {
        .main-text {
            width: 100%;
            padding: 48px;
        }

        .nft-highlights-container h1,
        .project-highlights-container h1,
        .main-text h1 {
            font-size: 48px;
        }

        .nft-highlights-container .description,
        .project-highlights-container .description,
        .main-text .description {
            font-size: 24px;
        }

        .all-brands {
            padding: 48px;
        }

        .all-brands img {
            margin-right: 15px;
            margin-bottom: 15px;
        }

        .project-highlights-container,
        .nft-highlights-container {
            padding: 0px 48px;
        }
    }

    @media (max-width: ${breakpoints.xs}) {
        .project-highlights-container,
        .nft-highlights-container {
            padding: 0px 24px;
        }

        .all-brands {
            padding: 24px;
        }

        .main-text {
            padding: 24px;
        }
    }
`;
