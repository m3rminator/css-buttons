import React from 'react';
import styled from 'styled-components'
import First from './1st'
import Second from './2st'
import Third from './3st'
import Forth from './4st'
import Fifth from './5st'
import Sixth from './6st'
import Seven from './7st'
import Eight from './8st'
import Nine from './9st'
import Ten from './10st'
import Eleven from './11st'
import Twelve from './12st'
import Thirteen from './13st'
import Fourteen from './14st'
import Fifteen from './15st'
import Sixteen from './16st'
import Seventeen from './17st'
import Eightteen from './18st'
import Nineteen from './19st'
import Twenty from './20st'
import TwentyOne from './21st'
import TwentyTwo from './22st'
import TwentyThere from './23st'
import TwentyFour from './24st'

function Buttons() {
    return (
        <Container>
            <First />
            <Second />
            <Third />
            <Forth />
            <Fifth />
            <Sixth />
            <Ten />
            <Eleven />
            <Seven />
            <Eight />
            <Nine />
            <Twelve />
            <Thirteen />
            <Fifteen />
            <Fourteen />
            <Sixteen />
            <Seventeen />
            <Eightteen />
            <Nineteen />
            <Twenty />
            <TwentyOne />
            <TwentyTwo />
            <TwentyThere />
            <TwentyFour />
        </Container>
    );
}

const Container = styled.div`
display: flex;
width: 100%;
flex-wrap: wrap;
justify-content: space-between;
margin-right: 1rem;
margin-left: 1rem;
`
export default Buttons;
