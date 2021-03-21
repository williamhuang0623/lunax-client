import css from 'styled-jsx/css';
import { colors } from '../styles/vars';

export const workStyles = css`
    .header {
        position: absolute;
        align-self: left;
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

    .filterSection {
        display: flex;
    }

    #allButton {
        left: 210px;
        top: 65px;
        position: absolute;
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
    }

    #VFXButton {
        left: 285px;
        top: 65px;
        position: absolute;
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
    }

    #filmButton {
        left: 360px;
        top: 65px;
        position: absolute;
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
    }

    #workTable {
        position: absolute;
        top: 150px;
        width: 100vw;
    }

    .table {
        width: 100vw;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }

    .tile {
        margin-left: 50px;
        margin-right: 50px;
        cursor: pointer;
        overflow: hidden;
        width: 350px;
        height: 479px;
        position: relative;
        text-align: center;
        color: white;
    }

    .tile.img {
        width: 100%;
        transition: transform 500ms ease;
        background-color: white

    }

    img:hover {
        transform: scale(1.1);
        opacity: 1;
    }

    #workDetails {
        position: absolute;
        top: 8px;
        left: 16px;
    }

`;

