import React, { useState } from 'react';

import { Checkbox, CheckboxWrapper, CheckIcon, Container, Label, Text } from './ToDoComponent.styled';

interface IToDoComponent {
  label: string;
  checked?: boolean;
}

function ToDoComponent({ label, checked }: IToDoComponent) {
  const defaultChecked = checked || false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <Container>
      <Label htmlFor={label}>
        <CheckboxWrapper>
          {isChecked ? (
            <CheckIcon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </CheckIcon>
          ) : null}
          <Checkbox checked={isChecked} onChange={handleChange} id={label} />
        </CheckboxWrapper>
        <Text checked={isChecked}>{label}</Text>
      </Label>
    </Container>
  );
}

export default ToDoComponent;
