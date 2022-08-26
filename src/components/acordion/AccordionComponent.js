import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const data = [
    {
        question: '¿Cuáles son los pasos para tomar una decisión?',
        answer: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final'
    },
    {
        question: '¿Cuáles son los pasos para tomar una decisión?',
        answer: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final'
    },
    {
        question: '¿Cuáles son los pasos para tomar una decisión?',
        answer: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final'
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
                                    <h2 className='title__h2'>
                                        {item.question} 
                                        <span>
                                            {}
                                        </span>
                                    </h2>
                                </div>
                                <div className={ selected === i ? 'content show' : 'content'}                                
                                
                                >{item.answer} </div>
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

    .title {
        // background: #fff9;
        border-bottom: 3px white dashed;
        padding: 0 16px;
        cursor: pointer;
        transition: all 1s;
        

        &__h2 {
            text-align: left;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    .content {
        margin-top: 10px;
        max-height: 0;
        overflow: hidden;
        transition: 1s;
        text-align: left;
    }

    .content.show {
        max-height: 999px;
        height: auto;
        transition: 4s;
    }

`;

export default AccordionComponent;
