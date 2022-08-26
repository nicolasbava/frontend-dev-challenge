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
    padding: 75px 50px;
    
    .accordion-accordion {
        margin-bottom: 50px;
 
    }

    .accordion-img {
        margin-bottom: 100px;
        cursor: pointer;
        transition: all 500ms ease;
        object-fit: cover;

        &:hover {
            transform: scale(1.0125);
        }
    }

    @media (min-width: 750px) {

        display: flex;
        justify-content: space-around;
        padding: 10% 5% 0;

    }
`;

export default Acordion;
