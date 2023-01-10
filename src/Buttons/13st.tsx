import React from 'react';
import styled from 'styled-components'

function Thirteen() {
  return (
    <Container>
      <Button>button Hover effect</Button>
    </Container>
  );
}

export default Thirteen;

const Container = styled.div`

`
const Button = styled.button`
width: 200px;
height: 60px;
margin-bottom: 1rem;
background-color: transparent;
text-transform: uppercase;
text-align: center;
line-height: 60px;
font-weight: bold;
font-size: 10px;
letter-spacing: 2px;
border: none;
color: white;
position: relative;
transition: all 0.5s;
z-index: 4;
&::after {
  content: '';
  position: absolute;
  left: -3px;
  top: -3px;
  width: 100%;
  height: 100%;
  transition: all 0.25s;
  background-color: #20caff;
  z-index: -1;
  mix-blend-mode: multiply;
  transform-origin: top;
}
&::before {
  content: '';
  position: absolute;
  display: flex;
  margin-bottom: 0.5rem;
  left: 3px;
  top: 3px;
  width: 100%;
  height: 100%;
  transition: all 0.25s;
  background-color: #ff7675;
  z-index: -1;
  mix-blend-mode: multiply;
  transform-origin: bottom;
}
&:hover {
  color: white;
  &::after {
    left: 0;
    top: -6px;
    transform: perspective(1000px) rotateX(75deg);
  } &::before {
    right: 0;
    top: 6px;
    transform: perspective(1000px) rotateX(-75deg)
  }
}
}
`

