import React from 'react';
import styled from 'styled-components'

function Seventeen() {
  return (
    <Container>
      <Button><Span>B</Span>utton</Button>
    </Container>
  );
}

export default Seventeen;

const Container = styled.div`

`
const Button = styled.button`
width: 200px;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
border: 2px white solid;
margin-bottom: 1rem;
background-color: transparent;
color: #FF6D1B;
font-size: 24px;
position: relative;
// overflow: hidden;
z-index: 2;
transition: All 0.5s;
&::before {
  content: '';
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #FF6D1B;
  opacity: 0%;
  top: 0;
  left: 0;
  transition: all 0.5s;
  z-index: -1;
}
}
&:hover {
    color: white;
  &::before {
    opacity: 100%;
    transform: rotate(15deg);
  }
}
}
`


const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  margin-left: 3.5rem;
  justify-content: center;
  align-items: center;
  z-index: -1;
  font-size: 24px;
  transition: all 0.5s;
  ${Button}:hover & {
  transform: rotate(360deg) translateY(-10px);
  margin-left: 1.9rem;
  color: white;
  font-size: 64px;
  }
`
