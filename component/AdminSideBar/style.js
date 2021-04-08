import css from 'styled-jsx/css';

export const sideBarStyle = css`
    .sidebar-container {
        background-color: white;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: 16rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .profile-image {
        height: 5rem;
    }
    .profile-name {
        font-size: 1rem;
        font-weight: 300;
        color: black;
    }
`;
