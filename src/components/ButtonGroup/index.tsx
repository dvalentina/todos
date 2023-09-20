import React from 'react';

import Button from '../Button';

import { Container } from './ButtonGroup.styled';

interface IButtonGroup {
  options: string[];
  chosen: string;
  handleChoose: (chosen: string) => void;
}

function ButtonGroup({ options, chosen, handleChoose }: IButtonGroup) {
  const optionsComponents = options.map((option) => (
    <Button
      key={option}
      bordered={option === chosen}
      onClick={() => {
        handleChoose(option);
      }}
    >
      {option}
    </Button>
  ));

  return <Container>{optionsComponents}</Container>;
}

export default ButtonGroup;
