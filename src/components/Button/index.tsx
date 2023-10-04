import React from 'react';

import { Button as StyledButton } from './Button.styled';

interface IButton {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  bordered?: boolean;
  dataTestId?: string;
}

function Button({ children, onClick, bordered, dataTestId }: IButton) {
  return (
    <StyledButton onClick={onClick} $bordered={bordered} data-testid={dataTestId}>
      {children}
    </StyledButton>
  );
}

export default Button;
