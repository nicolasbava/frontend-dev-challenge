import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as v from '../../assets/js/variables'

import icon from '../../assets/img/testimonials-icon.png'
import user from '../../assets/img/testimonials-user.png'
import markers from '../../assets/img/testimonials-markers.png'
import frame from '../../assets/img/testimonials-frame.png'

let testimonials = [
    {
        img: {user},
        text: 'Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.',
        name: 'Maria Montessori'
    },
    {
        img: {user},
        text: '2 Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.',
        name: 'Maria Rodriguez'
    },
    {
        img: {user},
        text: ' 3 Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.',
        name: 'Juan Gonzalez'
    },
]


// const openAndCloseAccordion = () => {
//     alert ('do something')
//   }



const Testimonials = () => {

    useEffect(() => {

        // to develop slider

        
        return () => {
            
        };
    }, []);

    
    let col = useRef()
    let btn0 = useRef()
    let col1 = useRef()
    let col2 = useRef()

   

    return (
        <TestimonialsContainer>
            <img className='testimonial__icon' src={icon}></img>

            <div className='slide-container'>
                <div className='slide-row' ref={col}>
                    {testimonials.map( (item,index) => {
                        return (
                            <div ref={col} className='slide-col'>
                                <img className='testimonial__user' src={user}></img>
                                <p className='testimonial__p'>{item.text}</p>
                                <h4 className='testimonial__name'> ~ {item.name} ~</h4>
                            </div>
                        )
                    })}
                </div>
           
            </div>
            <div className='testimonial__indicator'>
                <span ref={btn0} className='testimonial__indicator--btn'></span>
                <span  className='testimonial__indicator--btn'></span>
                <span  className='testimonial__indicator--btn'></span>
            </div>

            <img className='testimonial__frame' src={frame} ></img>

        </TestimonialsContainer>
    );
}



// STYLES -------------

const TestimonialsContainer = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    
    padding: 100px 50px 150px;
    background: ${v.GREY_100};

    .slide {
        &-container {
            overflow: hidden;
            display: flex;
            /* justify-content: center;
            align-items: center; */
            
            COLOR: BLACK;
            margin-left: auto;
            margin-right: auto;
            max-width: 400px;
        }

        &-row {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 1200px;
        }

        &-col {
            width: 400px
        }
    }

    .testimonial {

        &__indicator {
            

            &--btn {
                width: 15px;
                height: 15px;
                background: grey;
                display: inline-block;
                margin: 4px;
                border-radius: 15px;
                cursor: pointer
            }
        }

        &__icon {
            max-width: 50px;
        }

        &__user {
            max-width: 200px;
            margin: 60px auto 40px;
            cursor: pointer;
        }

        &__p {
            font-family: ${v.TESTIMONIAL__P};
            color: ${v.GREY_400};
        }

        &__name {
            color: ${v.GREY_700};
            text-align: right;
        }

        &__markers {
            max-width: 200px;
            margin: 10px auto;
        }

        &__frame {
            margin-top: 50px;
            max-width: 200px;
            position: absolute;
            bottom: -50px;
            left: 0;     
            cursor:pointer;
            transition: all 300ms ease;

            &:hover {
                transform: scale(1.0125);
            }
        }
    }



    @media (min-width: 750px) {

        .testimonial {

            &__frame {
                left: 10%;
            }

            &__icon {
                margin-left: 24%;
            }
        }


    }
`;

export default Testimonials;
