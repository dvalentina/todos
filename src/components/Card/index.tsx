import React from 'react';

import { Card as StyledCard, Shadow } from './Card.styled';

interface ICard {
  children?: React.ReactNode;
}

function Card({ children }: ICard) {
  return (
    <StyledCard>
      {children}
      <Shadow />
    </StyledCard>
  );
}

export default Card;
