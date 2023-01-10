import React from 'react';
import styled from 'styled-components'

function Sixteen() {
  return (
    <Container>
      <Button>Hover me</Button>
    </Container>
  );
}

export default Sixteen;

const Container = styled.div`

`
const Button = styled.button`
width: 200px;
height: 60px;
margin-bottom: 1rem;
border: none;
background-color: #282828;
color: white;
position: relative;
// overflow: hidden;
background-color: #FF6D1B;
z-index: 2;
transition: All 1s;
&::before {
  content: '';
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  left: -5px;
  top: -5px;
  width: 24px;
  height: 24px;
  transition: all 0.5s;
  border-top: 2px #FF6D1B solid;
  border-left: 2px #FF6D1B solid;
}
&::after {
  content: '';
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  right: -5px;
  bottom: -5px;
  width: 24px;
  height: 24px;
  transition: all 0.5s;
  border-bottom: 2px #FF6D1B solid;
  border-right: 2px #FF6D1B solid;
}
&:hover {
    color: white;
  &::before {
    width: 100%;
    height: 100%;
  }
  &::after {
    width: 100%;
    height: 100%;
  }
}
}
`

