import React from 'react';

import { Checkbox, CheckboxWrapper, CheckIcon, Container, Label, Text } from './ToDoComponent.styled';

interface IToDoComponent {
  label: string;
  checked: boolean;
  id: string;
  handleClick: (id: string) => void;
}

function ToDoComponent({ label, checked, id, handleClick }: IToDoComponent) {
  const handleChange = () => {
    handleClick(id);
  };

  return (
    <Container data-testid="to-do-component">
      <Label htmlFor={id} data-testid="to-do-label">
        <CheckboxWrapper>
          {checked ? (
            <CheckIcon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </CheckIcon>
          ) : null}
          <Checkbox checked={checked} onChange={handleChange} id={id} />
        </CheckboxWrapper>
        <Text checked={checked}>{label}</Text>
      </Label>
    </Container>
  );
}

export default ToDoComponent;
