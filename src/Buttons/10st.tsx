import React from 'react';
import styled from 'styled-components'

function Ten() {
  return (
    <Container>
      <Button>Hover me</Button>
    </Container>
  );
}

export default Ten;

const Container = styled.div`

`
const Button = styled.button`
width: 200px;
height: 60px;
margin-bottom: 1rem;
background-color: orange;
border: none;
color: white;
position: relative;
z-index: 2;
&::before {
  content: 'Hover me';
  position: absolute;
  transform: rotatex(270deg);
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  transform-origin: Top;
  transition: all 0.25s;
  background-color: Green;
  transition-delay: 0.5s;
}
&::after {
  content: 'Hover me';
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  transform-origin: Top;
  transform: rotatex(270deg);
  transition: all 0.25s;
  background-color: Red;
  transition-delay: 0.25s;
}
&:hover {
  color: white;
  &::before {
    transform: rotatex(0deg);
    width: 100%;
    height: 100%;
    transition: all 0.25s;
  } &::after {
    transform: rotatex(0deg);
    width: 100%;
    height: 100%;
    transition: all 0.25s;
    transition-delay: 0.25s;
  }
}
}
`

