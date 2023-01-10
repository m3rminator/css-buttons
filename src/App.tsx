import React from 'react';
import styled from 'styled-components'
import Buttons from './Buttons/Buttons'
import './App.css';

function App() {
  return (
    <Container>
      <Buttons />
    </Container>
  );
}

const Container = styled.div`
display: flex;
width: 100%;
flex-wrap: wrap;
justify-content: space-between;

`
export default App;
