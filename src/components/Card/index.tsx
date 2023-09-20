import React, { useEffect, useState } from 'react';

import { generateId } from '../../utils';
import AddToDo from '../AddToDo';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import ToDoComponent from '../ToDoComponent';

import { Card as StyledCard } from './Card.styled';

interface IToDo {
  text: string;
  done: boolean;
  id: string;
}

function Card() {
  const [toDos, setToDos] = useState<IToDo[]>([
    { text: 'Тестовое задание', done: false, id: generateId('Тестовое задание') },
    { text: 'Прекрасный код', done: true, id: generateId('Прекрасный код') },
    { text: 'Покрытие тестами', done: false, id: generateId('Покрытие тестами') },
  ]);
  const [toDoComponents, setToDoComponents] = useState<React.JSX.Element[]>([]);

  const filterOptions = ['All', 'Active', 'Completed'];
  const [chosen, setChosen] = useState(filterOptions[0]);

  const addToDo = (text: string) => {
    setToDos((prev) => [...prev, { text, done: false, id: generateId(text) }]);
  };

  const handleToDoClick = (id: string) => {
    setToDos((prev) =>
      prev.map((toDo) => {
        if (toDo.id === id) {
          return { ...toDo, done: !toDo.done };
        }

        return toDo;
      }),
    );
  };

  const handleChoose = (option: string) => {
    setChosen(option);
  };

  useEffect(() => {
    setToDoComponents(
      toDos.map((toDo) => (
        <ToDoComponent label={toDo.text} key={toDo.id} id={toDo.id} checked={toDo.done} handleClick={handleToDoClick} />
      )),
    );
  }, [toDos]);

  return (
    <StyledCard>
      <AddToDo addToDo={addToDo} />
      {toDoComponents}
      <Button bordered>Clear all</Button>
      <ButtonGroup options={filterOptions} chosen={chosen} handleChoose={handleChoose} />
    </StyledCard>
  );
}

export default Card;
