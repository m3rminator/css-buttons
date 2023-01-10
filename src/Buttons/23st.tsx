import React from 'react';
import styled from 'styled-components'

function TwentyThree() {
  return (
    <Container>
      <Button>BUTTON</Button>
    </Container>
  );
}

export default TwentyThree;

const Container = styled.div`

`
const Button = styled.button`
width: 200px;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
top: 0px;
overflow: hidden;
font-weight: bold;
background-color: transparent;
color: #FF6D1B;
border: 2px solid #FF6D1B;
margin-bottom: 1rem;
text-transform: uppercase;
text-align: center;
line-height: 60px;
letter-spacing: 1px;
font-size: 16px;
position: relative;
transition: All 0.75s;
z-index: 1;
&:before {
  content: '';
  position: absolute;
  border-top: 30px #FF6D1B solid;
  border-bottom: 30px #FF6D1B solid;
  border-right: 30px transparent solid;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateX(-100%);
  transition: All 0.75s;
  z-index: -1;
}
&:after {
  content: '';
  position: absolute;
  border-top: 30px #FF6D1B solid;
  border-bottom: 26px #FF6D1B solid;
  border-left: 30px transparent solid;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateX(100%);
  transition: All 0.75s;
  z-index: -1;
}
&:hover {
    color: white;
  &::before {
    transform: translateX(0%);
  }
  &::after {
    transform: translateX(0%);
  }
}
}
`