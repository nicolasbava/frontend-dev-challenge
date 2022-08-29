import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import * as v from '../../assets/js/variables'

// import data testimonials from json in models -> modelTestimonial.json
import testimonials from '../../models/modelTestimonials.json'

import icon from '../../assets/img/testimonials-icon.png'

import frame from '../../assets/img/testimonials-frame.png'



const Testimonials = () => {                        // Slider for testimonials

    const [number, setNumber] = useState(1)         // Create state to manipulate dom
    
    let container = useRef()                        // Create ref from ul container that contains individual testimonial
    let btn1 = useRef()
    let btn2 = useRef()
    let btn3 = useRef()


    useEffect(() => {                               // I translate horizontally the slider acording to the state declared previously



            if(number === 1){                       // if number id 1, so translate slider to original position -> original position
                container.current.style.transform = 'translateX(0)';
                btn1.current.style.background = 'black'
                btn2.current.style.background = 'grey'
                btn3.current.style.background = 'grey'
                
            } else if(number === 2){
                container.current.style.transform = 'translateX(-33.3%)';
                btn1.current.style.background = 'grey'
                btn2.current.style.background = 'black'
                btn3.current.style.background = 'grey'

            } else if (number === 3){
                container.current.style.transform = 'translateX(-67.3%)';
                btn1.current.style.background = 'grey'
                btn2.current.style.background = 'grey'
                btn3.current.style.background = 'black'
            }   

    }, [number]);                                   // each time number update it renders the component again
    
    const setNumberState = (num) => {
        if(num === 1){
            setNumber(1)
        } else if(num === 2){
            setNumber(2)
        } else if (num === 3){
            setNumber(3)
        }
    }
  
   

    return (
        <TestimonialsContainer>
            <img className='testimonial__icon' src={icon}></img>

            <div className='slide-container'>
                <ul className='slide-row' ref={container}>

                    {testimonials.map( (item,index) => {                    // map to extract the data from json 
                        
                        let url = `${process.env.PUBLIC_URL}/img/${item.img}`       // global url to acces image
                        
                        return (
                            <li key={index + item} className='slide-col'>
                                <img className='testimonial__user' src={url} ></img>
                                <p className='testimonial__p'>{item.text}</p>
                                <h4 className='testimonial__name'> ~ {item.name} ~</h4>
                            </li>
                        )
                    })}

                </ul>
           
            </div>
            <div className='testimonial__indicator'>
                <span onClick={()=> setNumberState(1)} ref={btn1} className='testimonial__indicator--btn btn-1'></span> 
                <span onClick={()=> setNumberState(2)} ref={btn2}  className='testimonial__indicator--btn btn-2'></span>
                <span onClick={()=> setNumberState(3)} ref={btn3} className='testimonial__indicator--btn btn-3'></span>
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
    /* display: none; */
    
    padding: 100px 50px 150px;
    background: ${v.GREY_100};

    .slide {

        
        &-container {
            overflow: hidden;
            display: flex;
            /* justify-content: center; */
            align-items: center;
            
            color: black;
            margin-left: auto;
            margin-right: auto;
            /* max-width: 410px; */
            width: 80vw;
        }

        &-row {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            transition: all 1s ease;
            position: relative;
            /* width: 1200px; */
            
        }

        &-col {
            /* width: 400px; */
            list-style: none;
            /* margin: 0 10px; */
            width: 80vw;
        }
    }



    .testimonial {

        &__indicator {
            

            &--btn {
                width: 15px;
                height: 15px;
                background: ${v.GREY_200};
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
            margin: 20px auto 40px;
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

    @media (min-width: 400px){
        .slide {
            &-container { 
                width: 50vw;
            }

            &-col {
                width: 50vw;
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

        .slide {
            &-container { 
                width: 40vw;
            }

            &-col {
                width: 40vw;
            }
        }


    }
`;

export default Testimonials;
