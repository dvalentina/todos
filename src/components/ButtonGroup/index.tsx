import React from 'react';

import Button from '../Button';

import { Container } from './ButtonGroup.styled';

export interface IButtonGroup {
  options: string[];
  chosen: string;
  handleChoose: (chosen: string) => void;
  dataTestId?: string;
}

function ButtonGroup({ options, chosen, handleChoose, dataTestId }: IButtonGroup) {
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

  return <Container data-testid={dataTestId}>{optionsComponents}</Container>;
}

export default ButtonGroup;
