import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import vector from '../../assets/img/accordion/vector-down.png'
import verticalLine from '../../assets/img/accordion/vertical-line-pink.png'
import * as v from '../../assets/js/variables'

const data = [
    {
        question: '¿Cuáles son los pasos para tomar una decisión?',
        answer: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.'
    },
    {
        question: '¿Cuáles son los pasos para tomar una decisión?',
        answer: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.'
    },
    {
        question: '¿Cuáles son los pasos para tomar una decisión?',
        answer: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.'
    },
]



const AccordionComponent = () => {
    const [selected, setSelected] = useState(null)

    let openAccordion 

    useEffect(() => {

        
        openAccordion = (i) => {
            if(selected === i){
                return setSelected(null)
            } 

            setSelected(i)
        }

    }, [selected]);



    return (
        <AccordionComponentContainer>
           
            <div className='wrapper'>
                <div className='accordion'>
                    
                    {data.map( (item, i) => {

                        return (
                            <div className='item' key={i}>
                                <div className='title' onClick={() => openAccordion(i)}>
                                    <h2 className={ (selected === i) ? 'title__h2 show' : 'title__h2'}>
                                        {item.question} 
                                        <img src={vector}></img>
                                    </h2>
                                </div>
                                <div 
                                    className={ (selected === i) ? 'content show' : 'content'}                                
                                >
                                    <img src={verticalLine}></img>
                                    <p>{item.answer}</p> 
                                </div>
                            </div>
                        )

                        

                    })}

                    

                </div>

            </div>
        </AccordionComponentContainer>
    );
}

const AccordionComponentContainer = styled.section`
    max-width: 500px;
    padding: 0 35px ;

    .title {
        // background: #fff9;
        border-bottom: 3px white dashed;
        /* padding: 0 16px; */
        cursor: pointer;
        transition: all 1s;
        

        &__h2 {
            text-align: left;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 23px;
            transition: all 300ms ease;

            &:hover {
                text-shadow: -1.5px 1px ${v.PINK};
            }
        }
    }

    .content {
        margin-top: 12px;
        max-height: 0;
        overflow: hidden;
        transition: 1s;
        text-align: left;
        display: flex;
        font-family: 'Source sans Pro';

        p {
            margin: 0 0 0 8px ;
            padding: 0;
            /* margin-left: 8px; */
            font-size: 14px;
            line-height: 1.5;
            font-family: 'Source sans Pro';
        }
    }

    .content.show {
        max-height: 999px;
        height: auto;
        transition: 4s;

    }

    .title__h2.show {

        transition: all 300ms ease;
        text-shadow: -1.5px 1px ${v.PINK};


    }



`;

export default AccordionComponent;
