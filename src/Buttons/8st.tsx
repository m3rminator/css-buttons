import React from 'react';
import styled from 'styled-components'

function Eight() {
  return (
    <Container>
      <Button>Hover me</Button>
    </Container>
  );
}

export default Eight;

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
  content: 'Hover me';
  opacity: 0%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  transform: scale(5);
  transition: all 0.5s;
  background-color: #FF6D1B;
}
&:hover {
    color: white;
  &::before {
    opacity: 100%;
    width: 100%;
    height: 100%;
    transform: scale(1);
  }
}
}
`