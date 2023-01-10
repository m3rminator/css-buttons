import React from 'react';
import styled, { keyframes } from 'styled-components'
import wave from './wave.png'

function Nineteen() {
  return (
    <Container>
      <Button>BUTTON
        <Wave></Wave>
      </Button>
    </Container>
  );
}

export default Nineteen;

const Container = styled.div`

`
const Button = styled.button`
width: 200px;
height: 60px;
overflow: hidden;
border: 2px solid #00aeff;
margin-bottom: 1rem;
background-color: transparent;
color: #00aeff;
text-transform: uppercase;
text-align: center;
line-height: 60px;
font-size: 16px;
letter-spacing: 3px;
position: relative;
transition: all 1s;
z-index: 1;
&::before {
}
&::after {
}
&:hover {
  color: white;
  &::before {
    
  } &::after {

  }
}
}
`
const wavy = keyframes`
  0% {
    background-position-x: 0; 
  }

  100% {
    background-position-x: 118px;
  }
`;

const Wave = styled.div`
position: absolute;
width: 100%;
height: 100%;
left: 0;
top: 77px;
transition: all 1s;
background-color: #00aeff;
z-index: -1;
${Button}:hover & {
    top: 0;   
  }
&::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 22px;
  top: -22px;
  left: 0;
  background-image: url(${wave});
  animation: ${wavy} 0.5s linear infinite;
  z-index: 2;
}
`
