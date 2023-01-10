import React from 'react';
import styled from 'styled-components'

function Twenty() {
  return (
    <Container>
      <Button>
        Button
        <Span></Span>
      </Button>
    </Container>
  );
}

export default Twenty;

const Container = styled.div`

`
const Button = styled.button`
width: 200px;
height: 60px;
overflow: hidden;
border: none;
margin-bottom: 1rem;
text-transform: uppercase;
text-align: center;
line-height: 60px;
letter-spacing: 3px;
font-size: 16px;
background-color: transparent;
color: white;
position: relative;
transition: All 0.25s;
&:hover {
    color: #282828;
}
`

const Span = styled.span`
position: absolute;
top: 0;
left: 0;
width: 98%;
height: 94%;
border: 2px White solid;
z-index: -2;
&::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8%;
  height: 500%;
  transition: all 0.25s;
  background-color: #282828;
  z-index: -1;
  transform: translate(-50%, -50%) rotate(-60deg);
}
${Button}:hover & {
  &::before {
  width: 100%;
  background-color: white;
  transform: translate(-50%, -50%) rotate(60deg);  
  }
`

