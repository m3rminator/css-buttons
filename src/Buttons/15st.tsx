import React from 'react';
import styled from 'styled-components'

function Fifteen() {
  return (
    <Container>
      <Button>Hover me</Button>
    </Container>
  );
}

export default Fifteen;

const Container = styled.div`

`
const Button = styled.button`
width: 200px;
height: 60px;
margin-bottom: 1rem;
background-color: transparent;
text-transform: uppercase;
font-size: 16px;
letter-spacing: 2px;
border: none;
color: white;
position: relative;
z-index: 2;
&::before {
  content: '';
  position: absolute;
  left: 0;
  top: -12.5px;
  width: 100%;
  height: 90px;
  transition: all 0.4s;
  border-right: 2px yellow solid;
  border-left: 2px red solid;
}
&::after {
  content: '';
  position: absolute;
  left: -12.5px;
  top:0;
  width: 230px;
  height: 100%;
  border-top: 2px red solid;
  border-bottom: 2px yellow solid;
  transition: all 0.4s;
  transition-delay: 0.4s;
}
&:hover {
  color: white;
  &::before {
  transform: rotateY(180deg);    
  } &::after {
    transform: rotateX(180deg);   
  }
}
}

`