import React, { useEffect, useState } from 'react';

import AddToDo from './components/AddToDo';
import Card from './components/Card';
import Footer from './components/Footer';
import ToDoComponent from './components/ToDoComponent';
import { Container, NotFound, Title, ToDosContainer } from './App.styled';
import { generateId } from './utils';

interface IToDo {
  text: string;
  done: boolean;
  id: string;
}

enum FilterOptions {
  All = 'All',
  Active = 'Active',
  Completed = 'Completed',
}

function App() {
  const [toDos, setToDos] = useState<IToDo[]>([
    { text: 'Тестовое задание', done: false, id: generateId('Тестовое задание') },
    { text: 'Прекрасный код', done: true, id: generateId('Прекрасный код') },
    { text: 'Покрытие тестами', done: false, id: generateId('Покрытие тестами') },
  ]);
  const [filteredToDos, setFilteredToDos] = useState<IToDo[]>(toDos);
  const [toDoComponents, setToDoComponents] = useState<React.JSX.Element[]>([]);
  const [chosen, setChosen] = useState<string>(FilterOptions.All);
  const [counter, setCounter] = useState(toDos.filter((toDo) => !toDo.done).length);

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
    setCounter(toDos.filter((toDo) => !toDo.done).length);
  }, [toDos]);

  useEffect(() => {
    switch (chosen) {
      case FilterOptions.Active:
        setFilteredToDos(toDos.filter((toDo) => !toDo.done));
        break;
      case FilterOptions.Completed:
        setFilteredToDos(toDos.filter((toDo) => toDo.done));
        break;
      default:
        setFilteredToDos(toDos);
        break;
    }
  }, [chosen, toDos]);

  useEffect(() => {
    setToDoComponents(
      filteredToDos.map((toDo) => (
        <ToDoComponent label={toDo.text} key={toDo.id} id={toDo.id} checked={toDo.done} handleClick={handleToDoClick} />
      )),
    );
  }, [filteredToDos]);

  return (
    <Container>
      <Title>todos</Title>
      <Card>
        <AddToDo addToDo={addToDo} />
        <ToDosContainer>{toDoComponents}</ToDosContainer>
        {toDos.length !== 0 && toDoComponents.length === 0 ? (
          <NotFound>Nothing here. Try a different filter option?</NotFound>
        ) : null}
        {toDos.length !== 0 ? (
          <Footer
            options={Object.values(FilterOptions)}
            chosen={chosen}
            handleChoose={handleChoose}
            handleClear={handleClearCompleted}
            counter={counter}
          />
        ) : null}
      </Card>
    </Container>
  );
}

export default App;
