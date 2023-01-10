import React from 'react';
import styled from 'styled-components'

function Nine() {
  return (
    <Container>
      <Button>Hover me</Button>
    </Container>
  );
}

export default Nine;

const Container = styled.div`

`
const Button = styled.button`
width: 200px;
height: 60px;
color: #FF6D1B;
letter-spacing: -1px;
text-transform: uppercase;
Border: 2px #FF6D1B solid;
font-size: 20px;
background-color: #282828;
margin-bottom: 1rem;
background-color: #282828;
position: relative;
overflow: hidden;
z-index: 2;
transition: All 1s;
&::before {
  content: '';
  border-radius: 0 0 50% 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top:0;
  width: 100%;
  height: 0%;
  transform-origin: Top;
  transition: all 1s;
  background-color: #FF6D1B;
  z-index: -1;
}
&:hover {
    color: white;
  &::before {
    border-radius: 0;
    width: 100%;
    height: 190%;
  }
}
}
`

