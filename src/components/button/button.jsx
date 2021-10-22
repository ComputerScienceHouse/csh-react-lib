import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import theme from '../theme';

const Button = () => (
  <EmotionThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <MuiButton variant="contained">Hello There</MuiButton>
    </ThemeProvider>
  </EmotionThemeProvider>
);

export default Button;
