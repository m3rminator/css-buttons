import React from 'react';
import styled from 'styled-components'
import First from './Buttons/1st'
import Second from './Buttons/2st'
import Third from './Buttons/3st'
import Forth from './Buttons/4st'
import Fifth from './Buttons/5st'
import Sixth from './Buttons/6st'
import Seven from './Buttons/7st'
import './App.css';

function App() {
  return (
    <Container>
      <First />
      <Second />
      <Third />
      <Forth />
      <Fifth />
      <Sixth />
      <Seven />
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
