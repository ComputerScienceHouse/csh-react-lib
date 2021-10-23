import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@mui/material';
import Theme from '../theme';

const Button = (props) => {
  const {
    children,
    className,
    color,
    disabled,
    fullWidth,
    href,
    onClick,
    size,
    variant,
    ...other
  } = props;

  return (
    <Theme>
      <MuiButton
        className={className}
        color={color}
        disabled={disabled}
        fullWidth={fullWidth}
        href={href}
        size={size}
        variant={variant}
        /* eslint-disable react/jsx-props-no-spreading */
        {...other}
        /* eslint-enable react/jsx-props-no-spreading */
      >
        {children}
      </MuiButton>
    </Theme>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'success',
    'error',
    'info',
    'warning',
  ]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
  ]),
  variant: PropTypes.oneOf([
    'contained',
    'outlined',
    'text',
  ]),
};

Button.defaultProps = {
  children: null,
  className: null,
  color: 'primary',
  disabled: false,
  fullWidth: false,
  href: null,
  onClick: null,
  size: 'medium',
  variant: 'contained',
};

export default Button;
