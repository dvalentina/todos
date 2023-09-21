import React, { useEffect, useState } from 'react';

import AddToDo from './components/AddToDo';
import Card from './components/Card';
import Footer from './components/Footer';
import ToDoComponent from './components/ToDoComponent';
import { Container, Title } from './App.styled';
import { generateId } from './utils';

interface IToDo {
  text: string;
  done: boolean;
  id: string;
}

function App() {
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

  const handleClearCompleted = () => {
    setToDos((prev) => prev.filter((toDo) => !toDo.done));
  };

  useEffect(() => {
    setToDoComponents(
      toDos.map((toDo) => (
        <ToDoComponent label={toDo.text} key={toDo.id} id={toDo.id} checked={toDo.done} handleClick={handleToDoClick} />
      )),
    );
  }, [toDos]);

  return (
    <Container>
      <Title>todos</Title>
      <Card>
        <AddToDo addToDo={addToDo} />
        {toDoComponents}
        {toDos.length !== 0 ? (
          <Footer
            options={filterOptions}
            chosen={chosen}
            handleChoose={handleChoose}
            handleClear={handleClearCompleted}
          />
        ) : null}
      </Card>
    </Container>
  );
}

export default App;
