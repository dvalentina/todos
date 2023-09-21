import React from 'react';

import { Card as StyledCard } from './Card.styled';

interface ICard {
  children?: React.ReactNode;
}

function Card({ children }: ICard) {
  return <StyledCard>{children}</StyledCard>;
}

export default Card;
