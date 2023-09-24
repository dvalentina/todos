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
    <Container data-testid="footer">
      <CounterContainer>
        <Counter data-testid="counter">{`${counter} item${counter !== 1 ? 's' : ''} left`}</Counter>
      </CounterContainer>
      <ButtonGroup dataTestId="filter" options={options} chosen={chosen} handleChoose={handleChoose} />
      <ClearContainer>
        <Button dataTestId="clear-button" onClick={handleClear}>
          Clear completed
        </Button>
      </ClearContainer>
    </Container>
  );
}

export default Footer;
