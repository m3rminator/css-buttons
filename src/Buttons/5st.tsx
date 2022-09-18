import React from 'react';
import styled from 'styled-components'

function Fifth() {
  return (
    <Container>
      <Button>Hover me</Button>
    </Container>
  );
}

export default Fifth;

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
  content: 'YEAH!';
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  transform-origin: Top;
  transform: translateY(-100%);
  transition: transform 1s;
  background-color: #FF6D1B;
}
&:hover {
    color: white;
  &::before {
    width: 100%;
    height: 100%;
    transform: translateY(0%);
  }
}
}
`

