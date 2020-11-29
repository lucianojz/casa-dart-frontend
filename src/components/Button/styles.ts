import styled, { css } from 'styled-components';

const buttonTypeVariations = {
  info: css`
    background: #323e86;
    color: #e3e3e3;
  `,
  success: css`
    background: #04724d;
    color: #e3e3e3;
  `,
  warning: css`
    background: #dfcc6e;
    color: #000;
  `,
  error: css`
    background: #d1604d;
    color: #f8d7da;
  `,
};

interface ContainerProps {
  variation?: 'success' | 'error' | 'warning' | 'info';
  iconPosition?: 'left' | 'right';
}

export const Container = styled.div<ContainerProps>`
  width: 240px;
  height: 30px;
  border-radius: 5px;

  font-size: 14px;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;

  ${props => buttonTypeVariations[props.variation || 'info']}

  svg {
    padding: 0;
  }

  button {
    padding: 0 10px;
    background: transparent;
    border: 0;
    font-weight: 500;
    color: inherit;
  }
`;
