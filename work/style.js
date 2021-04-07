import css from 'styled-jsx/css';
import { colors } from '../styles/vars';

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
        color: white;
    }

    .tile img {
        transition: transform 500ms ease;
        width: 100%;
        height: auto;
    }

    .tile img:hover {
        transform: scale(1.1);
    }

    #workDetails {
        position: absolute;
        top: 8px;
        left: 16px;
    }

    #modal {
        height: 1000px;
    }
`;

export const filtersStyle = css`
    .filters {
        padding-left: 30px;
        margin-top: 30px;
    }

    .filters button {
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
    }
`;
