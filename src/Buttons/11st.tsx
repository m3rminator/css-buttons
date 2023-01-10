import React from 'react';
import styled from 'styled-components'

function Eleven() {
  return (
    <Container>
      <Button></Button>
    </Container>
  );
}

export default Eleven;

const Container = styled.div`

`
const Button = styled.button`
width: 200px;
height: 60px;
margin-bottom: 1rem;
border: 2px White solid;
background-color: #282828;
color: white;
position: relative;
// overflow: hidden;
z-index: 2;
&::before {
  content: 'Hover me';
  opacity: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  // font-size: 24px;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  transform-origin: Top;
  transform: translateX(0%) rotateY(0deg);
  transition: all 0.5s;
  background-color: #FF6D1B;
}
&::after {
  content: 'Hover me';
  opacity: 0%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  // font-size: 24px;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  transform-origin: Top;
  transform: translateX(-100%) rotateY(270deg);
  transition: all 0.5s;
  background-color: #FF6D1B;
}
&:hover {
    color: white;
  &::before {
    width: 100%;
    height: 100%;
    opacity: 0%;
    transform: translateX(100%) rotateY(270deg);
  } &::after {
    width: 100%;
    height: 100%;
    opacity: 100%;
    transform: translateX(0%) rotateY(0deg); ;
  }
}
}
`

