import React from 'react';
import styled from 'styled-components'

function Sixth() {
  return (
    <Container>
      <Button>Hover me</Button>
    </Container>
  );
}

export default Sixth;

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
overflow: hidden;
z-index: 2;
transition: All 1s;
&::before {
  content: '';
  position: absolute;
  left: 0;
  top:0;
  width: 100%%;
  height: 10px;
  transform: translateX(-100%) rotate(45deg);
  transition: transform 1s;
  background-color: White;
  z-index: -1;
}
&:hover {
    color: white;
    background-color: #FF6D1B;
  &::before {
    width: 100%;
    height: 10px;
    transform: translateX(100%) rotate(45deg);
  }
}
}
`

