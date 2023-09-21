import React from 'react';

import Button from '../Button';
import ButtonGroup, { IButtonGroup } from '../ButtonGroup';

import { ClearContainer, Container, Counter, CounterContainer } from './Footer.styled';

interface IFooter extends IButtonGroup {
  handleClear: () => void;
  counter: number;
}

function Footer({ options, chosen, handleChoose, handleClear, counter }: IFooter) {
  return (
    <Container>
      <CounterContainer>
        <Counter>{`${counter} item${counter !== 1 ? 's' : ''} left`}</Counter>
      </CounterContainer>
      <ButtonGroup options={options} chosen={chosen} handleChoose={handleChoose} />
      <ClearContainer>
        <Button onClick={handleClear}>Clear completed</Button>
      </ClearContainer>
    </Container>
  );
}

export default Footer;
