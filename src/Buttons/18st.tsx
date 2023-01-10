import React from 'react';
import styled from 'styled-components'

function Eightteen() {
  return (
    <Container>
      <Button><Span></Span>BUTTON</Button>
    </Container>
  );
}

export default Eightteen;

const Container = styled.div`

`
const Button = styled.button`
width: 200px;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
border: none;
margin-bottom: 1rem;
background-color: transparent;
color: white;
text-transform: uppercase;
line-height: 60px;
font-size: 16px;
letter-spacing: 3px;
position: relative;
transition: all 0.5s;
z-index: 1;
&::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0%;
  transition: all 0.5s;
  z-index: -1;
  border-left: 2px #FF6D1B solid;
}
&::after {
  content: '';
  position: absolute;
  border-bottom: 2px #FF6D1B solid;
  right: 0;
  bottom: 0;
  width: 0%;
  height: 100%;
  transition: all 0.5s;
  z-index: -1;
}
&:hover {
  color: #FF6D1B;
  &::before {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    
  } &::after {
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
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
  z-index: -1;
  &::before {
    content: '';
    position: absolute;
    border-right: 2px #FF6D1B solid;
    right: 0;
    top: 0;
    width: 100%;
    height: 0%;
    transition: all 0.5s;
    z-index: -1;
  }
  &::after {
    content: '';
    position: absolute;
    border-top: 2px #FF6D1B solid;
    left: 0;
    top: 0;
    width: 0%;
    height: 0%;
    transition: all 0.5s;
    z-index: -1;
  }
  ${Button}:hover & {
    &::before {
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
      
    } &::after {
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  }
`
