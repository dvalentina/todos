import React from 'react';

import { Button as StyledButton } from './Button.styled';

export interface IButton {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  bordered?: boolean;
}

function Button({ children, onClick, bordered }: IButton) {
  return (
    <StyledButton onClick={onClick} bordered={bordered}>
      {children}
    </StyledButton>
  );
}

export default Button;
