import React from 'react';

import AddToDo from '../AddToDo/AddToDo';
import ToDoComponent from '../ToDoComponent/ToDoComponent';

import { Card as StyledCard } from './Card.styled';

function Card() {
  return (
    <StyledCard>
      <AddToDo />
      <ToDoComponent label="Тестовое задание" />
      <ToDoComponent label="Прекрасный код" checked />
      <ToDoComponent label="Покрытие тестами" />
    </StyledCard>
  );
}

export default Card;
