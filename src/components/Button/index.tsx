/* eslint-disable react/button-has-type */
import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>;
  iconPosition?: 'left' | 'right';
  variation?: 'success' | 'error' | 'warning' | 'info';
}

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  iconPosition: Positon = 'left',
  variation,
  children,
  ...other
}) => {
  return (
    <Container className="Button" variation={variation} iconPosition={Positon}>
      {Icon && Positon === 'left' && <Icon size={18} />}
      <button {...other}>{children}</button>
      {Icon && Positon === 'right' && <Icon size={18} />}
    </Container>
  );
};
export default Button;
