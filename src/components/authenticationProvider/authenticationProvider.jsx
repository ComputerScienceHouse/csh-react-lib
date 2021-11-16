import React from 'react';
import PropTypes from 'prop-types';
import {
  AuthenticationProvider as AuthProvider,
  oidcLog,
  InMemoryWebStorage,
} from '@axa-fr/react-oidc-context';
import oidcConfiguration from './config';
import {
  Authenticating, LoggingIn, NotAuthenticated, NotAuthorized,
} from './callbacks';

const AuthenticationProvider = ({
  debugOn,
  callbackComponentOverride,
  authenticatingOverride,
  notAuthenticatedOverride,
  notAuthorizedOverride,
  children,
}) => (
  <AuthProvider
    configuration={oidcConfiguration}
    loggerLevel={debugOn ? oidcLog.DEBUG : oidcLog.NONE}
    isEnabled
    UserStore={InMemoryWebStorage}
    callbackComponentOverride={callbackComponentOverride}
    authenticating={authenticatingOverride}
    notAuthenticated={notAuthenticatedOverride}
    notAuthorized={notAuthorizedOverride}
  >
    {children}
  </AuthProvider>
);

AuthenticationProvider.propTypes = {
  authenticatingOverride: PropTypes.elementType,
  callbackComponentOverride: PropTypes.elementType,
  children: PropTypes.node,
  debugOn: PropTypes.bool,
  notAuthenticatedOverride: PropTypes.elementType,
  notAuthorizedOverride: PropTypes.elementType,
};
AuthenticationProvider.defaultProps = {
  authenticatingOverride: Authenticating,
  callbackComponentOverride: LoggingIn,
  children: null,
  debugOn: false,
  notAuthenticatedOverride: NotAuthenticated,
  notAuthorizedOverride: NotAuthorized,
};

export default AuthenticationProvider;
