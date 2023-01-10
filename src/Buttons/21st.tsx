import React from 'react';
import styled from 'styled-components'

function TwentyOne() {
  return (
    <Container>
      <Button>Button</Button>
    </Container>
  );
}

export default TwentyOne;

const Container = styled.div`

`
const Button = styled.button`
width: 200px;
height: 60px;
// overflow: hidden;
font-weight: bold;
border: none;
margin-bottom: 1rem;
text-transform: uppercase;
text-align: center;
line-height: 60px;
letter-spacing: 3px;
font-size: 16px;
background-color: transparent;
color: white;
position: relative;
transition: All 0.3s;
&:before {
  content: '';
  position: absolute;
  left: -1%;
  top: -5px;
  width: 50%;
  height: 100%;
  transform: skewX(30deg);
  background-color: #ee5253;
  z-index: -1;
  transition: All 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
&:after {
  content: '';
  position: absolute;
  right: -1%;
  bottom: -5px;
  width: 50%;
  height: 100%;
  transform: skewX(30deg);
  background-color: #0a3d62;
  z-index: -2;
  transition: All 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
&:hover {
  &::before {
    transform: skewX(0deg);
    left: 50%;
    top: 0;
  }
  &::after {
    transform: skewX(0deg);
    right: 50%;
    bottom: 0;
  }
}
`