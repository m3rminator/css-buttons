import React from 'react';
import styled from 'styled-components'

function TwentyTwo() {
  return (
    <Container>
      <Button>HOVER ME</Button>
    </Container>
  );
}

export default TwentyTwo;

const Container = styled.div`

`
const Button = styled.button`
width: 200px;
height: 60px;
top: 0px;
// overflow: hidden;
font-weight: bold;
background-color: white;
color: #282828;
border-radius: 30px;
border: none;
margin-bottom: 1rem;
text-transform: uppercase;
text-align: center;
line-height: 60px;
letter-spacing: 1px;
font-size: 16px;
position: relative;
transition: All 0.3s;
&:before {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-color: white;
  transform: scale(1);
  z-index: -2;
  transition: All 0.3s;
  opacity: 100%;
}
&:hover {
  top: -2.5px;
  box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
  &::before {
    transform: scale(1.25);
    opacity: 0%;
  }
}
}
`