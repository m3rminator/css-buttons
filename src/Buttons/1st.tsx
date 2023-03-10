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
color: white;
letter-spacing: -1px;
Border: 2px white solid;
background-color: #282828;
margin-bottom: 1rem;
position: relative;
overflow: hidden;
z-index: 2;
transition: All 1s;
&::before {
  content: '';
  border-radius: 0% 50% 50% 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top:0;
  width: 5%;
  height: 0%;
  transform-origin: Top left;
  rotate: (90deg);
  transition: all 0.5s;
  background-color: #FF6D1B;
  z-index: -1;
}
&:hover {
    color: white;
  &::before {
    border-radius: 0;
    rotate: (0deg);
    width: 200%;
    height: 190%;
  }
}
}
`


