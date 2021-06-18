import css from 'styled-jsx/css';
import { colors, breakpoints } from 'styles/vars';

export const careerStyles = css`
    .careers-container {
        color: ${colors.whiteTwo};
    }

    .banner {
        height: 373px;
        width: 100%;
        background: url(/careers/mothership.png);
        background-position: center;
        background-size: cover;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        width: 100%;
        height: inherit;
    }

    .text-container {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        padding-left: 80px;
    }

    h1,
    h2,
    h3,
    p {
        margin: 0;
    }

    .text-container h1 {
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 56px;
        margin-bottom: 8px;
    }

    .text-container p {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 160%;
    }

    .jobs-container {
        padding: 40px 80px;
    }

    .jobs-description h3 {
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
    }

    .jobs-description h3 {
        margin-bottom: 12px;
    }

    .jobs-description p {
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: ${colors.lightGray};
        margin-bottom: 24px;
    }

    .jobs-wrapper {
        display: flex;
        padding-top: 24px;
        box-sizing: border-box;
        border-top: 1px solid ${colors.lightGray};
        flex-flow: row nowrap;
    }

    .jobs-filters {
        box-sizing: border-box;
        border-right: 1px solid ${colors.lightGray};
        padding-bottom: 120px;
    }

    .filter-button {
        color: ${colors.whiteTwo};
        background: ${colors.black};
        border: 1px solid ${colors.whiteTwo};
        box-sizing: border-box;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        padding: 6px 26px;
        cursor: pointer;
        margin-bottom: 16px;
        min-width: 50%;
    }

    .filter-button:hover {
        color: ${colors.black};
        background: ${colors.whiteTwo};
    }

    .jobs-listings {
        flex-grow: 4;
        padding-left: 64px;
    }

    .job-posting {
        padding: 24px 32px;
        cursor: pointer;
    }

    .job-posting:hover {
        background: ${colors.darkGray};
    }

    .job-posting p {
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        padding-bottom: 12px;
    }

    .job-posting span {
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
    }

    @media (max-width: ${breakpoints.md}) {
        .text-container {
            padding-left: 20px;
        }

        .text-container h1 {
            font-size: 34px;
            margin-bottom: 0;
        }
    }
`;

export const postingStyles = css`
    .job-container {
        margin: 0;
        padding-left: 297px;
        padding-right: 343px;
        padding-top: 122px;
        padding-bottom: 122px;
    }

    .job-container .back span {
        font-size: 15px;
        line-height: 25px;
        color: #81f0e7;
        margin-left: 8px;
        cursor: pointer;
    }
`;
