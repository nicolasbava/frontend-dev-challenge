import React from 'react';
import styled from 'styled-components'

import img from '../../assets/img/acordion-img.png'

const Acordion = () => {
    return (
        <AccordionContainer>
            <img className='accordion-img' src={img} ></img>
            <div className='accordion-accordion'>

                <p>¿Cuales son los pasos para tomar una buena desicion?</p>
                <p>¿Cuales son los pasos para tomar una buena desicion?</p>
                <p>¿Cuales son los pasos para tomar una buena desicion?</p>
            </div>
        </AccordionContainer>
    );
}

const AccordionContainer = styled.section`
    
    .accordion-accordion {
        margin-bottom: 100px
    }

    .accordion-img {
        margin-bottom: 100px;
    }

`;

export default Acordion;
