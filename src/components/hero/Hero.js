import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as v from '../../assets/js/variables'

// import shadows images - to implement
import shadow1 from '../../assets/img/shadows/shadow--up--right.png'
import shadow2 from '../../assets/img/shadows/shadow--right.png'
import shadow3 from '../../assets/img/shadows/shadow--up--right.png'

// import background images
import img1 from '../../assets/img/hero/hero-img1.png'
import img2 from '../../assets/img/hero/hero-img2.png'
import img3 from '../../assets/img/hero/hero-img3.png'
import Button1 from '../buttons/button1';

// IMAGES ARRAY TO CHANGE BG AUTOMATICALLY
const images = [img1, img2, img3];                                  // images array to put as hero image 

const Hero = () => {
                                                                    // STATE - CHANGE BACKGROUND AUTOMATICALLY
    const [currentIndex, setCurrentIndex] = useState(0);            // state to look for an image in images array
                                                               
    useEffect(() => {                 
                                      // CHANGE BACKGROUND FUNCTION BY AN SET INTERVAL
        const intervalId = setInterval(() => {                      // function to change hero image automatically
            if(currentIndex === images.length - 1) {                // counter = 0 if the number reach the end of the array
                setCurrentIndex(0);                                 
            } 
            else {
                setCurrentIndex(currentIndex + 1);                  // adds 1 to counter if has not reached the end of the array
            }
        }, 5000)

        return () => clearInterval(intervalId);
    }, [currentIndex]);



        return (
            <HeroContainer>
                {/* WHITE SHADOWS */}
                {/* <img className='hero__shadow--1' src={shadow1} /> */}
                {/* <img className='hero__shadow--2' src={shadow2} />  */}
                {/* <img className='hero__shadow--3' src={shadow} /> */}

                {/* IMAGES CIRCULAR */}
                <img className='hero__img'  src={images[currentIndex]} ></img> 
                
                {/* TITLE */}
                <div className='hero__title'>
                    <h1>Su viaje de <span className='hero__title--pink'> salud emocional </span>comienza aqui.</h1>
                    <h2>Conoce nuestros profesionales con licencia.</h2>
                    <h3>Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad.</h3>
                    <HeroForm>
                        <input className='hero-input' type='email' name='heroEmail' placeholder='Suscribirse al newsletter' ></input>
                        <Button1 text='Suscribirme' />
                    </HeroForm>
                </div>
            </HeroContainer>
        );
}

const HeroContainer = styled.section`
    padding: 0 20px;
    padding-top: 23vh;
    display: flex;
    text-align: left;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    


    
    .hero {
        &__title {
            padding: 75px 0px;
            width: 90%;

            &--pink {
                color:${v.PINK}
            }
        }

        &__img {
            box-shadow: 0 0px 20px -3px #fff;
            border-radius: 50%;
            cursor: pointer;
            transition: all 500ms ease;

            &:hover {
                transform: scale(1.0125);
            }
        }

        &__shadow {
            &--1 {
                position: absolute;
                left: -52%;
                top: -34.1%;
                opacity: 0.6;
                z-index: 0;
            }

            &--2 {
                position: absolute;
                left: 52%;
                top: -34.1%;
                opacity: 0.6;
                z-index: 0;
            }

            &--3 {
                position: absolute;
                left: 52%;
                top: 47.1%;
                opacity: 0.2;
                z-index: 0;
            }
        }
    }

    @media (min-width: 400px){
        padding: 0 50px;
        padding-top: 23%;
    }

    @media (min-width: 750px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        padding: 9vh 13% 0;

        .hero {
            
            &__title {
                width: 45%;
            }

            &__img {
                margin-left: 5%;
            }
            
            &__shadow {
                &--1 {
                    position: absolute;
                    left: -72%;
                    top: -34.1%;
                    opacity: 0.6;
                    z-index: 0;
                }

                &--2 {
                    position: absolute;
                    left: 72%;
                    top: -34.1%;
                    opacity: 0.6;
                    z-index: 0;
                }

                &--3 {
                    position: absolute;
                    left: 82%;
                    top: 57.1%;
                    opacity: 0.2;
                    z-index: 0;
                }
            }
        }
    }
`;

const HeroForm = styled.section`
    /* padding: 50px 0 0; */
    display:flex;
    flex-direction: column;

    button {
        margin: 0;
    }

    input {
        overflow: hidden;
        background-color: transparent;
        padding: 10px;
        border-radius: 5px;
        outline: 2px ${v.GREY_100} solid;
        border: none;
        color: white;
        margin-bottom: 10px;

        &::placeholder {
            color: ${v.GREY_100}
        }

        &:focus {
            color: white;
        }
    }

    @media (min-width: 400px) {
        flex-direction: row;
        
        input {
            margin: 0 0 0 0;
        }

        button {
            margin-left: 8px;
        }
    }
`;



export default Hero;
