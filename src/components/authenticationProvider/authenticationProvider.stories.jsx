/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { withOidcSecure } from '@axa-fr/react-oidc-context';
import AuthenticationProvider from '.';
import Button from '../button';

export default {
  title: 'Authentication Provider',
  component: AuthenticationProvider,
};

// eslint-disable-next-line react/prop-types
let Template = ({ children, ...args }) => (
  <AuthenticationProvider {...args}>
    {children}
  </AuthenticationProvider>
);

export const Default = Template.bind({});

Template = () => (
  <AuthenticationProvider>
    {withOidcSecure(<Button variant="text">Log-in</Button>)}
  </AuthenticationProvider>
);
