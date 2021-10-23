/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
};

// eslint-disable-next-line react/prop-types
let Template = ({ children, ...args }) => <Button {...args}>{children}</Button>;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
};

Template = () => (
  <>
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
  </>
);
export const Variants = Template.bind({});
Variants.args = {};
