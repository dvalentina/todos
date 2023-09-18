import React, { useState } from 'react';

import { ReactComponent as DownIcon } from '../../images/DownIcon.svg';

import { Container, Icon, Input } from './AddToDo.styled';

interface IAddToDo {
  addToDo: (text: string) => void;
}

function AddToDo({ addToDo }: IAddToDo) {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addToDo(value);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Icon>
        <DownIcon />
      </Icon>
      <Input placeholder="What needs to be done?" value={value} onChange={handleChange} />
    </Container>
  );
}

export default AddToDo;
