import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export const Authenticating = () => (
  <>
    <CircularProgress />
    {' '}
    Redirecting to CSH SSO
  </>
);

export default Authenticating;
