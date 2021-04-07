import css from 'styled-jsx/css';
import { colors } from 'styles/vars';

export const navBarStyle = css`
    #flyOutNavBar {
        width: 100vw;
        height: 100vh;
        background-color: black;
        position: fixed;
        top: 0;
        left: 0;
        transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
        overflow: scroll;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #flyOutNavBar.false {
        transform: translate3d(-100vw, 0, 0);
    }

    #flyOutNavBar.true {
        transform: translate3d(0vw, 0, 0);
        overflow: hidden;
    }

    #flyOutNavBar h2 {
        color: ${colors.pureWhite};
        margin-left: 15vw;
        font-size: 6vw;
        cursor: pointer;
    }

    #flyOutNavBar h2:hover {
        text-decoration: underline;
    }

    .closeNav {
        position: absolute;
        top: 35px;
        right: 35px;
        cursor: pointer;
    }
`;
