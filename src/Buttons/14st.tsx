import React from 'react';
import styled from 'styled-components'

function Fourteen() {
  return (
    <Container>
      <Button><Span></Span>Hover me</Button>
    </Container>
  );
}

export default Fourteen;

const Container = styled.div`

`
const Button = styled.button`
width: 200px;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
border: 2px #FF6D1B solid;
margin-bottom: 1rem;
background-color: transparent;
color: #FF6D1B;
text-transform: uppercase;
line-height: 60px;
font-size: 16px;
letter-spacing: 2px;
position: relative;
transition: all 0.5s;
z-index: 1;
&::before {
  content: '';
  position: absolute;
  left: -25%;
  top: 0;
  width: 25%;
  height: 100%;
  transition: all 0.25s;
  background-color: #FF6D1B;
  z-index: -1;
  transform-origin: left;
  transition-delay: 0.1s;
}
&::after {
  content: '';
  position: absolute;
  left: 25%;
  top: -100%;
  width: 25%;
  height: 100%;
  transition: all 0.25s;
  background-color: #FF6D1B;
  z-index: -1;
  transform-origin: top;
  transition-delay: 0.2s;
}
&:hover {
  color: white;
  &::before {
    left: 0;
    top: 0;
    
  } &::after {
    left: 25;
    top: 0;
  }
}
}
`

const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 100%;
    width: 25%;
    height: 100%;
    transition: all 0.25s;
    background-color: #FF6D1B;
    z-index: -1;
    transition-delay: 0.3s;
  }
  &::after {
    content: '';
    position: absolute;
    left: 100%;
    top: 0%;
    width: 25%;
    height: 100%;
    transition: all 0.25s;
    background-color: #FF6D1B;
    z-index: -1;
    transition-delay: 0.4s;
  }
  ${Button}:hover & {
    &::before {
      left: 50%;
      top: 0;
      
    } &::after {
      left: 75%;
      top: 0;
    }
  }
  }
`
