
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
    padding: 75px 0px;
    width: 95%;
    margin: 0 auto 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
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

    /* @media (min-width: 400px) {
        padding: 75px 50px;

    } */


    @media (min-width: 750px) {

        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 10% 0;

        .accordion-img {
            margin-bottom: 0px;
        }

    }
`;

export default Acordion;
