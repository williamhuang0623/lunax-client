import css from 'styled-jsx/css';
import { colors, breakpoints } from 'styles/vars';

export const adminLayoutStyles = css`
    .admin-container {
        display: flex;
        flex-flow: row nowrap;
    }

    .admin-navbar {
        padding: 24px 32px;
    }

    .admin-inner {
        padding: 24px 32px;
    }

    .admin-navbar a {
        color: ${colors.black};
    }

    @media (hover: hover) and (pointer: fine) {
        .admin-navbar a:hover {
            color: ${colors.darkGray};
        }
    }
`;
