import React from 'react';
import styled from 'styled-components'

import img from '../../assets/img/acordion-img.png'

const Acordion = () => {
    return (
        <AcordionContainer>
            <img src={img} ></img>
            <p>¿Cuales son los pasos para tomar una buena desicion?</p>
            <p>¿Cuales son los pasos para tomar una buena desicion?</p>
            <p>¿Cuales son los pasos para tomar una buena desicion?</p>
        </AcordionContainer>
    );
}

const AcordionContainer = styled.section`

`;

export default Acordion;
