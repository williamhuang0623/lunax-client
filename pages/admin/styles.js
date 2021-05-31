import css from 'styled-jsx/css';

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
