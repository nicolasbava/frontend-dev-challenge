import React from 'react';
import styled from 'styled-components'
import AccordionComponent from './AccordionComponent';

import img from '../../assets/img/acordion-img.png'

const Acordion = () => {
    return (
        <AccordionContainer>
            <img className='accordion-img' src={img} ></img>

            <AccordionComponent />
        </AccordionContainer>
    );
}

const AccordionContainer = styled.section`
    margin-bottom: 100px;
    padding: 0 50px;
    
    .accordion-accordion {
        margin-bottom: 100px
    }

    .accordion-img {
        margin-bottom: 100px;
    }

`;

export default Acordion;
