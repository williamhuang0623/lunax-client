import css from 'styled-jsx/css';
import { colors, breakpoints } from '../styles/vars';

export const workStyles = css`
    .main {
        background-color: black;
        width: 100%;
        height: 100vh;
        display: flex;
        padding-bottom: 250px;
    }

    .image-wrapper {
        padding: 22px;
    }

    .filterSection {
        display: flex;
    }

    #workTable {
        position: relative;
        top: 100px;
        width: 100%;
    }

    .table {
        width: 100vw;
        background-color: #000;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        padding-bottom: 50px;
    }

    .tile {
        margin-left: 50px;
        margin-right: 50px;
        margin-top: 50px;
        cursor: pointer;
        overflow: hidden;
        width: 350px;
        height: 479px;
        position: relative;
        text-align: center;
        color: ${colors.pureWhite};
    }

    .tile img {
        transition: transform 500ms ease;
        width: 100%;
        height: 100%;
    }

    .tile img:hover {
        transform: scale(1.1);
    }

    #workDetailsNonMobile {
        position: absolute;
        top: 8px;
        left: 16px;
    }

    #workDetailsMobile {
        display: none;
        background: rgba(0, 0, 0, 0.3);
    }

    .formattingTitle {
        background: rgba(0, 0, 0, 0.3);
    }

    #modal {
        height: 1000px;
    }

    @media (max-width: ${breakpoints.md}) {
        #workDetailsNonMobile {
            display: none;
        }

        #workDetailsMobile {
            position: absolute;
            top: 8px;
            left: 16px;
            display: block;
            text-align: left;
        }
    }
`;

export const filtersStyle = css`
    .filters {
        padding-left: 30px;
        margin-top: 30px;
    }

    .filters button {
        cursor: pointer;
        margin: 10px;
        font-weight: 500;
    }

    .buttonSelected {
        width: 70px;
        height: 30px;
        border: 2px solid ${colors.pureWhite};
        border-radius: 40px;
        background: ${colors.pureWhite};
        color: black;
        font-size: 15px;
        font-family: 'Roboto', sans-serif;
    }

    .buttonDeselected {
        width: 70px;
        height: 30px;
        border: 2px solid ${colors.pureWhite};
        border-radius: 40px;
        background: black;
        color: white;
        font-size: 15px;
        font-family: 'Roboto', sans-serif;
    }
`;
