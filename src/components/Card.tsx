import React from 'react';

import { Card as StyledCard } from './Card.styled';
import ToDoComponent from './ToDoComponent';

function Card() {
  return (
    <StyledCard>
      <ToDoComponent label="Тестовое задание" />
      <ToDoComponent label="Прекрасный код" checked />
      <ToDoComponent label="Покрытие тестами" />
    </StyledCard>
  );
}

export default Card;
