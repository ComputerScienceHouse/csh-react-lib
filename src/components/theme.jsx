import React from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b0197e',
    },
    secondary: {
      main: '#e11c52',
    },
  },
});

const Theme = ({ children }) => (
  <EmotionThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </EmotionThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
