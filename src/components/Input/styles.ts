import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputBody = styled.div<ContainerProps>`
  background: #f0f0f0;
  border-radius: 10px;
  padding: 8px;
  /* margin-top: 5px; */
  margin-bottom: 8px;
  width: 100%;

  border: 2px solid #f0f0f0;
  color: #000;

  display: flex;
  align-items: center;
  justify-content: center;

  input {
    background: #f0f0f0;
    flex: 1;
    border: 0;
    color: #000;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #d1604d;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #ead2ac;
      color: #ead2ac;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ead2ac;
    `}

  @media (max-width: 450px) {
    width: 290px;
    padding: 10px;
    display: flex;

    input {
      width: 180px;
      padding: 0;
    }
    input + div {
      margin: 0;
      margin-left: 10px;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #d1604d;
    color: #fff;

    &::before {
      border-color: #d1604d transparent;
    }
  }
`;
