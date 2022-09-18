import React from 'react';
import styled from 'styled-components'

function Forth() {
  return (
    <Container>
      <Button>Hover me</Button>
    </Container>
  );
}

export default Forth;

const Container = styled.div`

`
const Button = styled.button`
padding: 15px 35px;
margin-bottom: 1rem;
color: #FF6D1B;
letter-spacing: -1px;
text-transform: uppercase;
Border: 2px #FF6D1B solid;
font-size: 20px;
background-color: #282828;
position: relative;
overflow: hidden;
z-index: 2;
transition: All 1s;
}
&:hover {
    font-weight: bold;
    letter-spacing: 5px;
    border: 5px #FF6D1B solid;
 }
}
`
