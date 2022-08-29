import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import vector from '../../assets/img/accordion/vector-down.png'
import verticalLine from '../../assets/img/accordion/vertical-line-pink.png'
import * as v from '../../assets/js/variables'

// import Accordion data from json
import dataAccordion from '../../models/modelAcordion.json'


const AccordionComponent = () => {
                                                        
    const [selected, setSelected] = useState(null)          // state to open accordion

    let openAccordion                                       // declare a variable to open accordion

    useEffect(() => {
 
        openAccordion = (i) => {                            // open accordion function
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
                    
                    {dataAccordion.map( (item, i) => {          // extract data from json to accordion
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
        border-bottom: 3px white dashed;
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
