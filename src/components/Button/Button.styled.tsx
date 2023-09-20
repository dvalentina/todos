import styled from 'styled-components';

import { IButton } from '.';

export const Button = styled.button<IButton>`
  border: ${({ bordered }) => (bordered ? '1px solid #e9d9d8' : 'none')};
  outline: none;
  font-size: 14px;
  font-weight: 300;
  height: 25px;
  background: none;
  color: #9b9b9b;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: #f0f0f0;
  }

  &:active {
    background: #dbdbdb;
  }
`;
