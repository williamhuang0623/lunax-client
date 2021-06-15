import css from 'styled-jsx/css';

export const adminStyles = css`
    .admin-container {
        /* height: 100vh;
        width: 100vw;
        background: black;
        color: white;
        justify-content: center;
        align-items: center;
        object-fit: fill !important; */
    }
    .buffer {
        height: 120px;
    }
`;

export const loginStyles = css`
    .login-container {
        text-align: center;
        background-color: #ffffff;
    }

    .login-header {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
    }

    .login-form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid lightgray;
        padding: 50px;
    }

    .login-button {
        padding: 40px;
    }
`;
