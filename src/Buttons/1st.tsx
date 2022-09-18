import React from 'react';
import styled from 'styled-components'

function First() {
    return (
        <Container>
            <Button>Hover me</Button>
        </Container>
    );
}

export default First;

const Container = styled.div`

`
const Button = styled.button`
width: 200px;
height: 60px;
margin-bottom: 1rem;
border: 2px White solid;
background-color: #282828;
position: relative;
overflow: hidden;
z-index: 2;
color: white;
transition: All 1s;
&::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform-origin: bottom left;
  transform: rotate(-90deg);
  transition: transform 1s;
  background-color: #FF6D1B;
  z-index: -1;
}
&:hover {
    color: white;
  &::before {
      transform: rotate(0deg);
  }
}
}
`

