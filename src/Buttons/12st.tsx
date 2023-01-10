import React from 'react';
import styled from 'styled-components'

function Twelve() {
  return (
    <Container>

      <Button><Span></Span>Hover me</Button>
    </Container>
  );
}

export default Twelve;

const Container = styled.div`

`


const Button = styled.button`
width: 200px;
height: 60px;
border: none;
margin-bottom: 1rem;
background-color: transparent;
color: #FF6D1B;
position: relative;
transition-delay: 0.3s;
transition: all 0.5s;
z-index: 1;
&::before {
  content: '';
  position: absolute;
  border-radius: 50%;
  left: 0;
  top: 50%;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);
  box-shadow: -100px 0 0 #FF6D1B;
  transition: all 0.5s;
  background-color: #FF6D1B;
  z-index: -1;
  opacity: 0%;
}
&::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  right: 0;
  top:50%;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);
  box-shadow: 100px 0 0 #FF6D1B;
  transition: all 0.5s;
  background-color: #FF6D1B;
  z-index: -1;
  opacity: 0%;
}
&:hover {
    color: white;
  &::before {
    left: 50%;
    box-shadow: 30px 0 0 #FF6D1B;
    transform: translateX(-50%) translateY(-50%);
    opacity: 100%;
  } &::after {
    right: 50%;
    box-shadow: -30px 0 0 #FF6D1B;
    transform: translateX(50%) translateY(-50%);
    opacity: 100%;
  }
}
}
`
const Span = styled.span`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #FF6D1B;
z-index: -1;
transform: scale(0);
transition: all 0.3s;
${Button}:hover & {
  transform: scale(1);
  transition-delay: 0.5s;
}
`
