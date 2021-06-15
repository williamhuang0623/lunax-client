import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
palette: {
    type: 'dark',
    primary: {
        main: '#ff1737',
        type: 'dark',
        contrastText: '#fafafa'
    },
    secondary: {
        main: '#c21021',
    },
    background: {
        default: '#fafafa',
    }
    },
  typography: {
    fontFamily: 'Roboto',
      button: {
          fontSize: '1rem',
          color: '#ff1737'
      },
  }
});