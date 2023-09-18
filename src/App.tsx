import React from 'react';

import Card from './components/Card/Card';
import { Container, Title } from './App.styled';

function App() {
  return (
    <Container>
      <Title>todos</Title>
      <Card />
    </Container>
  );
}

export default App;
