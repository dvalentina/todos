import React, { useState } from 'react';

import { ReactComponent as DownIcon } from '../../images/DownIcon.svg';

import { Container, Icon, Input } from './AddToDo.styled';

function AddToDo() {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Container>
      <Icon>
        <DownIcon />
      </Icon>
      <Input placeholder="What needs to be done?" value={value} onChange={handleChange} />
    </Container>
  );
}

export default AddToDo;
